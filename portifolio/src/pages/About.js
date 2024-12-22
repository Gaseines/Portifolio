import React from "react";

//Styles
import styles from "./About.module.css";

//Components
import Titulo from "../components/layouts/Titulo";

const About = () => {
  return (
    <div className={styles.container}>
      <Titulo>Sobre Mim - Gabriel Nunes</Titulo>
      <p>
        Olá! Eu sou o Gabriel Nunes, um desenvolvedor Web Fullstack apaixonado
        por transformar ideias em soluções digitais criativas e funcionais. Com
        4 anos de experiência em desenvolvimento, atendo empresas e
        empreendedores que buscam não apenas sites e sistemas eficientes, mas
        também um design sofisticado e responsivo.
      </p>
      <p>
        Possuo habilidades sólidas em <span className={styles.destaque}>
            HTML, CSS, JavaScript, React, Node.js,
            SQL, MongoDB e JSON Server.
        </span> Além disso, domino ferramentas como
        <span className={styles.destaque}> Photoshop</span> e tenho conhecimento em <span className={styles.destaque}>edição de vídeo</span> e <span className={styles.destaque}>
            engenharia de prompt
            (IA)
        </span>, o que me permite atuar em projetos que exigem criatividade visual
        e inovação tecnológica.
      </p>
      <h2>💻 Projetos Relevantes:</h2>
      <ul>
        <li>
          <b>Landing Page com Login via CNPJ</b>: Desenvolvi uma página elegante
          e funcional para uma empresa, onde clientes acessam o sistema
          diretamente com o CNPJ, garantindo segurança e praticidade.
        </li>
        <li>
          <b>Sistema de Faturamento Automatizado</b>: Criei uma ferramenta que
          organiza planilhas de motoristas e clientes, calcula pagamentos e gera
          exportações customizadas, otimizando o fluxo de trabalho da empresa.
        </li>
        <li>
          <b>Site de Casamento</b>: Personalizei um site completo com fotos,
          direções e todas as informações do evento, destacando design
          minimalista e elegante.
        </li>
      </ul>
      <h2>✔️ Meu Diferencial:</h2>
      <ul>
        <li>
          <b>1.</b> Retorno rápido e comunicação clara com o cliente em todas as etapas do
          projeto.
        </li>
        <li>
          <b>2.</b> Estética e organização do código sempre em primeiro plano, garantindo
          manutenção facilitada.
        </li>
        <li>
          <b>3.</b> Foco em design minimalista, proporcionando uma experiência visual
          única, sem abrir mão da funcionalidade.
        </li>
      </ul>
      <h2>🎮 Mais Sobre Mim:</h2>
      <p>
        Programar é mais do que um trabalho, é um hobbie. Nos meus momentos
        livres, estudo novas tecnologias, edito fotos e vídeos, e jogo no
        computador. Sou apaixonado por carros e viagens, e acredito que a
        tecnologia pode tornar tudo mais simples e bonito.
      </p>
      <p>
        Se você precisa de um site, sistema ou design que não só funcione, mas
        impressione, estou aqui para ajudar.
      </p>
    </div>
  );
};

export default About;
