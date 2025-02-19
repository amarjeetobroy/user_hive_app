import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./admindashboard.module.css"
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {


    let [allusers, setAllUsers] = useState([])
    let [toggle, setToggle] = useState(false)
  


    useEffect(()=>{
      async function getAllRegistereduser(){
        let {data} = await axios.get("http://localhost:4041/users");
        console.log(data)
        setAllUsers(data)
        
      }
      getAllRegistereduser();
    },[toggle])

    async function deleteUser(id){
      console.log(id)
      try {
        await axios.delete(`http://localhost:4041/users/${id}`);
        toast.success("user Deleted")
        setToggle(!toggle)
      } catch (error) {
        toast.error("unable to delete")
      }
    }
  return (
    <div className={style.div1}>
    <div className={style.admindiv}>
    <h2>AdminDashboard</h2>
    {
      allusers.map((user)=>{

        if(user.email !== "admin@gmail.com" && user.password !== "admin123"){

        return(
          <section key={user.id} className={style.container}>

          <h5>User Details</h5>
            <h3>Name: {user.username}</h3>
            <h4>Email: {user.email}</h4>
            <h4>Password: {user.password}</h4>
            <h4>Phone no: {user.phoneno}</h4>
            <h4>Gender: {user.gender}</h4>
            <h4>DOB: {user.dob}</h4>
            <article>
            <button ><Link to={`/edit/${user.id}`}>Edit</Link></button>
            <button onClick={()=>deleteUser(user.id)}>Delete</button>
            </article>
          </section>
        )
        }
      })
    }
  </div>

  </div>
  )
}

export default AdminDashboard
