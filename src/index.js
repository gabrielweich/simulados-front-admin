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
import ListQuestions from 'scenes/ListQuestions'
import EditQuestion from './scenes/EditQuestion'
import PedingQuestions from './scenes/PendingQuestions'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Layout>
              <Route exact path="/examples" component={Examples} />
              <ProtectedRoute exact path="/nova" component={CreateQuestion} />
              <ProtectedRoute exact path="/edit" component={EditQuestion} />
              <ProtectedRoute
                exact
                path="/questoespendentes"
                component={PedingQuestions}
              />
              <ProtectedRoute exact path="/" component={ListQuestions} />
            </Layout>
            <Route path="*" render={() => 404} />
          </Switch>
        </App>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

registerServiceWorker()
