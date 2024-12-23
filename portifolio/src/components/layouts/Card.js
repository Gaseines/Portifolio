import React from "react";

//Styles
import styles from "./Card.module.css";

const Card = ({ icon, title, disable, years }) => {
  return (
    <>
      {disable === false ? (
        <div className={`${styles.c_card} ${styles.c_card_active}`}>
          <img className={styles.i_img} src={icon} />
          <h2 className={styles.t_title}>{title}</h2>
          <div className={styles.d_division}></div>
          <p className={styles.d_desc}>{years}</p>
        </div >
      ) : (
        <div className={`${styles.c_card} ${styles.c_card_empty}`}>
          <span className={styles.empty}>?</span>
          <h2 className={styles.t_title}> - - - - - - -</h2>
          <div className={styles.d_division}></div>
          <p className={styles.d_desc}>?????</p>
        </div>
      )}
    </>
  );
};

export default Card;
