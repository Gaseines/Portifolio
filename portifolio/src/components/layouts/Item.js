

import styles from './Item.module.css'

function Item({ name, img, img2 }) {

    return (
        <li className={styles.li}>
            <span className={styles.span}></span>
            <p className={styles.p}>{name}</p>
            {img && <img className={styles.img} src={img} alt={name} loading='lazy' />}
            {img2 && <img className={styles.img} src={img2} alt={name} loading='lazy'/>} 
        </li>
    )
}

export default Item