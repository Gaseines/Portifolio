import { useEffect, useState } from "react";

import styles from "./Skills.module.css";
import animacao from "../Animacoes.module.css";

import javascript from "../../image/icone_JS.png";
import html from "../../image/icone_html.png";
import css from "../../image/icone_css.png";
import sql from "../../image/icone_SQL.png";
import react from "../../image/icone_react.png";
import git from "../../image/icone_git.png";
import vsCode from "../../image/icone_VSCode.png";
import node from "../../image/icone_node.png";
import responsive from "../../image/icone_responsive.png";
import ps from "../../image/icone_PS.png";

import Item from "../layouts/Item";
import Titulo from "../layouts/Titulo";
import TituloLista from "../layouts/TituloLista";

function Skills({ isSection }) {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  },[]);

  return (
    <div
      className={`${styles.container} ${isVisible ? animacao.fade_in : ""} ${
        isSection === "sobre" ||
        isSection === "projetos" ||
        isSection === "contato"
          ? animacao.blur
          : animacao.focus && isSection === "skills"
          ? animacao.centro_skills
          : ""
      }`}
    >
      <Titulo classe={styles.titulo}>Skills</Titulo>
      <div className={styles.container_list}>
        <ul className={styles.ul}>
          <TituloLista name={"Linguagens"} />
          <Item name={"JavaScript"} img={javascript} />
          <Item name={"HTML e CSS"} img={html} img2={css} />
          <Item name={"SQL"} img={sql} />
          <TituloLista name={"Frameworks"} />
          <Item name={"React"} img={react} />
          <TituloLista name={"Ferramentas"} />
          <Item name={"Git/GitHub"} img={git} />
          <Item name={"Visual Studio"} img={vsCode} />
        </ul>
        <div className={styles.divisao_list}></div>
        <ul className={styles.ul}>
          <TituloLista name={"Básicos"} />
          <Item name={"Node.JS"} img={node} />
          <Item name={"Express.JS"} />
          <TituloLista name={"Outras Habilidades"} />
          <Item name={"Responsive Design"} img={responsive} />
          <Item name={"Photoshop"} img={ps} />
        </ul>
      </div>
    </div>
  );
}

export default Skills;
