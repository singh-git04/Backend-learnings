import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import {useAuth} from '../hook/useAuth'

const Register = () => {
  const {user,loading, handleRegister} = useAuth()

  const [username, setUsername] = useState("");
  const [ email, setEmail] = useState("");
  const [password, setPassword ] = useState("");

  const navigate = useNavigate()

  const handlesubmit = async (e)=>{
      e.preventDefault()
  
      await handleRegister(username,email,password)
      navigate('/login')
  }
  if(loading){
    return <main>
      <h1>Loading...</h1>
    </main>
  }
  return (
       <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handlesubmit}>
          <input onInput={e=>{
            setUsername(e.target.value)
          }}
           type="text"
           name='username'
           id='username'
           placeholder='Enter username' />
          <input onInput={e=>{
            setEmail(e.target.value)
          }}
           type="text"
           name='email'
           id='email'
           placeholder='Enter email' />
           <input onInput={e=>{
            setPassword(e.target.value)
          }}
          type="text"
           name='password'
           id='password'
           placeholder='Enter password' />

           <button className='button primary-btn'>Register</button>
        </form>
        <p>Already have account <Link  className='toggleform' to={'/login'} >Login.</Link> </p>
      </div>
    </main>
  )
}

export default Register
