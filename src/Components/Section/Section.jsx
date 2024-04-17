import React, { useState } from 'react'
import styles from "./Section.module.css"
import Card from '../Card/Card'
import { CircularProgress } from '@mui/material'
import Carousel from '../Carousel/Carousel'
import BasicTabs from '../FilterTabs/FiltersTabs'
function Section({data,SongHeading,type, value=0,handleChange=null,filterTabData}) {
    const [toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.header}>
        <h3>{SongHeading}</h3>
        {type === "albums" && (
                    <h4 onClick={handleToggle} className={styles.toggletext}>
                        {toggle ? "Collapse All" : "Show All"}
                    </h4>
                )}

        {/* <h4 onClick={handleToggle} className={styles.toggletext}>{toggle?"Collapse All":"Show All"}</h4> */}
      </div>
      
      {type === "song" ? (
        <BasicTabs value={value} handleChange={handleChange} />
      ) : null}
      {data.length===0?(<CircularProgress size={24}/>):(
        <div className={styles.cardswrapper}>
     {toggle?(
      <div className={styles.wrapper}>
      {filterTabData.map((song) => {
        return   <Card  data={song} type={type} />
        })}
      </div>
        
     ):(
      <Carousel 
        data={filterTabData}
          renderComponent={(data) => <Card data={data} type={type} />}
      />
     )}
     </div>
        )}
      
    </div>
  )
}

export default Section
