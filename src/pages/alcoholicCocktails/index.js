import React from 'react'
import Banner from '../../components/presentational/alcoholic_banner/'
//import Header from './components/presentational/header/'
import Cocktails from '../../components/container/cocktails/'


export default class AlcoholicCocktails extends React.Component {
  render () {
    return (
        <div className="main">
        <Banner />
        <Cocktails />
      </div>
    )
  }
}