import React from "react";

export const Login = () => {
  return (
    <div className="container bg-login">
      <div className="row h-100 d-flex align-items-center justify-content-center">
        <div className="col-lg-5 col-sm-12">

          <h3 className="title">Login Form</h3>
          <input type="text" className="form-control input text-center mx-auto" placeholder="Enter your Email Address" />
          <input type="password" className="form-control input text-center mx-auto" placeholder="Enter your Password" />
          <div className="buttoni">
            <button className="button text-center">Login</button>
          </div>
        </div>

        <div className="p-0 col-lg-7 col-sm-12">
          <div id="bg-forms"></div>
        </div>
      </div>
    </div>

  );
}