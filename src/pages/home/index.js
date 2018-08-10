import React from 'react'
import Banner from '../../components/presentational/banner/'
import HomeCard from '../../components/presentational/homeCard/'

export default class Home extends React.Component {
  render () {
    return (
        <div className="main">
        <Banner />
        <HomeCard />
      </div>
    )
  }
}