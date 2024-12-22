import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Menu.module.css";
import animacao from "./Animacoes.module.css";

import lettering from "../image/lettering.png";

function Menu({ setSection }) {
  const burguerRef = useRef(null);

  const [isVisible, setVisible] = useState(false);
  const [isDown, setDown] = useState(false);

  // Animação de inicialização
  useEffect(() => {
    setVisible(true);
  }, [isVisible]);

  //Animação Menu

  const handleClick = useCallback(() => {
    setDown((testClick) => !testClick);
    console.log(isDown);
  }, [isDown]);

  useEffect(() => {
    const burguer = burguerRef.current;

    if (burguer) {
      burguer.addEventListener("click", handleClick);
    }

    return () => {
      burguer.removeEventListener("click", handleClick);
    };
  }, [burguerRef, handleClick]);

  return (
    <header className={isVisible ? animacao.bottom_top : ""}>
      <nav>
        <div className={styles.logo}>
          <Link to="/">
            <img src={lettering} alt="lettering" />
          </Link>
        </div>
        <ul
          className={`${styles.menu} ${
            isDown ? styles.slideDown : styles.slideUp
          }`}
        >
            <li>
            <Link
              to="/"
              onMouseEnter={() => {
                setSection("home");
              }}
              onMouseLeave={() => setSection(null)}
              href="#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onMouseEnter={() => {
                setSection("sobre");
              }}
              onMouseLeave={() => setSection(null)}
              href="#sobre"
            >
              Sobre
            </Link>
          </li>
          <li>
            <a
              onMouseEnter={() => {
                setSection("skills");
              }}
              onMouseLeave={() => setSection(null)}
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => setSection("projetos")}
              onMouseLeave={() => setSection(null)}
              href="#projetos"
            >
              Projetos
            </a>
          </li>
          <li>
            <a
              onMouseEnter={() => setSection("contato")}
              onMouseLeave={() => setSection(null)}
              href="#contato"
            >
              Contato
            </a>
          </li>
        </ul>
        <div ref={burguerRef} className={styles.hamburguer} id="hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
