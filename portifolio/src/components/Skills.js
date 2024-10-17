
import Item from './layouts/Item'
import Titulo from './layouts/Titulo'
import TituloLista from './layouts/TituloLista'
import styles from './Skills.module.css'
import javascript from '../image/icone_JS.png'
import html from '../image/icone_html.png'
import css from '../image/icone_css.png'

function Skills(){

    

    return(
        <div className={styles.container}>
            <Titulo classe={styles.titulo}>Skills</Titulo>
            <ul>
                <TituloLista name={"Linguagens"} />
                <Item name={"JavaScript"} img={javascript} />
                <Item name={"HTML e CSS"} img={html} img2={css}/>
            </ul>
        </div>
    )
}

export default Skills