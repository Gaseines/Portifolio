import React from "react";

//styles
import styles from "./Projects.module.css";

//Components
import Project from "../components/layouts/Project";
import Titulo from "../components/layouts/Titulo";

//Images
import likizoa from "../image/imagesProjetos/likizoa.jpg";
import wedding from "../image/imagesProjetos/wedding.jpg";
import coffee from "../image/imagesProjetos/coffee.jpg";
import layouts from "../image/imagesProjetos/layouts.jpg";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Titulo>Projetos</Titulo>
      <Project
        linkProjeto={"https://likizoa.com.br"}
        linkGit={"https://github.com/Gaseines/Likizoa"}
        img={likizoa}
        name={"Likizoa Serviços e Treinamentos"}
        desc={
          "Uma lading-page para uma empresa de controle de jornada, feita do jeito que o cliente preferiu, com um sistema de login para os clientes e funcionarios dessa empresa."
        }
      />

      <div className={styles.division}></div>

      <Project
        linkProjeto={"https://gaseines.github.io/Wedding/"}
        linkGit={"https://github.com/Gaseines/Wedding"}
        img={wedding}
        name={"Casamento Ga & Lu"}
        desc={
          "Um site minimalista feito para o meu casamento, no estilo que gostamos e com a nossa cara, feito com muito amor e carinho. ♡"
        }
      />

      <div className={styles.division}></div>

      <Project
        linkProjeto={"https://gaseines.github.io/Lading-Page-Cafeteria/"}
        linkGit={"https://github.com/Gaseines/Lading-Page-Cafeteria"}
        img={coffee}
        name={"Cafeteria"}
        desc={
          "Um projeto autoral, feito na faculdade, para uma cafeteria com apenas retirada na loja, para pessoas normais com a pressa do dia a dia."
        }
      />

      <div className={styles.division}></div>

      <Project
        linkProjeto={"https://gaseines.github.io/Layouts/"}
        linkGit={"https://github.com/Gaseines/Layouts"}
        img={layouts}
        name={"Layouts CSS"}
        desc={
          "Um projeto autoral. Site com estilos de Buttons, Cards, Loaders, Checkboxes... Com possibilidade de cópia de código para colocar em seu projeto."
        }
      />
    </div>
  );
};

export default Projects;
