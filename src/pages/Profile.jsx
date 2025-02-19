import React, { useEffect, useState } from 'react'
import styles from "./profile.module.css"
import axios from 'axios'
import { userMedia } from '../../Backend/profiledata'

const Profile = () => {

    let userID = sessionStorage.getItem("authuser")
    console.log(userID)

    let [loggedInUser, setLoggedInUser] = useState({})

    useEffect(()=>{
        async function getLoggedInUser(){
            let {data} = await axios.get(`http://localhost:4041/users/${userID}`)
            console.log(data)
            setLoggedInUser(data)

        }
        getLoggedInUser();
    },[]);

  return (
    <div id={styles.profilecontainer}>
      <header>
        <h1>Welcome {loggedInUser.username}</h1>
        <p>email : {loggedInUser.email}</p>
        {/* <p>Mob : {loggedInUser.phoneno}</p> */}
        {/* <img src={loggedInUser.media} alt="media"/> */}
      </header>

       <section className={styles.postsContainer}>
      {userMedia.map((post) => (
        <article key={post.id} className={styles.card}>
          <img src={post.url} alt={post.description} className={styles.image} />
          <div className={styles.content}>
            <h3 className={styles.title}>{post.description}</h3>
            <p className={styles.likes}>❤️ {post.likes} likes</p>
            <ul className={styles.tags}>
              {post.tags.map((tag, index) => (
                <li key={index} className={styles.tag}>
                  #{tag}
                </li>
              ))}
            </ul>
            <div className={styles.comments}>
              <h4>Comments</h4>
              {post.comments.map((comment, index) => (
                <p key={index}>
                  <strong>User {comment.userId}:</strong> {comment.text}
                </p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
    </div>
  )
}

export default Profile
