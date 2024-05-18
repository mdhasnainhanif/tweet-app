import React from "react";
import "../global.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <section className="signup_section d-flex align-items-center justify-content-center">
        <div className="signup_main px-3 py-5 rounded bg-light">
          <h2 className="text-primary">Sign Up</h2>
          <div className="mt-4">
            <div className="row">
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="mt-4">
            <input className="form-control" type="text" placeholder="Email" />
          </div>
          <div className="mt-4">
            <input
              className="form-control"
              type="text"
              placeholder="Password"
            />
          </div>
          <p className='text-start my-2'>Already have an account? <Link to="/login" className="fw-bold">Login</Link></p>
          <Button name="Sign Up" className="btn btn-primary mt-3 d-block" />
        </div>
      </section>
    </>
  );
};

export default Signup;
