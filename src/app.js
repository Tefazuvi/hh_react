import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './assets/scss/main.scss'

import Banner from './components/presentational/banner/'
import Cocktails from './components/container/cocktails/'
import Header from './components/presentational/header/'
import HomeCard from './components/presentational/homeCard/'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Banner />
        <HomeCard />
        <Cocktails />
      </div>
    )
  }
}

export default App;