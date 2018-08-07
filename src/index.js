import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './js/components/presentational/header.js'

class App extends Component {
  render() {
    return (
      <div className="dcc">
        <Header
          name="Mauricio"
          surName="Poveda"
          dob="quetimporta"
        />
      </div>
     )
   }
 }

 export default App;

ReactDOM.render(<App />, document.getElementById('root'))