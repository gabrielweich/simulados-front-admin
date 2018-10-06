import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import { createBrowserHistory } from 'history'
import rootReducer from 'store'

const persistConfig = {
  key: 'root',
  storage,
}

const enhancedCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const history = createBrowserHistory()
export const store = createStore(
  connectRouter(history)(persistedReducer),
  enhancedCompose(applyMiddleware(logger, thunk, routerMiddleware(history))),
)
export const persistor = persistStore(store)
