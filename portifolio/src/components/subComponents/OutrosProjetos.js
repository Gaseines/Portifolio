import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

import styles from "./OutrosProjetos.module.css";
import animacao from "../Animacoes.module.css";

import Projeto from "../layouts/Projeto";

import cafe from "../../image/projeto_cafe.jpg";
import wedding from "../../image/projeto_wedding.jpg";
import Titulo from "../layouts/Titulo";

function OutrosProjetos({ isSection }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
      <Link
      to={"/Projects"}
        id="projetos"
        className={`${styles.container} ${isVisible ? animacao.fade_in : ""} ${
          isSection === "skills" ||
          isSection === "sobre" ||
          isSection === "contato"
            ? animacao.blur
            : animacao.focus && isSection === "projetos"
            ? animacao.centro_projetos
            : ""
        }`}
      >
        <Titulo>Projetos</Titulo>
        <Projeto link={cafe} classe={styles.projeto} />
        <Projeto link={wedding} classe={styles.projeto2} />
      </Link>
  );
}

export default OutrosProjetos;
