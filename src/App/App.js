import React, { Component } from 'react'
import './App.css';
import Head from './head/Head'
import Body from './body/Body'

class App extends Component{
  render(){
    return (
      <div>
          <Head />
          <Body />
      </div>
    );
  }
  
}

export default App;
