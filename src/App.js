import './App.css';
import LandingPage from './LandingPage';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
function App() {
  return (
    <>
      <Navbar bg='success' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Smart garden frontend</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
