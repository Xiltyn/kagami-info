// const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const TodoWebpackPlugin = require('todo-webpack-plugin');
const getClientEnvironment = require('./bin/env');
const paths = require('./bin/paths');

const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        require.resolve('./bin/polyfills'),
        `${require.resolve('webpack-dev-server/client')}?http://localhost:8080/`,
        require.resolve('webpack/hot/dev-server'),
        require.resolve('react-hot-loader/patch'),
        paths.appIndexJs,
    ],
    output: {
        path: paths.appBuild,
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath,
        devtoolModuleFilenameTemplate: info =>
        path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
        modules: ['node_modules', paths.appNodeModules].concat(
            // It is guaranteed to exist because we tweak it in `env.js`
            process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
        ),
        extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
        alias: {
            src: path.resolve(__dirname, './src'),
            react: path.join(__dirname, './node_modules', 'react'),
            configureStore: path.resolve(__dirname, 'src/store/configureStore'),
            components: 'src/components',
            containers: 'src/containers',
            modules: 'src/modules',
            routes: 'src/routes',
            shared: 'src/shared',
            styles: 'src/styles',
            utils: 'src/utils',
            // Support React Quality Web
            // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
            'react-native': 'react-native-web',
        },
        plugins: [
            new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
        ],
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    // Process JS with Babel.
                    {
                        test: /\.(js|jsx)$/,
                        include: paths.appSrc,
                        loader: require.resolve('babel-loader'),
                        options: {
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.(css|scss)$/,
                        use: [
                            require.resolve('style-loader'),
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    importLoaders: 1,
                                },
                            },
                        ],
                    },
                    {
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new TodoWebpackPlugin({
            console:  true,
            // skipUnsupported:   true,             // skip unsupported files
            // suppressFileOutput false,            // suppress file output to disk
            // relativeFilePath   true ,            // display relative file paths
            // withInlineFiles    false ,           // support inline js (ie Vue)

        }),
        new InterpolateHtmlPlugin(env.raw),
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml,
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin(env.stringified),
        new webpack.HotModuleReplacementPlugin(),
        new CaseSensitivePathsPlugin(),
        new FlowWebpackPlugin({
            failOnError: false,
            failOnErrorWatch: false,
            reportingSeverity: 'warning',
            printFlowOutput: true,
            flowPath: require.main.require('flow-bin'),
            flowArgs: ['--color=always'],
            verbose: false,
        }),
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    performance: {
        hints: false,
    },
};
