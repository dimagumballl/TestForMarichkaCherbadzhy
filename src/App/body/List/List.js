import React from 'react'
import Note from './Note/Note'
import './List.css'
import DB from './DB'

const productsMap = DB.reduce((accObj,slot)=>({
  ...accObj,
  [slot.id]:slot
}),{})
const List=(match)=> {
  return (
    <div className="List">
      
      {

      match.match.params.id==undefined?   
                    DB.map(({
                        id,
                        name,
                        author,
                        date,
                        text
                        
                    })=>(
                            <Note
                                id={id}
                                name={name}
                                author={author}
                                text={text}
                                date={date}
                            />

                    )):
                    productsMap[match.match.params.id]==undefined?alert("undefined"):
                  <Note
                    id={match.match.params.id}
                    name={productsMap[match.match.params.id].name}
                    author={productsMap[match.match.params.id].author}
                    text={productsMap[match.match.params.id].text}
                    date={productsMap[match.match.params.id].date}
                />
        }
    </div>
  );
}

export default List;
