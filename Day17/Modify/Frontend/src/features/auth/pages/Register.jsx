import React from 'react'
import {Link} from 'react-router'
import FormGroup from '../components/FormGroup'
import "../styles/register.scss"

const Register = ({label,placeholder}) => {
  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form>
            <FormGroup label= 'Name' placeholder="Enter your name" />
            <FormGroup label= 'Email' placeholder="Enter your Email" />
            <FormGroup label= 'Password' placeholder="Enter password" />
            <button className='button'>Register</button>
        </form>
        <p>Already have account! <Link to= '/login'>Login </Link> </p>
      </div>
    </main>
  )
}

export default Register
