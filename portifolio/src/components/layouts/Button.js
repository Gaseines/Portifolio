import styles from "./Button.module.css";

function Button({ link, name }) {
  return (
    <>
      <a className={styles.a} href={link}>
        {" "}
        <div className={styles.bg_btn}></div>
         <p className={styles.txt_btn}>{name}</p>
      </a>
    </>
  );
}

export default Button;
