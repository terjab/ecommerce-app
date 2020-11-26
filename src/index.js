import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

const render = () => {
  ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
  )
}

if (module.hot) {
  module.hot.accept('./App', render)
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
