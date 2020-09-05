import React, { Component } from 'react'
import './Editor.css'
import Data from './Data'
import DB from '../List/DB'
const productsMap = DB.reduce((accObj,slot)=>({
  ...accObj,
  [slot.id]:slot
}),{})

class Text extends Component{
  constructor(props){
    super(props)
    props.id==undefined?this.state={
      Text:""
  }:this.state={
    Text:productsMap[props.id].text
  }
  }
  
    
    tap=(e)=>{
        
        this.setState({ 
            Text:e.target.value
     });
    }
    
    
  render(){
    const{
      id,
  }=this.props
  
    return (
      <div className="TextT"> 
            <div className="forT">
                <textarea type='text' value={this.state.Text} onChange={this.tap}></textarea>
            </div>
            <Data
            id={id}
            />
            <button className="button1">SAVE</button>
      </div>
    );
  }
  
}

export default Text;
