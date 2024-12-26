import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "./OutrosProjetos.module.css";
import animacao from "../Animacoes.module.css";

//Images
import cafe from "../../image/projeto_cafe.jpg";
import wedding from "../../image/projeto_wedding.jpg";
import principal from "../../image/projeto_principal.jpg";

//Components
import Titulo from "../layouts/Titulo";
import Projeto from "../layouts/Projeto";

function OutrosProjetos({ isSection }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

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
      <div className={styles.container_projetos}>
        <Projeto link={cafe} classe={`${styles.projeto1} ${styles.projeto}`} />
        <Projeto link={wedding} classe={`${styles.projeto2} ${styles.projeto}`} />
        <Projeto
          link={principal}
          classe={`${styles.projeto3} ${styles.projeto}`}
        />
      </div>
    </Link>
  );
}

export default OutrosProjetos;
