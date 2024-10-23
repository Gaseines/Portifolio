import { useEffect, useState } from 'react'

import styles from './ProjetoPrincipal.module.css'
import animacao from './Animacoes.module.css'

import projeto from '../image/projeto_principal.jpg' 

import Titulo from "./layouts/Titulo"
import Projeto from './layouts/Projeto'



function ProjetoPrincipal({isSection}){
    const [ isVisible, setVisible] = useState(false)

    useEffect(() =>{
        setVisible(true)
    })

    return(
        <div className={`${styles.container} ${isVisible ? animacao.fade_in : ''} ${isSection === 'sobre' || isSection === 'projetos' || isSection === 'contato' || isSection === 'skills' ? animacao.blur : animacao.focus}`}>
            <Titulo>Projeto Likizoa</Titulo>
            <a className={styles.a} href="https://likizoa.com.br">likizoa.com.br</a>
            <Projeto classe={styles.projeto} link={projeto} name={"Projeto Principal"} />
        </div>
    )
}

export default ProjetoPrincipal