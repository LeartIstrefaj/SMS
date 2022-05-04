import logo from './img/Logo.png';
import './App.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Location } from "./components/Location";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

// imports other versions bootstraps
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";


function App() {
  return (
    // Navbar start section

    <BrowserRouter>
      <div className='App'>
        <section className='banner-section'>
          <Navbar bg="" expand="lg">
            <Container>
              <Navbar.Brand href="/">Supermarket<sup>MS</sup></Navbar.Brand>
              <Navbar.Toggle id="toggle-design" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                  <Nav.Link className='links' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='links' as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className='links' as={Link} to="/contact">Contact Us</Nav.Link>
                  <Nav.Link className='links' as={Link} to="/location">Location</Nav.Link>
                  <NavDropdown className='links' title="Registration" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/login" className="dropdown-item">Login</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/signup" className="dropdown-item">Sign up</NavDropdown.Item>

                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
              <Route path="/location" element={<Location />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </section>
      </div>


      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center ">
              <div className="social-icon">
                <a className='link-footer' id='social-media' href="http://facebook.com/" target="_blank"><i className='icon bx bxl-facebook-circle' ></i></a>
                <a className='link-footer' href="https://www.instagram.com/" target="_blank"><i className=' icon bx bxl-instagram'></i></a>
                <a className='link-footer' href="https://www.whatsapp.com/" target="_blank"><i className=' icon bx bxl-whatsapp' ></i></a>
                <a className='link-footer' href="https://www.linkedin.com/" target="_blank"><i className=' icon bx bxl-linkedin' ></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
              <p id="footer-copy"><strong>Team SMS</strong> &copy; 2022 </p>
            </div>
          </div>
        </div>

      </footer>
    </BrowserRouter>



    // End Navbar Section
  );
}

export default App;
