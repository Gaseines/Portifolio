import React from "react";

//Components
import Computador from "../components/subComponents/Computador";
import Skills from "../components/subComponents/Skills";
import Container from "../components/layouts/Container";
import Sobre from "../components/subComponents/Sobre";
import Contato from "../components/subComponents/Contato";
import OutrosProjetos from "../components/subComponents/OutrosProjetos";

const Home = ({isSection}) => {
  return (
    <main>
      <Container>
        <Computador isSection={isSection} />
        <Skills isSection={isSection} />
      </Container>
      <Container>
        <Sobre isSection={isSection} />
        <Contato isSection={isSection} />
        <OutrosProjetos isSection={isSection} />
      </Container>
    </main>
  );
};

export default Home;
