import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/main.scss'

import Banner from './components/presentational/banner/'
import Cocktails from './components/container/cocktails/'
import Details from './components/container/details/'

class App extends Component {
  render() {
    return (
      <div className="dcc">
        <Banner />
        <Cocktails />
        <Details />
      </div>
    )
  }
}

export default App;