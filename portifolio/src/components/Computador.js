
import computador from '../image/computador.png'
import styles from './Computador.module.css'
import Titulo from './layouts/Titulo'

function Computador() {
    return (
        <div className={styles.container}>
            <Titulo>
                Gabriel Nunes
            </Titulo>
            <div className={styles.container_img}>
            </div>

        </div>
    )
}

export default Computador