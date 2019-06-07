import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import CardsPage from './components/Content/CardsPage'

class App extends Component{
  constructor() {
    super() ;
    this.state = {};
  }
  render(){
  return (
    <div>
     <CardsPage />
    </div>
    );
  }
}


export default App;
