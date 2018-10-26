import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './_helpers'
import App from './_containers/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))

serviceWorker.register()
