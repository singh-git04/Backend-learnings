import React from 'react'
import '../../shared/navbar.scss'
import { useNavigate } from 'react-router'

const Navbar = () => {
    const navigate = useNavigate()

    const handleCreatebtn = (e) => {

        navigate('/create-post')
    }
  return (
    <div className="navbar">
        <h3>Insta</h3>
        <button onClick={handleCreatebtn}
         className='button primary-btn'>Create Post</button>
    </div>
  )
}

export default Navbar
