import React,{Component} from 'react';
import Text from './Text'

import './Editor.css'


const Editorfornotes =(match)=>{
    
        
   
        return (
            <div className="Editor">
                
                
                    <Text
                    id={match.match.params.id}
                    />
                
                
            </div>
          );
    
  
}

export default Editorfornotes;
