import React from 'react'
import styles from "./navBar.module.css"
import SearchBar from './searchBar/searchBar'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div>
       <SearchBar />
      </div>
    </div>
  )
}

export default NavBar;