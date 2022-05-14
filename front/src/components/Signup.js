import React from "react";

export const Signup = () => {
  return (
    <div className="container box-2">
      <div className="row d-flex justify-content-center">
        <form className="col-lg-6 col-md-6 col-sm-12">
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a id="sign-in" href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}