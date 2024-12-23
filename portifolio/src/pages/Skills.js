import React from "react";
//Styles
import styles from "./Skills.module.css";

//layouts
import Titulo from "../components/layouts/Titulo";
import Card from "../components/layouts/Card";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Titulo>Habilidades adquiridas</Titulo>
      <div className={styles.t_table}>
        {/* //html */}
        <Card
          icon={
            "https://github.com/Gaseines/imagens/blob/main/portifolio/html-5.png?raw=true"
          }
          title={"HTML5"}
          years={"4 Anos de experiência"}
          disable={false}
        />
        {/* //css */}
        <Card
          icon={
            "https://github.com/Gaseines/imagens/blob/main/portifolio/css-3.png?raw=true"
          }
          title={"CSS3"}
          years={"4 Anos de experiência"}
          disable={false}
        />
        {/* //jAVAsCRIPT */}
        <Card
          icon={
            "https://github.com/Gaseines/imagens/blob/main/portifolio/js.png?raw=true"
          }
          title={"Java Script"}
          years={"3 Anos de experiência"}
          disable={false}
        />

        {/* React */}
        <Card
          icon={
            "https://github.com/Gaseines/imagens/blob/main/portifolio/biblioteca.png?raw=true"
          }
          title={"React"}
          years={"1 Ano de experiência"}
          disable={false}
        />
        <Card />
        <Card />

        <Card
          icon={
            "https://github.com/Gaseines/imagens/blob/main/portifolio/node2.png?raw=true"
          }
          title={"Node.js"}
          years={"1 Ano de experiência"}
          disable={false}
        />
      </div>
    </div>
  );
};

export default Skills;
