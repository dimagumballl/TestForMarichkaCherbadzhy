import React,{Component} from 'react';
import {Link} from "react-router-dom"
import './Note.css';


class Note extends Component{
    state={
        Show:'Text',
    }
    show=()=>{
  
        if(this.state.Show=='Text')
            this.setState((prevState)=>({ 
                Show:'TextV'
         }));
         if(this.state.Show=='TextV')
            this.setState((prevState)=>({
                Show:'Text'
         }));
    }
    render(){
        const{
            id,
            name,
            author,
            date,
            text
        }=this.props
        return (
            <div className="Note" key={id}>
                <div className="Name">
                    NAME: {name}
                </div>
                <div className="Author">
                    AUTHOR: {author}
                </div>
                <div className="Date">
                    DATE: {date}
                </div>
                <button className="button2">
                    Dalete
                </button>
                <Link to={'/editorfornotes/'+id}><button className="button2">
                    Chainge
                </button></Link>
                <button onClick={this.show} className="Notebutton">
                    SHOW
                </button>
                <div className={this.state.Show}>
                    TEXT: {text}
                    <button onClick={this.show}>
                        CLOSE
                    </button>
                </div>
            </div>
          );
    }
  
}

export default Note;
