import styles from './Contato.module.css'
import Button from './layouts/Button'
import Container from './layouts/Container'
import Item from './layouts/Item'
import Titulo from './layouts/Titulo'
import insta from '../image/icone_instagram.png'
import git from '../image/icone_github.png'

function Contato() {
    return (
        <div className={styles.container}>
            <Titulo>Contato</Titulo>
            <ul>
                <Item name={"Whatsapp: (47) 99922-6050"} />
                <Item name={"Email: gaseinesdzn@hotmail.com"} />
            </ul>
            <Container>
                <Button name={"WhatsApp"} />
                <Button name={"Email"} />
            </Container>

            <Titulo>Redes Sociais</Titulo>
            <div className={styles.container_icones}>
                <a href="#"><img className={styles.icones} src={insta} alt="" /></a>
                <a href="#"><img className={styles.icones} src={git} alt="" /></a>
            </div>
        </div>
    )
}

export default Contato