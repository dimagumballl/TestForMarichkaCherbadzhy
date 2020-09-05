import React, { Component } from 'react'
import './Editor.css'
import DB from '../List/DB'
const productsMap = DB.reduce((accObj,slot)=>({
  ...accObj,
  [slot.id]:slot
}),{})


class Data extends Component{
  constructor(props){
    super(props)
    props.id==undefined?this.state={
      Name:"",
        Author:""
  }:this.state={
    Name:productsMap[props.id].name,
    Author:productsMap[props.id].author,
  }
  }
    
    tapN=(e)=>{
        
        this.setState({ 
            Name:e.target.value
     });
    }
    tapA=(e)=>{
        
        this.setState({ 
            Author:e.target.value
     });
    }
  render(){
    return (
      <div className="Data">
          Name
          <input type='text' value={this.state.Name} onChange={this.tapN}></input>
          <br/>
          Author
          <input type='text' value={this.state.Author} onChange={this.tapA}></input>
      </div>
    );
  }
  
}

export default Data;
