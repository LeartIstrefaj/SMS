import React from "react";
import emailjs from 'emailjs-com';
import { Accordion } from "react-bootstrap";
import gallery1 from '../img/g6.jpg';
import gallery2 from '../img/drinks.jpg';
import gallery3 from '../img/books2.jpg';
import gallery4 from '../img/clothings.jpg';
import gallery5 from '../img/clothing2.jpg';
import gallery6 from '../img/jewerly.jpg';
import gallery7 from '../img/shoes.jpg';
import gallery8 from '../img/shoes2.jpg';

export const Home = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("service_pmx404e", "template_akjj4ew", e.target, "drL4WuDyywSGUYi2O").then(res => {
            console.log(res);
        }).catch(err => console.log(err));
    }


    return (
        <div className="">
            {/* section 1 */}
            <div className="container height">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 mt-5">
                        <h4 className="pb-3 display-5 small-design">Wal, is your best friend...</h4>
                        <p className="paragraph-style">Wal Market is one of the stores with the largest reach in the country, region, it works as a self-service that includes the sale of food items, products, drinks, clothing, books, electronics, etc. Wal has a staff of...</p>
                        <a href="/about"><button className="button toppush me-4">Show more</button></a>
                        {/* <a href="/contact"><button className="button toppush">Contact Us</button></a> */}
                    </div>

                    <div className="col-lg-7 col-md-5 col-sm-12">

                        <div id="bg-home"></div>
                    </div>
                </div>
            </div>
            {/* section 2 - Gallery photos */}

            <div className="section-home-2 pb-5">
                <div className="container">
                    <div className="row g-4 h-100">
                        <h2 className=" mb-5 mt-4 section-faq-title">Gallery</h2>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="img-fluid redesign-img" src={gallery1} alt="gallery1" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="img-fluid redesign-img" src={gallery2} alt="gallery2" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="img-fluid redesign-img" src={gallery3} alt="gallery3" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="img-fluid redesign-img" src={gallery4} alt="gallery4" />
                        </div>

                        {/* row 2 gallery */}
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <img className="img-fluid redesign-img-2" src={gallery5} alt="gallery5" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-2">
                            <img className="img-fluid redesign-img-2" src={gallery6} alt="gallery6" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-2">
                            <img className="img-fluid redesign-img-2" src={gallery7} alt="gallery7" />
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-2">
                            <img className="img-fluid redesign-img-2" src={gallery8} alt="gallery8" />
                        </div>

                    </div>
                </div>
            </div>










            {/* section 3- services */}
            {/* <div className="building-info">
                <h2>Jemi duke punuar ende , do rikthehemi për pak kohë...</h2>
            </div> */}
            <div className="container pb-5">
                <div className="row">
                    <h2 className=" mt-5 mb-4 text-center ">Services</h2>
                    <div className="col-lg-4 col-md-12 col-sm-12 ">
                        <div class="cards toppush">
                            <h5>Sales</h5>
                            <p className="paragraph-style-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div class="cards toppush">
                            <h5>Warehouse</h5>
                            <p className="paragraph-style-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div class="cards toppush">
                            <h5>Management</h5>
                            <p className="paragraph-style-cards">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            </p>
                        </div>
                    </div>
                </div>


                <figure class="text-center pt-5">
                    <blockquote class="blockquote">
                        <p>Your choice is growth for us.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Written by: <cite title="Source Title">Wal Staff</cite>
                    </figcaption>
                </figure>

            </div>

            {/* section 2 */}
            <div className="section-home pushTop">
                <div className="container">
                    <div className="row h-100 d-flex align-items-center">
                        <h2 className="mb-5 mt-4 section-faq-title">FAQ Details</h2>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Per cfare eshte krijuar aplikacioni</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Kush mund ta perdor ate</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>3</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                        {/* accordion other side  */}

                        <div className="col-lg-6 col-md-6 col-sm-6 topp">
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>4</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Kush mund ta perdor ate</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>2</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <br />
                                <Accordion.Item className="toppush" eventKey="0">
                                    <Accordion.Header>3</Accordion.Header>
                                    <Accordion.Body>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                        est laborum.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                        </div>



                    </div>


                </div>

            </div>

            {/* contact -form*/}
            <div className="container bg-contact p-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="title text-dark pb-3">Contact!</h3>
                        <form onSubmit={sendEmail}>
                            <input type="text" className="form-control input input-contact  mx-auto" name="fullname" placeholder="Name:" required />
                            <input type="email" className="form-control input input-contact  mx-auto" name="user_email" placeholder="Email:"  required />
                            <textarea class="form-control input input-contact  text-dark mx-auto" name="message" id="exampleFormControlTextarea1" rows="5" placeholder="Message:" required ></textarea>
                            <div className="buttoni">
                                <input type="submit" className="button button-contact mb-5" value="Send" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    );
}