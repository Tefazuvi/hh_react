import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './assets/scss/main.scss'

import Header from './components/presentational/header/'
//import Footer from './components/footer/'

/* pages */
import Home from './pages/home/'
import AlcoholicCocktails from './pages/alcoholicCocktails/'
//import About from './pages/about/'
//import Contact from './pages/contact/'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/alcoholic_cocktails' component={AlcoholicCocktails} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App