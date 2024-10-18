
import styles from './ProjetoPrincipal.module.css'

import projeto from '../image/projeto_principal.jpg' 

import Titulo from "./layouts/Titulo"
import Projeto from './layouts/Projeto'


function ProjetoPrincipal(){
    

    return(
        <div className={styles.container}>
            <Titulo>Projeto Likizoa</Titulo>
            <a href="https://likizoa.com.br">likizoa.com.br</a>
            <Projeto link={projeto} name={"Projeto Principal"} />
        </div>
    )
}

export default ProjetoPrincipal