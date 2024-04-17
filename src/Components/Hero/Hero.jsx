import React from 'react'
import heroImage from "../../Assets/vibrating-headphone 1.png"
import styles from "./Hero.module.css"
function Hero() {
  return (
    <div>
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={heroImage} alt="headphonesimg" width={212} />
      </div>
    </div>
    </div>
  )
}

export default Hero
