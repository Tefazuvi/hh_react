import React from 'react'
import Banner from './components/presentational/banner/'
import Header from './components/presentational/header/'
import HomeCard from './components/presentational/homeCard/'

export default class Home extends React.Component {
  render () {
    return (
        <div className="main">
        <Header />
        <Banner />
        <HomeCard />
      </div>
    )
  }
}