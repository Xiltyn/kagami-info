Full React/Redux boilerplate solution @ Kagami
===================================================

Full stack React app scaffolding including:
- Type-checking with Flow
- Routing with React-Router v4
- WebPack v3 setup
- Development with hot-reload
- Docker configuration for production
- EsLint set up for beautiful code
- React animations module [react-pose](https://popmotion.io/pose/learn/get-started/)
- Styleguide generation module [react-styleguidist](https://github.com/styleguidist/react-styleguidist)

Scripts
---------------
- `yarn` to download and install dependencies
- `yarn run dev` for starting a dev server with hot-reloading
- `yarn run build` for building production ready webpack build
- `yarn run start` for launching production server
- `yarn run lint` for fixing esLint issues throughout the `~/src/` folder
- `yarn run docker:build` for building a new docker image
- `yarn run docker:compose` for launching previously built docker image
- `yarn run docs:build` for building styleguide files
- `yarn run docs:start` for launching previously built styleguide server

Preset webpack aliases for in-app URLs
--------------------------------------
- utils: `'src/utils'`,
- styles: `'src/styles'`,
- routes: `'src/routes'`,
- shared: `'src/shared'`,
- modules: `'src/modules'`,
- containers: `'src/containers'`,
- components: `'src/components'`,

Features
--------
- **Development server**
	- Flow.js 
 	- React-hotloader3
 	- React router redux
 	- Redux reducer hot-reloading
 	- Redux dev tool for chrome
- **Production server** 
 	- Webpack code splitting
 	- Environment variables
 	- Optimization and code compression
 	- Api and database connection ready
- **Webpack v3** 
 	- Babel loading
 	- File loading for img/fonts
 	- Sass/Css/Style loading
 	- Preloader for linting
- **React Router v4**
- **Server Side Rendering**
- **Code Splitting**
