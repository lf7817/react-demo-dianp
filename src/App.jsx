import React from 'react'
import RouterMap from './router'
import { Provider } from 'react-redux'
import storeConfig from '@/redux/store'

const store = storeConfig()

const App = () => (
  <Provider store={store}>
    <RouterMap />
  </Provider>
)
export default App
