import styles from './Projeto.module.css'

function Projeto({link, name, classe}){
 return(
    <>
      <img src={link} alt={name} className={`${classe} ${styles.i_img}`} loading='lazy'/>
    </>
 )
}

export default Projeto