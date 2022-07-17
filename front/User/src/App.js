import logoWal from './img/logo-wal.png';
import './App.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { About } from "./components/About";
// import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Category } from "./components/Category";
import { Product } from "./components/Product";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Book } from "./components/Book";
import { Laptop } from "./components/Laptop";
import { Tv } from "./components/Tv";
import { Phones } from "./components/Phones";
import { Drink } from "./components/Drink";
import { Fruit } from "./components/Fruit";
import { Vegetable } from "./components/Vegetable";
import { Jewerly } from "./components/Jewerly";
import { Basketball } from "./components/Basketball";
import { Football } from "./components/Football";
import { Skiing } from "./components/Skiing";
import { Men } from "./components/Men";
import { Women } from "./components/Women";
import { Kids } from "./components/Kids";
import { Error } from "./components/Error";

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
              <Navbar.Brand href="/" className="brand-logo">Wal Market
              <img src={logoWal} alt="" width="40" height="30" className="d-inline-block align-text-top" />
              </Navbar.Brand>
              <Navbar.Toggle id="toggle-design" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto ">
                  <Nav.Link className='links' as={Link} to="/">Home</Nav.Link>
                  <Nav.Link className='links' as={Link} to="/about">About</Nav.Link>
                  {/* <Nav.Link className='links' as={Link} to="/contact">Contact Us</Nav.Link> */}
                  {/* <Nav.Link className='links' as={Link} to="/location">Location</Nav.Link> */}
                  <Nav.Link className='links' as={Link} to="/category">Category</Nav.Link>
                  <Nav.Link className='links' as={Link} to="/product">Product</Nav.Link>
                  <NavDropdown className='links' title="All Departments" id="basic-nav-dropdowns">
                    <NavDropdown.Item as={Link} to="/books" className="dropdown-item">Books</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/jewerlys" className="dropdown-item">Jewerlys</NavDropdown.Item>
                    <NavDropdown className='links' title="Electronics" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/laptop" className="dropdown-item">Laptop</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/tv" className="dropdown-item">TV</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/phone" className="dropdown-item">Smart Phones</NavDropdown.Item>


                    </NavDropdown>

                    <NavDropdown className='links' title="Grocery" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/drink" className="dropdown-item">Drinks</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/fruit" className="dropdown-item">Fruits</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/vegetable" className="dropdown-item">Vegetables</NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown className='links' title="Sports" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/basketball" className="dropdown-item">Basketball</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/football" className="dropdown-item">Football</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/skiing" className="dropdown-item">Skiing</NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown className='links' title="Clothing/Shoes" id="basic-nav-dropdown">
                      <NavDropdown.Item as={Link} to="/men" className="dropdown-item">Men</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/women" className="dropdown-item">Women</NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/kids" className="dropdown-item">Kids</NavDropdown.Item>

                    </NavDropdown>

                  </NavDropdown>
                  <NavDropdown className='links' title="Registration" id="basic-nav-dropdowns">
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
              {/* <Route path="/contact" element={<Contact />} /> */}
              <Route path="/" element={<Home />} />
              {/* <Route path="/location" element={<Location />} /> */}
              <Route path="/category" element={<Category />} />
              <Route path="/product" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/books" element={<Book />} />
              <Route path="/laptop" element={<Laptop />} />
              <Route path="/tv" element={<Tv />} />
              <Route path="/phone" element={<Phones />} />
              <Route path="/drink" element={<Drink />} />
              <Route path="/fruit" element={<Fruit />} />
              <Route path="/vegetable" element={<Vegetable />} />
              <Route path="/jewerlys" element={<Jewerly />} />
              <Route path="/basketball" element={<Basketball />} />
              <Route path="/football" element={<Football />} />
              <Route path="/skiing" element={<Skiing />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="*" element={<Error />} />

            </Routes>
          </div>

        </section>

        <section className='section-footer'>
          <footer className="container">
            <div className="row pt-5">
              <div className="col-lg-3 pe-4">
                <h3 className='mb-3 brand-footer'>Wal Market</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat praesentium quia deserunt amet sit excepturi illum doloremque veritatis possimus! Animi.</p>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5 className='mb-3 title-footer'>Footer Links</h5>
                <p><a className='hover-underline footer-link' href='/'>Home</a></p>
                <p><a className='hover-underline footer-link' href='/about'>About</a></p>
                <p><a className='hover-underline footer-link' href="/category">Category</a></p>
                <p><a className='hover-underline footer-link' href="/product">Product</a></p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5 className='mb-3 title-footer'>Contact Us</h5>
                <p><i class='bx bxs-phone contact-icons'></i> +383 49 848 111</p>
                <p><i class='bx bxs-phone contact-icons'></i> +383 49 125 111</p>
                <p><i class='bx bx-mail-send contact-icons'></i> info@wal.net</p>
                <p><i class='bx bxs-map contact-icons'></i> Prishtine Street 14</p>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <h5 className='mb-3 title-footer'>Social Media</h5>
                <a className='link-footer' id='social-media' href="https://facebook.com/" target="_blank"><i className='icon bx bxl-facebook-circle' ></i></a>
                <a className='link-footer' href="https://www.instagram.com/" target="_blank"><i className=' icon bx bxl-instagram'></i></a>
                <a className='link-footer' href="https://www.whatsapp.com/" target="_blank"><i className=' icon bx bxl-whatsapp' ></i></a>
                <a className='link-footer' href="https://www.linkedin.com/" target="_blank"><i className=' icon bx bxl-linkedin' ></i></a>
                <br />
                <br />
                <p>Terms and Conditions</p>
                <p>Privacy and Policy</p>
              </div>
              <div className='col-lg-10 pt-3 outline'>
                <p id="footer-copy">&copy; Designed and Developed <strong>WAL&trade;</strong>  2022 </p>
              </div>
            </div>
          </footer>
        </section>
        {/* <footer>
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
                <p id="footer-copy"><strong>Team WAL</strong> &copy; 2022 </p>
              </div>
            </div>
          </div>

        </footer>  */}
      </div>
    </BrowserRouter>

    // End Navbar Section
  );
}

export default App;
