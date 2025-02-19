import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./Edituser.module.css"

const EditUser = () => {

    let {id} = useParams();  // used to extract dynamic route value
    console.log(id);

    let [editEmp, setEditEmp] = useState({})

    let navigate = useNavigate();

    useEffect(()=>{
        async function getEditUser(){
            let {data} = await axios.get(`http://localhost:4041/users/${id}`);
            console.log(data);
            setEditEmp(data);   // storing data to state
        }
        getEditUser();
    },[])

    let handleChange = (e) =>{
        let {name, value} = e.target;
        setEditEmp({...editEmp, [name]: value});
    };

    let formSubmit = async (e) =>{
        e.preventDefault();
        console.log(editEmp);

        try{
            let resp = await axios.put(`http://localhost:4041/users/${id}`, editEmp)
        console.log(resp);
        toast.success("user updated");
        navigate("/admin");
        }catch(error){
            toast.error("unable to edit");
        }
    }
  return (
    // <div className={style.container}>
    //   <h1>EditUser</h1>
    //   <form onSubmit={formSubmit}>
    //     <label>Username</label>
    //     <input type="text" name='username' value={editEmp.username} onChange={handleChange}/>
    //     <br />
    //     <br />

    //     <label>Email</label>
    //     <input type="email" name='email' value={editEmp.email} onChange={handleChange}/>
    //     <br />
    //     <br />

    //     <label>Password</label>
    //     <input type="password" name='password' value={editEmp.password} onChange={handleChange}/>
    //     <br />
    //     <br />

    //     <label>Phone no</label>
    //     <input type="tel" name='phoneno' value={editEmp.phoneno} onChange={handleChange}/>
    //     <br />
    //     <br />

    //     <button type="submit">Update</button>
    //   </form>
    // </div>


    <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h1>Update User Details</h1>
          <form onSubmit={formSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor='username'>Username</label>
              <input type="text" id='username' name='username' placeholder='Enter username' value={editEmp.username} onChange={handleChange}/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='email'>Email</label>
              <input type="email" id='email' name='email' placeholder='Enter email' value={editEmp.email} onChange={handleChange}/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='userpassword'>UserPassword</label>
              <input type="password" id='password' name='password' placeholder='Enter password' value={editEmp.password} onChange={handleChange}/>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor='phoneno'>Phone Number</label>
              <input type="tel" id='phoneno' name='phoneno' placeholder='Enter Phone number' value={editEmp.phoneno} onChange={handleChange}/>
            </div>
            <div className={styles.radioGroup} onChange={handleChange}>
              <label>Gender</label>
    
              <label htmlFor='male'>
              <input type='radio' id='male' name='gender' value="male" onChange={handleChange} checked={editEmp.gender === "male"}/>
                Male
              </label>
    
              <label htmlFor='female'>
              <input type='radio' id='male' name='gender' value="female" onChange={handleChange} checked={editEmp.gender === "female"}/>
                Female
              </label>
            </div>
            
    
            {/* <div className={styles.mediaGroup}>
            <label htmlFor="media">Upload Photo</label>
            <input type="file" id="media" name="media" accept="image/*,video/*" onChange={handleChange} value={signupuser.media}/>
            </div> */}
    
            <div className={styles.inputGroup}>
              <label htmlFor='dob'>Date of Birth</label>
              <input type="date" id='dob' name='dob' onChange={handleChange} value={editEmp.dob}/>
            </div>
    
            <div className={styles.checkboxGroup}>
              <input type='checkbox' name='agreement' onChange={handleChange} checked={editEmp.agreement}/>
              <span>Agree & Continue</span>
            </div>
    
            <button type='submit' className={styles.submitButton}>Update</button>
            
          </form>
        </div>
        </div>
  )
}

export default EditUser
