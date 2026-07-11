import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  // console.log("heyyyyy");
  
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [editingId, setEditingId] = useState(null);
// console.log("from top",title,description,editingId);

function fetchNotes(){
   axios.get("http://localhost:3000/api/notes").then((res)=>{
    setNotes(res.data.note)
  })
}

useEffect(()=>{
   fetchNotes()
},[])

function handleSubmit(e){
  e.preventDefault()
 
  if(title.trim() === "" || description.trim() === ""){
    alert("Please fill all the fields")
    return
  }
  // const{title, description} = e.target.elements

  // console.log(title.value , description.value);
if(editingId===null){
     axios.post("http://localhost:3000/api/notes",{
    title:title,
    description:description,
  }).then((res)=>{
    // console.log(res.data);
    alert("Note Created")
    fetchNotes()
     setTitle(""),
        setDescription(""),
        setEditingId(null)
    
  })
}else{
    axios.patch("http://localhost:3000/api/notes/"+editingId,
      {title,description})
      .then((res)=>{
        console.log(res);
        
        fetchNotes()
        setTitle(""),
        setDescription(""),
        setEditingId(null)
    })
}
 
 
}

function handleDeleteNote(noteId){
  // console.log(noteId);
  axios.delete("http://localhost:3000/api/notes/"+noteId).then((res)=>{
    // console.log(res);
    alert("Note Deleted")
    fetchNotes()
    
  })
  
}

function handleEditNote(note){
  // console.log(note);

  setTitle(note.title)
  setDescription(note.description)
  setEditingId(note._id)

  //  console.log( "from handleEdit note", note.title,note.description,note._id);
   
  
}

  const [notes, setNotes] = useState([ 
    // {
    //   'title':"Test title 1",
    //   "description": "Description test 1",
    // }, 
    //   {
    //   'title':"Test title 2",
    //   "description": "Description test 2",
    // }, 
    //   {
    //   'title':"Test title 3",
    //   "description": "Description test 3",
    // }, 
    //   {
    //   'title':"Test title 4",
    //   "description": "Description test 4",
    // },    
]);
  return (
    <>

      <h1>
        {editingId=== null ? "Create Note" : "Update Note"}
      </h1>
      <form className='noteForm' onSubmit={handleSubmit}>
        <input name='title' value={title} type="text" placeholder='Enter note'  
        onChange={(e)=>{
          setTitle(e.target.value)
        }} />
        <input  name='description' value={description} type="text" placeholder='Enter description' 
        onChange={(e)=>{
          setDescription(e.target.value)
        }}/>
        <button>
          {editingId===null ?  "Create Note" :"Update Note"}
        </button>
        
      </form>

      <div className="notes">
       {notes.map(note=>{
        return   <div className="note">
          <button onClick={
            ()=>{
              handleEditNote(note)
            }
          }
          >Edit</button>
          <h1>{note.title}</h1>
          <h5>{note.description}</h5>
          <button onClick={()=>{
            handleDeleteNote(note._id)
          }}
          >Delete</button>
        </div> 
})}
      </div>
    </>
  )
}

export default App
