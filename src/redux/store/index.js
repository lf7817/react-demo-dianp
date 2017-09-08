import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

// import { createLogger } from 'redux-logger'
// const logger = createLogger({})

export default (initialState) => {
  let store
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
    )
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
  }

  return store
}