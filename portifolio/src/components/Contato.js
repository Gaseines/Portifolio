import { useEffect, useState } from 'react'

import styles from './Contato.module.css'
import animacao from './Animacoes.module.css'

import Button from './layouts/Button'
import Container from './layouts/Container'
import Item from './layouts/Item'
import Titulo from './layouts/Titulo'
import insta from '../image/icone_instagram.png'
import git from '../image/icone_github.png'


function Contato({ isSection }) {
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        setVisible(true)
    })

    return (
        <div id='contato' className={`${styles.container} ${isVisible ? animacao.fade_in : ''} ${isSection === 'sobre' || isSection === 'projetos' || isSection === 'skills' ? animacao.blur : animacao.focus && isSection === 'contato' ? animacao.centro_contato : ''}`}>
            <Titulo>Contato</Titulo>
            <ul>
                <Item name={"Whatsapp: (47) 99922-6050"} />
                <Item name={"Email: gaseinesdzn@hotmail.com"} />
            </ul>
            <div className={styles.container_btn}>
                <a href="https://wa.me/5547999226050?text=Olá%2C+Gabriel!+Encontrei+seu+portfólio+e+gostaria+de+saber+mais+sobre+seus+serviços+como+desenvolvedor+freelancer." target="_blank" rel="noopener noreferrer">
                    <Button name="WhatsApp" />
                </a>
                <a href="mailto:gaseinesdzn@hotmail.com?subject=Interesse%20em%20projeto&body=Olá%20Gabriel,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer">
                    <Button name="Email" />
                </a>
            </div>

            <Titulo>Redes Sociais</Titulo>
            <div className={styles.container_icones}>
                <a href="#"><img className={styles.icones} src={insta} alt="" /></a>
                <a href="#"><img className={styles.icones} src={git} alt="" /></a>
            </div>
        </div>
    )
}

export default Contato