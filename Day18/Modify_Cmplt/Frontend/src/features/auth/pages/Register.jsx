import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"
import {useAuth} from '../hook/useAuth'


const Register = ({label,placeholder,value, onchange}) => {

  const {loading,handleRegister} = useAuth()

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()

    await handleRegister({username,email,password})
    
    navigate('/')
  }
  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <FormGroup 
            value={username}
            onchange={e=>{setUsername(e.target.value)}}
            label= 'Name' placeholder="Enter your name" />
            <FormGroup 
            value={email}
            onchange={e=>{setEmail(e.target.value)}}
            label= 'Email' placeholder="Enter your Email" />
            <FormGroup
            value={password}
            onchange={e=>{setPassword(e.target.value)}}
            label= 'Password' placeholder="Enter password" />
            <button className='button'>Register</button>
        </form>
        <p>Already have account! <Link to= '/login'>Login </Link> </p>
      </div>
    </main>
  )
}

export default Register
