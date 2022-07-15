import React from "react";

export const Signup = () => {
  return (
    <div className="container bg-login">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-lg-5 col-sm-12">

          <h3 className="title">Sign up!</h3>
          <input type="text" className="form-control input text-center mx-auto" placeholder="Enter your First Name" />
          <input type="text" className="form-control input text-center mx-auto" placeholder="Enter your Last Name" />
          <input type="text" className="form-control input text-center mx-auto" placeholder="Enter your Email Address" />
          <input type="password" className="form-control input text-center mx-auto" placeholder="Enter your Password" />
          <div className="buttoni">
            <button className="button">Sign up</button>
          </div>
        </div>

        <div className="p-0 col-lg-7 col-sm-12">
          <div id="bg-forms-signup"></div>
        </div>
      </div>
    </div>
  );
}