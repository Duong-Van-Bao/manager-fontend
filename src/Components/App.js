import React, { Component } from 'react';
import AppContainer from './appContainer/AppContainer';
import Headers from './header/Headers';
import Footer from './footer/Footer';
import axios from 'axios';

class App extends Component {
  render() {
    axios.get('http://localhost:4000/getdata01')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    return (
        <div className="app">
          <Headers/>
          <AppContainer/> 
          <Footer/>
       </div>
        );
   }
}

export default App;