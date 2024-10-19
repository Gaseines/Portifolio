import { useEffect, useRef, useState } from 'react'

import styles from './Computador.module.css'
import Titulo from './layouts/Titulo'

function Computador() {
    const mainRef = useRef(null)
    const [isVisible, setVisible] = useState(false)
    const [ isbg, setbg] = useState(false)

    useEffect(() =>{
        const main = mainRef.current

        const observer = new IntersectionObserver((entries, observer) =>{
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    setbg(true)
                    observer.unobserve(main)
                    
                }
            })
        })
        observer.observe(main)

        return(() =>{
            if(main) observer.unobserve(main)
        })
    })

// Animação inicial
    useEffect(() =>{
        setVisible(true)
    })

    return (
        <div  className={`${styles.container} ${isVisible ? styles.fade_in : ''}`}>
            <Titulo>
                Gabriel Nunes
            </Titulo>
            <div ref={mainRef} className={`${styles.container_img} ${isbg ? styles.background : ''}`}>
            </div>

        </div>
    )
}

export default Computador