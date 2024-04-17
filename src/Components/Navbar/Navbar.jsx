import React from 'react'
import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import SearchBox from '../SearchBox/SearchBox'
import styles from "./Navbar.module.css"
function Navbar({data}) {
  return (
    <div>
    <nav className={styles.nav}>
    <Logo/>
    <SearchBox data={data}/>
    <Button/>
    </nav>
    </div>
  )
}

export default Navbar
