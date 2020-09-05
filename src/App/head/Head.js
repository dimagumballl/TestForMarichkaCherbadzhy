import React, { Component } from 'react'
import './Head.css'
import {Link} from "react-router-dom"

class Head extends Component{
  state={
    n:""
  }
  tapN=(e)=>{
        
    this.setState({ 
        n:e.target.value
 });
}
render(){
  return (
    <div className="Head">
      
        <div className="SearchUnit"> 
          <Link to={"/f/"+this.state.n}>
            <button>by id</button>
          </Link>
          <input type='text' value={this.state.n} onChange={this.tapN}></input>
        </div>
        <Link to="/"><button> get all notes</button></Link>
        <Link to="/editor"><button>create note</button></Link>
    </div>
  );
}
  
}

export default Head;
