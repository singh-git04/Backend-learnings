import React, { useState,useRef } from 'react'
import {useNavigate} from "react-router"
import "../style/createPost.scss"
import { usePost} from '../hook/usePost'
const CreatePost = () => {

    const [caption, setcaption] = useState("");
    const postImageInputFieldRef = useRef(null)


const navigate = useNavigate()

const {handleCreatePost,loading} = usePost()

const handleCreate = async (e)=>{
    e.preventDefault()
    
    const file = postImageInputFieldRef.current.files[0]
       await  handleCreatePost(file,caption)
       
        navigate('/')
    }
    if(loading){
        return (<main><h1>Creating Post</h1></main>)
    }
  return (
    
        <main>
            <div className="createPost">
            <h1>Create post</h1>
            <form onSubmit={handleCreate}>
                <label className='postImage-label' htmlFor="postImage">Select Image</label>
                <input ref={postImageInputFieldRef} hidden type="file" name='postImage' id='postImage' />
                <input 
                value={caption}
                onChange={(e)=>{setcaption(e.target.value)}}
                 type="text" name='caption' id='caption' placeholder='Enter caption' />
                <button className='button primary-btn'>Create</button>
            </form>
        </div>
        </main>
     
  )
}

export default CreatePost
