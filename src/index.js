import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
// import 'amfe-flexible'
import './assets/style/common.css'
import './assets/style/font.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
