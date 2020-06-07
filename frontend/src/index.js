import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './stores/reducers'
import { loadValue, persistValue } from 'utils'
import { LIGHT } from 'config/constants'
import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

const store = createStore(rootReducer, {
    theme: { currentTheme: loadValue('currentTheme') || LIGHT },
})

window.onbeforeunload = (event) => {
    persistValue('currentTheme', store.getState().theme.currentTheme)
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
