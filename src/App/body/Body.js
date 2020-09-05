import React from 'react';
import{Route} from "react-router-dom"
import './Body.css'
import List from './List/List'
import Editor from './Editor/Editor'
import Editorfornote from './Editor/Editorfornote'


const Body=()=> {
  return (
    <div className="Body">
        
        <Route exact path="/" render={List}/>
        <Route path="/f/:id" render={List}/>
        <Route path="/editor" render={Editor}/>
        <Route path="/editorfornotes/:id" render={Editorfornote}/>
    </div>
  );
}

export default Body;
