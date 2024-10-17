import styles from './TituloLista.module.css'

function TituloLista({name, classe}){
    return(
        <h2 className={classe}>{name}</h2>
    )
}

export default TituloLista