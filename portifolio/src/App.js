import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Computador from './components/Computador';
import Skills from './components/Skills';
import Container from './components/layouts/Container';
import ProjetoPrincipal from './components/ProjetoPrincipal';
import Contato from './components/Contato';
import OutrosProjetos from './components/OutrosProjetos';

import { useState } from 'react';

function App() {

  const [ isSection, setSection ] = useState(false)

  return (
    
      <Router>
          <Routes>
            <Route path='/' element={
              <>
              <Menu setSection={setSection} />
            <main>
              <Container>
                <Computador />
                <Skills isSection={isSection} />
              </Container>
              <Container>
                <ProjetoPrincipal />
                <Contato />
                <OutrosProjetos />
              </Container>
            </main>
              </>
            } />
          </Routes>
      </Router>
    
  );
}

export default App;
