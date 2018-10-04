import './stylesheets/main.scss'

import registerServiceWorker from './registerServiceWorker'

import React from 'react'
import ReactDOM from 'react-dom'

import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor, history } from 'store/configureStore'

import App from './App'
import Examples from 'scenes/Examples'

import Layout from 'components/Layout'

import Login from 'scenes/Login'
import ProtectedRoute from 'containers/ProtectedRoute'
import CreateQuestion from 'scenes/CreateQuestion'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/" component={Login} />
            <Layout>
              <Route path="/examples" component={Examples} />
              <ProtectedRoute path="/nova" component={CreateQuestion} />
            </Layout>
            <Route exact path="*" render={() => 404} />
          </Switch>
        </App>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
