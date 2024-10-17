import styles from './Menu.module.css'

function Menu() {
    return(
        <header>
        <nav>
            <div className={styles.logo}>
                <h1>Portfólio</h1>
            </div>
            <ul className={styles.menu}>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#linguagens">Linguagens</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <div className={styles.hamburguer} id="hamburguer">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </header>
    )
}

export default Menu