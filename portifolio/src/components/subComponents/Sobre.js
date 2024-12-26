import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./Sobre.module.css";
import animacao from "../Animacoes.module.css";

//Components
import Titulo from "../layouts/Titulo";

function ProjetoPrincipal({ isSection }) {
  const [isVisible, setVisible] = useState(false);

  // Animação inicial
    useEffect(() => {
      setVisible(true);
    },[]);

  return (
    <div
      className={`${styles.container} ${isVisible ? animacao.fade_in : ""} ${
        isSection === "skills" ||
        isSection === "projetos" ||
        isSection === "contato"
          ? animacao.blur
          : animacao.focus && isSection === "sobre"
          ? animacao.centro_sobre
          : ""
      }`}
    >
      <Titulo>Sobre mim</Titulo>
      <div className={styles.container_txt}>
        <p>
          Olá! Eu sou o <span className={styles.d_destaque}>Gabriel Nunes</span>
          , um{" "}
          <span className={styles.d_destaque}>desenvolvedor Web Fullstack</span>{" "}
          dedicado a transformar ideias em soluções digitais criativas e
          funcionais. Com{" "}
          <span className={styles.d_destaque}>4 anos de experiência</span> em
          desenvolvimento...
        </p>
        <Link to={"/About"}>Ler mais</Link>
      </div>
    </div>
  );
}

export default ProjetoPrincipal;
