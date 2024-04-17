import React from 'react'
import styles from "./SearchMenu.module.css"
function SearchMenu({data}) {
  return (
    <div>
      <div  className={styles.search_route}>
      {data.slice(0,5).map((item)=>
      (<div className={styles.wrapper}>
      <div><img src={item.image} alt="image" height={"100px"} width={"100px"}/></div>
       <div className={styles.textcontainer}><h4>Album Name</h4>
       <p>{item.title}</p></div>
       <div className={styles.title}>{item.follows } Follows</div> 

      </div>)
      )}
    </div>
    </div>
  )
}

export default SearchMenu
