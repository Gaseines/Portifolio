import { useEffect, useState } from 'react'

import styles from './OutrosProjetos.module.css'
import animacao from './Animacoes.module.css'

import Projeto from './layouts/Projeto'

import cafe from '../image/projeto_cafe.jpg'
import wedding from '../image/projeto_wedding.jpg'
import Titulo from './layouts/Titulo'



function OutrosProjetos({isSection}){
    const [ isVisible, setVisible] = useState(false)

    useEffect(() =>{
        setVisible(true)
    })

    return(
        <div id='projetos' className={`${styles.container} ${isVisible ? animacao.fade_in : ''} ${isSection === 'skills' || isSection === 'sobre' || isSection === 'contato' ? animacao.blur : animacao.focus && isSection === 'projetos' ? animacao.centro_projetos : ''}`}>
            <Titulo> Outros Projetos</Titulo>
            <Projeto link={cafe} classe={styles.projeto}/>
            <Projeto link={wedding} classe={styles.projeto2}/>
        </div>
    )
}

export default OutrosProjetos