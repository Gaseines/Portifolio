import React from "react";
//Styles
import styles from "./Skills.module.css";

//images
import html from "../image/imagesHabilidades/html-5.png";
import css from "../image/imagesHabilidades/css-3.png";
import js from "../image/imagesHabilidades/js.png";
import react from "../image/imagesHabilidades/biblioteca.png";
import node from "../image/imagesHabilidades/node2.png";
import express from "../image/imagesHabilidades/express.png";
import sql from "../image/imagesHabilidades/sql.png";
import git from "../image/imagesHabilidades/github.png";
import ps from "../image/imagesHabilidades/photoshop.png";
import ia from "../image/imagesHabilidades/ia.png";

//layouts
import Titulo from "../components/layouts/Titulo";
import Card from "../components/layouts/Card";
import CardServicos from "../components/layouts/CardServicos";

const Skills = () => {
  return (
    <div className={styles.container}>
      <Titulo>Habilidades adquiridas</Titulo>
      <div className={styles.t_table}>
        {/* //html */}
        <Card
          icon={html}
          title={"HTML5"}
          years={"4 Anos de experiência"}
          disable={false}
        />
        {/* //css */}
        <Card
          icon={css}
          title={"CSS3"}
          years={"4 Anos de experiência"}
          disable={false}
        />
        {/* //jAVAsCRIPT */}
        <Card
          icon={js}
          title={"JavaScript"}
          years={"3 Anos de experiência"}
          disable={false}
        />

        {/* React */}
        <Card
          icon={react}
          title={"React"}
          years={"1 Ano de experiência"}
          disable={false}
        />
        <Card />
        <Card />

        <Card
          icon={node}
          title={"Node.js"}
          years={"5 Meses de experiência"}
          disable={false}
        />

        <Card
          icon={express}
          title={"Express.js"}
          years={"5 Meses de experiência"}
          disable={false}
        />

        <Card />

        <Card
          icon={sql}
          title={"SQL"}
          years={"5 Meses de experiência"}
          disable={false}
        />

        <Card
          icon={git}
          title={"GitHub"}
          years={"4 Anos de experiência"}
          disable={false}
        />

        <Card />
        <Card />

        <Card
          icon={ps}
          title={"Photoshop"}
          years={"3 Anos de experiência"}
          disable={false}
        />

        <Card
          classe={styles.card_ia}
          icon={ia}
          title={"Engenharia de Prompt"}
          years={"5 Meses de experiência"}
          disable={false}
        />
      </div>

      <Titulo className={styles.titulo2}>Serviços Oferecidos</Titulo>
      <div className={styles.container_servicos}>
        <CardServicos
          title={"Lading-page"}
          desc={
            "Desenvolvimento de uma lading-page responsiva, do seu estilo, com as suas preferências"
          }
        />

        <CardServicos
          title={"Portifólio Web"}
          desc={
            "Desenvolvimento de um portifólio exclusivo e com sua identidade"
          }
        />

        <CardServicos
          title={"Website"}
          desc={
            "Desenvolvimento de sites responsivos e personalizados que se adaptam a qualquer dispositivo"
          }
        />

        <CardServicos
          title={"Pagnia de Vendas"}
          desc={
            "Precisa de uma página para vender mais? Faço páginas que mostram seus produtos de forma clara e atraente, ajudando a aumentar as vendas"
          }
        />
      </div>
    </div>
  );
};

export default Skills;
