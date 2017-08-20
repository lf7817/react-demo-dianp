import React from 'react'
import App from './router'
import { Provider } from 'react-redux'
import storeConfig from './store'

const store = storeConfig()

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
