import React from 'react'
import styles from '../styles/banner.module.css'

export default function banner(props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover your local coffee shops</p>
      <button onClick={props.handleOnClick} className={styles.button}>
        {props.buttonText}{' '}
      </button>
    </div>
  )
}
