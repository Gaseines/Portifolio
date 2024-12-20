import { useEffect, useRef, useState } from 'react'

import styles from './Menu.module.css'
import animacao from './Animacoes.module.css'

import lettering from '../image/lettering.png'


function Menu({setSection}) {

    const burguerRef = useRef(null)

    const [ isVisible, setVisible ] = useState(false)
    const [ isDown, setDown ] = useState(false)

    // Animação de inicialização
    useEffect(() =>{
        setVisible(true)
    })

    //Animação Menu

    function handleClick(){
        setDown((testClick) => !testClick)
        console.log(isDown)
    }

    useEffect(() =>{
        if(burguerRef.current){
            burguerRef.current.addEventListener('click', handleClick)
        }

        return() =>{
            burguerRef.current.removeEventListener('click', handleClick)
        }
        
    }, [])

    return(
        <header className={isVisible ? animacao.bottom_top : ''}>
        <nav>
            <div className={styles.logo}>
                <img src={lettering} />
            </div>
            <ul className={`${styles.menu} ${isDown ? styles.slideDown : styles.slideUp}`}>
                <li><a
                onMouseEnter={() => {setSection('sobre')}}
                onMouseLeave={() => setSection(null)}
                 href="#sobre">
                    Sobre</a></li>
                <li><a
                onMouseEnter={() => {setSection('skills')}}
                onMouseLeave={() => setSection(null)}
                 href="#skills">
                    Skills</a></li>
                <li><a
                onMouseEnter={() => setSection('projetos')}
                onMouseLeave={() => setSection(null)}
                 href="#projetos">
                    Projetos</a></li>
                <li><a
                onMouseEnter={() => setSection('contato')}
                onMouseLeave={() => setSection(null)}
                 href="#contato">
                    Contato</a></li>
            </ul>
            <div ref={burguerRef} className={styles.hamburguer} id="hamburguer">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    )
}

export default Menu