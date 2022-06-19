import React from "react";
import img1 from "../img/market3.jpg";

export const About = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex align-items-center h-100">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="d-flex align-items-center h-100">
                        <img src={img1} className="img-fluid" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}