module.exports = {
    'env': {
        'es6': true,
        'meteor': true,
        'node': true,
        'browser': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'sourceType': 'module',
        'ecmaFeatures': {
            'sourceType': 'module',
            'jsx': true,
            'modules': true,
            'experimentalObjectRestSpread': true
        },
    },
    'plugins': [
        'react'
    ],
    'globals': {
        'describe': true,
        'it': true,
        'beforeEach': true,
        'before': true,
        'afterEach': true,
        'after': true,
        'expect': true,
        'assert': true,
        'browser': true,
        'server': true
    },
    'rules': {
        'arrow-body-style': [ 'error', 'as-needed' ],
        'arrow-parens': [ 'error', 'as-needed' ],
        'block-spacing': [ 'error', 'always' ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'computed-property-spacing': [ 2, 'always' ],
        'eqeqeq': [ 2, 'smart' ],
        'import/extensions': ['off', 'never'],
        'import/imports-first': 0,
        'import/no-duplicate': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,
        'indent': [ 'error', 4 ],
        'linebreak-style': [ 2, /^win/.test(process.platform) ? 'windows' : 'unix' ],
        'max-len': 0,
        'new-cap': 0,
        'no-console': [ 0 ],
        'no-multi-spaces': [ 'error' ],
        'no-param-reassign': 0,
        'no-trailing-spaces': [ 'error', { "skipBlankLines": true }  ],
        'no-underscore-dangle': [ 0 ],
        'no-unneeded-ternary': [ 2 ],
        'no-unused-expressions': [ 'error', { 'allowTernary': true }],
        'object-curly-spacing': [ 2, 'always' ],
        'quotes': [ 2, 'single' ],
        'react/forbid-prop-types': [0],
        'react/jsx-boolean-value': 0,
        'react/jsx-curly-spacing' : [ 'error', 'always' ],
        'react/jsx-filename-extension': 0,
        'react/jsx-indent': [ 'error', 4 ],
        'react/jsx-no-bind': 0,
        'react/prefer-stateless-function': 0,
        'semi': [ 2, 'always' ],
        'space-before-function-paren': [ 'error', 'never' ],
        'space-in-parens': [ 'error', 'never' ],
        'space-infix-ops': [ 2 ]
    }
};
