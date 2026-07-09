import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  axios.get("http://localhost:3000/api/notes").then((res)=>{
    setNotes(res.data.note)
    
  })
  const [notes, setNotes] = useState([ 
    {
      'title':"Test title 1",
      "description": "Description test 1",
    }, 
      {
      'title':"Test title 2",
      "description": "Description test 2",
    }, 
      {
      'title':"Test title 3",
      "description": "Description test 3",
    }, 
      {
      'title':"Test title 4",
      "description": "Description test 4",
    }, 
     

]);
  return (
    <>
      <div className="notes">
       {notes.map(note=>{
        return   <div className="note">
          <h1>{note.title}</h1>
          <h5>{note.description}</h5>
        </div> 
})}
      </div>
    </>
  )
}

export default App
