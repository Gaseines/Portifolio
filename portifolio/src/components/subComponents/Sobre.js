import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Sobre.module.css";
import animacao from "../Animacoes.module.css";

import projeto from "../../image/projeto_principal.jpg";

import Titulo from "../layouts/Titulo";
import Projeto from "../layouts/Projeto";


function ProjetoPrincipal({ isSection }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <div
      className={`${styles.container} ${isVisible ? animacao.fade_in : ""} ${
        isSection === "sobre" ||
        isSection === "projetos" ||
        isSection === "contato" ||
        isSection === "skills"
          ? animacao.blur
          : animacao.focus
      }`}
    >
      <Titulo>Sobre mim</Titulo>
      <p>Olá! Eu sou o <span className={styles.d_destaque}>Gabriel Nunes</span>, um <span className={styles.d_destaque}>desenvolvedor Web Fullstack</span> dedicado a transformar ideias em soluções digitais criativas e funcionais. Com <span className={styles.d_destaque}>4 anos de experiência</span> em desenvolvimento, atendo empresas e empreendedores que buscam não apenas sites e sistemas eficientes, mas também um <span className={styles.d_destaque}>design sofisticado e responsivo</span>...</p>
      <Link to={"/About"}>Ler mais</Link>
    </div>
  );
}

export default ProjetoPrincipal;
