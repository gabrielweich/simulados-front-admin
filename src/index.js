import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'

import rootReducer from 'store'

import App from './App'
import Examples from 'scenes/Examples'
<<<<<<< HEAD
import CreateQuestion from 'scenes/CreateQuestion'
import Layout from 'components/Layout'
=======
>>>>>>> 408512ed8bb786ebec4f82060c79df9bf075be54
import Login from 'scenes/Login'
import ProtectedRoute from 'containers/ProtectedRoute'
import './stylesheets/main.scss'

const history = createBrowserHistory()
const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  connectRouter(history)(rootReducer),
  enhancedCompose(
    applyMiddleware(
      logger,
      thunk,
      routerMiddleware(history),
    ),
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
<<<<<<< HEAD
      <Switch>
        <App>
          <Layout>
            <Route exact path="/examples" component={Examples} />
            <Route path="/nova" component={CreateQuestion} />
            <Route path="/" component={Login} />
            <ProtectedRoute path="/protected" component={() => 'Protected content'} />
            <Route render={() => 404} />
          </Layout>
        </App>
      </Switch>
=======
      <App>
        <Switch>
          <Route exact path="/examples" component={Examples} />
          <Route path="/" component={Login} />
          <ProtectedRoute path="/protected" component={() => 'Protected content'} />
          <Route render={() => 404} />
        </Switch>
      </App>
>>>>>>> 408512ed8bb786ebec4f82060c79df9bf075be54
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
