import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/main.scss'

import Banner from './components/presentational/banner/'
import Cocktails from './components/container/cocktails/'

class App extends Component {
  render() {
    return (
      <div className="dcc">
        <Banner />
        <Cocktails />
      </div>
    )
  }
}

export default App;