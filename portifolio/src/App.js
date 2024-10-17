import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Computador from './components/Computador';
import Skills from './components/Skills';
import Container from './components/layouts/Container';

function App() {
  return (
    
      <Router>
          <Routes>
            <Route path='/' element={
              <>
              <Menu />
            <main>
              <Container>
                <Computador />
                <Skills />
              </Container>
            </main>
              </>
            } />
          </Routes>
      </Router>
    
  );
}

export default App;
