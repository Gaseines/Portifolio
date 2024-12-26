import React from 'react'

//Styles
import styles from './CardServicos.module.css'

const CardServicos = ({title, desc}) => {
  return (
    <div className={styles.card}>
      <div className={styles.waves}></div>
      <div className={styles.waves}></div>
      <div className={styles.waves}></div>

      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  )
}

export default CardServicos
