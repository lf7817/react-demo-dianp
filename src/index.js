import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import 'amfe-flexible'
import './style/common.css'
import './style/fonts/font.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
