import styles from './Button.module.css'

function Button({ link, name }){
    return(
        <>
            <a className={styles.a} href={link}>{name}</a>
        </>
    )
}

export default Button