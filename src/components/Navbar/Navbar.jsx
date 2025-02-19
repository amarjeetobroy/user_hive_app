import React, { Fragment } from 'react'
import style from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Navbar = () => {

    let userID = sessionStorage.getItem("authuser")
    let adminID = sessionStorage.getItem("adminID")

    let navigate = useNavigate();

    let logout = () =>{
        if(adminID){
            sessionStorage.removeItem("adminID")
            toast.success("Logged out")
            navigate("/")
        }
        else{
            sessionStorage.removeItem("authuser")
            toast.success("Logged out")
            navigate("/")
        }
    }

    console.log(userID, "user")
    console.log(adminID, "admin")
  return (
    <nav id={style.nav}>
      <figure>
        <img src="/user_hive_logo.png" alt='hive-logo' title='hive'/>
      </figure>
      <ul>
        <li><Link to="/">Home</Link></li>
        {
            adminID || userID ?(
                <Fragment>
                <li><Link to={adminID ? "/admin" : "/profile"}>profile</Link></li>
                    <li className='primary-btn' onClick={logout}>logout</li>
                </Fragment>
            ):(
                <Fragment>
                <li className='primary-btn'><Link to="/login">Login</Link></li>
                <li className='secondary-btn'><Link to="/signup">Signup</Link></li>
                </Fragment>
            )
        }
        {/* <li className='primary-btn'><Link to="/login">Login</Link></li>
        <li className='secondary-btn'><Link to="/signup">Signup</Link></li> */}
      </ul>
    </nav>
  )
}

export default Navbar
