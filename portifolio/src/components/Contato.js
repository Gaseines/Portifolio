import styles from './Contato.module.css'
import Button from './layouts/Button'
import Container from './layouts/Container'
import Item from './layouts/Item'
import Titulo from './layouts/Titulo'

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
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    )
}

export default Contato