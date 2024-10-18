import styles from './OutrosProjetos.module.css'

import Projeto from './layouts/Projeto'

import cafe from '../image/projeto_cafe.jpg'
import Titulo from './layouts/Titulo'


function OutrosProjetos(){
    return(
        <div className={styles.container}>
            <Titulo> Outros Projetos</Titulo>
            <Projeto link={cafe} classe={styles.projeto}/>
            <Projeto link={cafe} classe={styles.projeto2}/>
        </div>
    )
}

export default OutrosProjetos