import React, { useState } from 'react'
import FormGroup from '../components/FormGroup'
import { Link, useNavigate } from 'react-router'
import  '../styles/login.scss'
import {useAuth} from '../hook/useAuth'


const Login = () => {

  const {loading,handleLogin} = useAuth()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async (e)=>{
    e.preventDefault()

   await handleLogin({email,password})
    navigate('/')

  }

  return (
   <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <FormGroup 
          value={email}
          onchange={e=>{setEmail(e.target.value)}}
           label="Email" placeholder="Enter your Email" />
          <FormGroup 
          value={password}
          onchange={e=>{setPassword(e.target.value)}}
           label="Password" placeholder="Enter your Password" />
          <button className='button'>Login</button>
        </form>
        <p>Don't have account? <Link to={'/register'}>Register</Link> </p>
      </div>
   </main>
  )
}

export default Login
