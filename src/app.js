import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

import Banner from './components/presentational/banner/'

class App extends Component {
  render() {
    return (
      <div className="dcc">
        <Banner />
      </div>
     )
   }
 }

 export default App;

//ReactDOM.render(<App />, document.getElementById('root'))