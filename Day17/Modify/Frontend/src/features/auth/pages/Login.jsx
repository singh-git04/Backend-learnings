import React from 'react'
import FormGroup from '../components/FormGroup'
import { Link } from 'react-router'
import  '../styles/login.scss'

const Login = () => {
  return (
   <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form >
          <FormGroup  label="Email" placeholder="Enter your Email" />
          <FormGroup  label="Password" placeholder="Enter your Password" />
          <button className='button'>Login</button>
        </form>
        <p>Don't have account? <Link to={'/register'}>Register</Link> </p>
      </div>
   </main>
  )
}

export default Login
