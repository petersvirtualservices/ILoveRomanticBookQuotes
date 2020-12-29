import './assets/css/App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/main';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="demo-big-content">
          <Container>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="/landingpage">I Love Romantic Book Quotes</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/landingpage">Home</Nav.Link>
                  <Nav.Link href="/about">About ILRBQ</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Main />
          </Container>
        </div>
      </BrowserRouter>
    );
  }
}
export default App