import React from "react";

//styles
import styles from "./SocialCard.module.css";

const SocialCard = ({ title, desc, link, style }) => {
  return (
    <div className={`${styles.card} ${style}`}>

        <div className={`${styles.circle1} ${styles.circle}`}></div>
        <div className={`${styles.circle2} ${styles.circle}`}></div>
        <div className={`${styles.circle3} ${styles.circle}`}></div>
      <h1>{title}</h1>
      <p>{desc}</p>
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        Entre em contato
      </a>
    </div>
  );
};

export default SocialCard;
