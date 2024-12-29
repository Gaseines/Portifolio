import styles from './TituloLista.module.css'

function TituloLista({name, classe}){
    return(
        <h2 className={`${styles.h2} ${classe}`}>{name}</h2>
    )
}

export default TituloLista