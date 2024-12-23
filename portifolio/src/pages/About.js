import React from "react";

//Styles
import styles from "./About.module.css";

//Components
import Titulo from "../components/layouts/Titulo";

const About = () => {
  return (
    <div className={styles.container}>
      <Titulo>Sobre Mim - Gabriel Nunes</Titulo>
      <p className={styles.sobre}>
        Olá! Eu sou o Gabriel Nunes, um desenvolvedor Web Fullstack dedicado a
        transformar ideias em soluções digitais criativas e funcionais. Com 4
        anos de experiência em desenvolvimento, atendo empresas e empreendedores
        que buscam não apenas sites e sistemas eficientes, mas também um design
        sofisticado e responsivo.
      </p>
      <p className={styles.sobre}>
        Possuo habilidades sólidas em{" "}
        <span className={styles.destaque}>
          HTML, CSS, JavaScript, React, Node.js, SQL, MongoDB e JSON Server.
        </span>{" "}
        Além disso, domino ferramentas como
        <span className={styles.destaque}> Photoshop</span> e tenho conhecimento
        em <span className={styles.destaque}>edição de vídeo</span> e{" "}
        <span className={styles.destaque}>engenharia de prompt (IA)</span>, o
        que me permite atuar em projetos que exigem criatividade visual e
        inovação tecnológica.
      </p>
      <h2>💻 Projetos Relevantes</h2>
      <ul className={styles.projetos_relevantes}>
        <li>
          <h3>Landing Page com Login via CNPJ</h3>{" "}
          <p>
            Desenvolvi uma página elegante e funcional para uma empresa, onde
            clientes acessam o sistema diretamente com o CNPJ, garantindo
            segurança e praticidade.
          </p>
        </li>
        <li>
          <h3>Sistema de Faturamento Automatizado</h3>{" "}
          <p>
            Criei uma ferramenta que organiza planilhas de motoristas e
            clientes, calcula pagamentos e gera exportações customizadas,
            otimizando o fluxo de trabalho da empresa.
          </p>
        </li>
        <li>
          <h3>Site de Casamento</h3>{" "}
          <p>
            Personalizei um site completo com fotos, direções e todas as
            informações do evento, destacando design minimalista e elegante.
          </p>
        </li>
      </ul>
      <div className={styles.container_diferencial}>
        <h2>✔️ Meu Diferencial</h2>

        <div className={styles.item}>
          <p className={`${styles.diferencial_01} ${styles.diferencial}`}>
            <b>1.</b> Retorno rápido e comunicação clara com o cliente em todas
            as etapas do projeto.
            <img
              src="https://github.com/Gaseines/imagensPortifolio/blob/main/images/raio.png?raw=true"
              alt="raio"
              className={styles.raio}
            />
            <img
              src="https://github.com/Gaseines/imagensPortifolio/blob/main/balao-de-fala.png?raw=true"
              alt="balão de conversa"
              className={styles.conversa}
            />
          </p>
        </div>
        <div className={styles.item}>
          <p className={`${styles.diferencial_02} ${styles.diferencial}`}>
            <b>2.</b> Estética e organização do código sempre em primeiro plano,
            garantindo manutenção facilitada.
          </p>
        </div>
        <div className={styles.item}>
          <p className={`${styles.diferencial_03} ${styles.diferencial}`}>
            <b>3.</b> Foco em design minimalista, proporcionando uma experiência
            visual única, sem abrir mão da funcionalidade.
            <img
              src="https://github.com/Gaseines/imagensPortifolio/blob/main/images/pincel.png?raw=true"
              alt="pincel"
              className={styles.pincel}
            />
            <img
              src="https://github.com/Gaseines/imagensPortifolio/blob/main/images/contexto.png?raw=true"
              alt="engrenagem"
              className={styles.engrenagem}
            />
          </p>
        </div>
      </div>
      <h2>🎮 Mais Sobre Mim</h2>
      <p className={styles.mais}>
        Programar é mais do que um trabalho, é um hobbie. Nos meus momentos
        livres, estudo novas tecnologias, edito fotos e vídeos, e jogo no
        computador. Sou apaixonado por carros e viagens, e acredito que a
        tecnologia pode tornar tudo mais simples e bonito.
      </p>
      <p className={styles.finalizacao}>
        Se você precisa de um site, sistema ou design que não só funcione, mas
        impressione, estou aqui para ajudar.
      </p>
    </div>
  );
};

export default About;
