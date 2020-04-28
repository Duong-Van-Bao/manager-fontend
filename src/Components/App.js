import React, { Component } from 'react';
import AppContainer from './appContainer/AppContainer';
import Headers from './header/Headers';
import Footer from './footer/Footer';

class App extends Component {
  render() {
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