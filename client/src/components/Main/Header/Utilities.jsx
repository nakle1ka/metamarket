import React from 'react'
import styles from './Header.module.css'
import User from './../../../shared/img/user.png'
import Bell from './../../../shared/img/bell.png'
import Cart from './../../../shared/img/cart.png'

export default function Utilities() {
  return (
    <div className={styles.utilitiesContainer}>
          <div className={styles.utilities}>
              <img src={User} alt=''/>
          </div>
          <div className={styles.utilities}>
              <img src={Bell} alt=''/>
          </div>
          <div className={styles.utilities}>
              <img src={Cart} alt=''/>
          </div>
    </div>
  )
}
