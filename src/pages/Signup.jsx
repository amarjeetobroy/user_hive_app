import React, { useState } from 'react'
import styles from "./signup.module.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Signup = () => {


    let [signupuser, setSignupuser] = useState({
        username: "",
        email: "",
        password: "",
        phoneno: "",
        gender: "",
        // media: "",
        dob: "",
        agreement: false,
    });

    let navigate = useNavigate()

    let handleChange = (e) =>{
        let { name, value, type, checked} = e.target;
            setSignupuser({
                ...signupuser,
                [name]: type === "checkbox" ? checked : value,
            })       
    };
    let signupFormSubmit =(e) =>{
        e.preventDefault();
        console.log(signupuser);
        
        if(signupuser.agreement){
            axios.post("http://localhost:4041/users",signupuser).then(()=>{
                console.log("data sent successfully");
                toast.success("Signup successfull");

                // clearing input fields
                setSignupuser({
                    username: "",
                    email: "",
                    password: "",
                    phoneno: "",
                    gender: "",
                    // media: "",
                    dob: "",
                    agreement: false,
                })
                navigate("/login") // navigate to login component
            }).catch((err)=>{
                console.log(err);
                console.log("something went wrong");
            })
        }else{
            toast.error("please accept Agree & continue");
        }
    }
  return (
    <div className={styles.container}>
    <div className={styles.formWrapper}>
      <h1>Signup</h1>
      <form onSubmit={signupFormSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor='username'>Username</label>
          <input type="text" id='username' name='username' placeholder='Enter username' value={signupuser.username} onChange={handleChange}/>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input type="email" id='email' name='email' placeholder='Enter email' value={signupuser.email} onChange={handleChange}/>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='userpassword'>UserPassword</label>
          <input type="password" id='password' name='password' placeholder='Enter password' value={signupuser.password} onChange={handleChange}/>
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='phoneno'>Phone Number</label>
          <input type="tel" id='phoneno' name='phoneno' placeholder='Enter Phone number' value={signupuser.phoneno} onChange={handleChange}/>
        </div>
        <div className={styles.radioGroup} onChange={handleChange}>
          <label>Gender</label>

          <label htmlFor='male'>
          <input type='radio' id='male' name='gender' value="male" onChange={handleChange} checked={signupuser.gender === "male"}/>
            Male
          </label>

          <label htmlFor='female'>
          <input type='radio' id='male' name='gender' value="female" onChange={handleChange} checked={signupuser.gender === "female"}/>
            Female
          </label>
        </div>
        

        {/* <div className={styles.mediaGroup}>
        <label htmlFor="media">Upload Photo</label>
        <input type="file" id="media" name="media" accept="image/*,video/*" onChange={handleChange} value={signupuser.media}/>
        </div> */}

        <div className={styles.inputGroup}>
          <label htmlFor='dob'>Date of Birth</label>
          <input type="date" id='dob' name='dob' onChange={handleChange} value={signupuser.dob}/>
        </div>

        <div className={styles.checkboxGroup}>
          <input type='checkbox' name='agreement' onChange={handleChange} checked={signupuser.agreement}/>
          <span>Agree & Continue</span>
        </div>

        <button type='submit' className={styles.submitButton}>Signup</button>
        
      </form>
    </div>
    </div>
  )
}

export default Signup
