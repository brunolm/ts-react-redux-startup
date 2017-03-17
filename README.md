# ts-react-redux-startup

TypeScript redux configuration project

## Build

```
npm run build:dev:watch
```

## Run

```
npm run dev
```


## Steps

Notes I took when creating this project

- Installation
  - npm i -S vash
    - Template engine. You could just send html file instead.
  - npm i -S serve-favicon
  - npm i -S redux-thunk
    - Used to allow async actions
  - npm i -S redux
  - npm i -S react-router
  - npm i -S react-redux
  - npm i -S react-dom
  - npm i -S react
  - npm i -S jquery
  - npm i -S history
  - npm i -S express
  - npm i -S compression
    - Optimize server
  - npm i -S clone
    - Like Object.assign but does a deep copy
  - npm i -D @types/chai
  - npm i -D @types/clone
  - npm i -D @types/express
  - npm i -D @types/history
  - npm i -D @types/jquery
  - npm i -D @types/mocha
  - npm i -D @types/node
  - npm i -D @types/react
  - npm i -D @types/react-dom
  - npm i -D @types/react-redux
  - npm i -D @types/react-router
  - npm i -D @types/redux
  - npm i -D @types/redux-thunk
  - npm i -D @types/webpack
  - npm i -D autoprefixer
    - Add browser prefix on css
  - npm i -D babel
  - npm i -D babel-core
  - npm i -D babel-loader
  - npm i -D babel-polyfill
  - npm i -D babel-preset-es2015
  - npm i -D babel-preset-stage-0
  - npm i -D chai
  - npm i -D css-loader
  - npm i -D extract-text-webpack-plugin@2.0.0-beta.3
    - Used to generate a CSS file from imports instead of a JS
  - npm i -D file-loader
  - npm i -D mocha
  - npm i -D postcss-loader
  - npm i -D precss
    - Allows the use o SASS like styles without SASS
  - npm i -D rimraf
  - npm i -D style-loader
  - npm i -D supervisor
  - npm i -D ts-loader
  - npm i -D typescript@beta
  - npm i -D webpack@beta
- Project configuration and flow
  - tsconfig.json – TypeScript configuration
    - “target”: “es6”
      - Allows the use of async/await
    - “jsx”: “react”
      - Compiles tsx files into plain JavaScript
    - “skipLibCheck”: true
      - Ignore errors from definitions, since it is still in beta there are a few issues
  - .babelrc – Babel configuration
    - { “presets”: [ “es2015”, “stage-0” ] }
      - Allows everything
  - webpack.config.js – Webpack configuration
    - context
      - Defines root path context for webpack, probably always set it to __dirname (defaults to process.cwd())
    - entry
      - app
        - Where to start building files, grabs index and follow requires
    - output
      - path
        - Output folder location
      - publicPath
        - Application route to static files
      - filename
        - Output filename
          - [name] – entry name
    - resolve
      - extensions
        - Apply loaders on defined extensions
        - “Empty” extension (”) allows parsing of files without extensions
    - postcss
      - Callback function for postcss-loader
      - precss
        - Parse SASS like styles
      - autoprefixer
        - Add prefix on browser specific styles
    - module
      - loaders
        - { test: /\.tsx?$/, loader: ‘babel!ts’, include: /src|spec/, }
          - Builds ts and tsx from src and spec folder using ts-loader then babel-loader
        - { test: /\.s?css$/, loader: ExtractTextPlugin.extract({ fallbackLoader: ‘style’, loader: ‘css!postcss’ }), include: /src/, }
          - Builds css from src folder using postcss, precss, autoprefixer, css, style
    - plugins
      - new ExtractTextPlugin({ filename: ‘app.css’, disable: false, allChunks: true })
        - Extract contents and add to file, useful to generate css files
  - app.js – App configuration
    - app.use(compression())
      - Enable gzip from server making requests smaller
      - Note: If you are using webpack-dev-middleware and/or webpack-hot-middleware register these before compression, or it will interfere
    - app.use(favicon(path))
      - Setup favicon
    - app.use(‘/static’, express.static(path))
      - Makes routes to /static render static content from folder path
    - app.set(‘view engine’, ‘vash’)
      - Setup express to require(‘vash’) when rendering views
    - app.set(‘views’, path)
      - Setup root folder of views
    - app.engine(‘cshtml’, vash.renderFile)
      - Add support to cshtml to be rendered as vash views. This leverages VSCode razor editor
  - index.js – Server startup
    - app.use(‘/api’, require(‘./src/api’))
      - Uses express.Router to create routes under ‘/api’
    - app.use((req, res) => …)
      - Catch-all route which will render index.cshtml view
    - app.listen(…)
      - Starts the server
  - src/index.tsx – Redux starting point
    - createStore(reducers, applyMiddleware(thunk))
      - Create a single application store using all reducers
        - State becomes: state.app, state.about…
      - thunk allows async actions
    - <Provider store={ store }>
      - Setup redux store
      - <Router history={ browserHistory } children={ Routes } />
        - Setup routes
  - src/routes.tsx – Setup routes
    - <Router>
      - <Route path=”/” component={ App } />
        - Accessing ‘/’ on the browser will render the App container
  - src/components/app/index.tsx – Redux container
    - class App extends React<any, any>
      - Creates a react component
    - connect(mapStateToProps)
      - Converts state returned by the reducer into props for the component
        - Uses static propTypes to inject properties
  - src/actions/about.ts – export functions that a component can request
    - mirror
      - A helper function I created to make object value equal to its key, with a prefix (namespace) to differentiate actions since the entire application goes through the same dispatcher
    - changeText()
      - Makes an ajax request and calls dispatch on the callback
      - Note: This is only possible because o thunk middleware, otherwise you have to return a plain object
  - src/reducers/about.ts – State for about container
    - Export a default function that handle actions when something is dispatched
    - Should return a new object
      - Don’t reassign the state, make a copy. Unless it falls on default which means “the dispatched action has nothing to do with this reducer so return the same state for it”
      - Keep in mind
        - Object.assign does not do a deep copy, that’s why I included clone

### v1.1.0

- Upgrade to `react-router` 4
  - `browserHistory` no longer available
    - Use `import { createBrowserHistory } from 'history';` instead
  - Installed `react-router-redux`
    - Use `import { syncHistoryWithStore } from 'react-router-redux';` to create redux routes
    - Create `history` with `const history = syncHistoryWithStore(createBrowserHistory() as any, store);`
    - Add `routing` to reducers
      - `import { routerReducer as routing } from 'react-router-redux';`
- Add ts-node and rename index and app to `.ts` files
  - Change start script to use ts-node
  - Add `ts-node*/` to gitignore
- Add support for webpack-dev-middleware when using docker
  - Add to middleware config `watchOptions: { poll: 300 }`
- Change view engine default extension to `cshtml` intead of `vash`
- Add `webpack-hot-middleware`
  - Configure with `app.use(require('webpack-hot-middleware')(compiler));`
  - On the startup react script added `module.hot.accept`
- Migrate `webpack` to v2
  - Custom properties are no longer allowed
  - Loaders must include `-loader`
  - Added postcss config on `LoaderOptionsPlugin`
  - Removed invalid empty extension to resolve
