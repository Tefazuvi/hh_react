import React from 'react'
import Banner from './components/presentational/banner/'
import Header from './components/presentational/header/'
import Cocktails from './components/container/cocktails/'


export default class Cocktails extends React.Component {
  render () {
    return (
        <div className="main">
        <Header />
        <Banner />
        <Cocktails />
      </div>
    )
  }
}