import styles from './Projeto.module.css'

function Projeto({link, name, classe}){
 return(
    <div className={styles.container_img}>
      <img src={link} alt={name} className={classe}/>
    </div>
 )
}

export default Projeto