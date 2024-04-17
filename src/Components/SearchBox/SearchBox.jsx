import React, { useState } from 'react'
import SearchIcon from "../../Assets/Search icon.png" 
import styles from './SearchBox.module.css'
import SearchMenu from '../SearchMenu/SearchMenu'

function SearchBox({data}) {
  const [showAlbum,setShowAlbum]=useState(false)
  const handleShowAlbum=()=>{
    setShowAlbum(!showAlbum)
  }
  return (
    <div style={{position:"relative"}}>
      <div className={styles.input_container}>
       <input type="text" placeholder='Search here by albums or songs' onClick={handleShowAlbum} />
    <button>
        <img src={SearchIcon} alt="search-icon" />
    </button>
    </div>
   {showAlbum&&<SearchMenu data={data}/>}
    </div>
  )
}

export default SearchBox
