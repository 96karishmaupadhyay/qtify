import React from 'react'
import {Chip, Tooltip} from "@mui/material"
import styles from "./Card.module.css"
function Card({data,type}) {
    let cardlayout=(type)=>{
      switch(type){
        case"albums":{
            let { image, follows, title, songs } = data;
            return(
                <Tooltip title={`${songs.length} songs`} placement='top' arrow>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={image} alt="song-image" />
                        <div className={styles.cardBanner}>
                            <Chip label={`${follows} Follows`} size='small' className={styles.chip}/>
                        </div>
                    </div>
                    <div className={styles.title}>
                        <p>{title}</p>
                    </div>
                </div>
                </Tooltip>
            )
        }
        case "song": {
            let { image, likes, title } = data;
            return (
              <div className={styles.cardContainer}>
                <div className={styles.card}>
                  <img src={image} alt="song poster" />
                  <div className={styles.cardBanner}>
                    <Chip
                      label={`${likes} Likes`}
                      size="small"
                      className={styles.chip}
                    />
                  </div>
                </div>
                <div className={styles.title}>
                  <p>{title}</p>
                </div>
              </div>
            );
          }
        
        default:
        return <></>
      }
    }
  return (
    
      cardlayout(type)

  )
}

export default Card
