import React, { useState } from 'react'
import { Link } from 'react-router'
import "../style/form.scss"
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginSubmit(e){
        e.preventDefault()

    }

  return (
   <main>
    <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLoginSubmit}>

            <input onInput={e=>{setUsername(e.target.value)}}
             type="text"
             placeholder='Enter username' 
            name='username' />

            <input onInput={e=>{setPassword(e.target.value)}}
            type="text"
             placeholder='Enter password' 
            name='password' />
            <button>Login</button>
        </form>
        <p>Don't have account! <Link className='toggleAuthForm' to='/register'>Register</Link> </p>
    </div>
   </main>
  )
}

export default Login
