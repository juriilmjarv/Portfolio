import './App.css';
import Main from './components/main';
import {Navbar, Nav} from 'react-bootstrap'
import ReactParticles from 'react-particles-js';
import particlesConfig from './components/particle-config';
function App() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" className='header-color'>
        <Navbar.Brand style={{color: 'white'}} href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link style={{color: 'white'}} href="/resume">Resume</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="/about">About</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="/projects">Projects</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Main/>
    </div>
  );
}

export default App;
