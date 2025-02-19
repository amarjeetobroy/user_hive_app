import React from 'react'
import styles from "./home.module.css"
const Home = () => {
  return (
    
    <section className={styles.homeContainer}>
    <header className={styles.header}>
    <h1>User Hive App</h1>
    <p>Welcome to the user management system.Manage users efficiently!</p>
    </header>

    <div className={styles.hero_text}>
            <h1>Welcome to User Hive App</h1>
            <p>Manage users efficiently with ease and style!</p>
            <a href="#get-started"  className={styles.cta_btn}>Get Started</a>
        </div>
    </section>

    
  )
}

export default Home
