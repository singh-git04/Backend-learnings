import React from 'react'
import { Link, useNavigate } from 'react-router'
import "../style/form.scss"
import {useAuth} from '../hook/useAuth'
import { useState } from 'react'
const Login = () => {

  const {user,loading, handleLogin} = useAuth()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
   const handlSubmit= async (e)=>{
    e.preventDefault()
 
    
    await handleLogin(username,password)
     
    
    navigate('/')
  }
  if(loading){
    return <main>
      <h1>Loading.....</h1>
    </main>
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handlSubmit}>
          <input onInput={
            e=>{
            setUsername(e.target.value)              
            }
          }
           type="text"
           name='username'
           id='username'
           placeholder='Enter username' />

          <input
          onInput={
            e=>{
            setPassword(e.target.value)              
            }
          } type="text"
           name='password'
           id='password'
           placeholder='Enter password' />

           <button className='button primary-btn'>Login</button>
        </form>
        <p>Don't have account <Link className='toggleform' to={'/register'} >Create one.</Link> </p>
      </div>
    </main>

  )
}

export default Login
