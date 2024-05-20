import React, { useState } from "react";
import "../global.css";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        user
      );

      console.log("Signup successful:", response.data);
      navigate('/login')
    } catch (err) {
      if (err.response && err.response.data) {
        console.error("Signup failed:", err.response.data);
        setError(err.response.data.message);
      } else {
        console.error("Signup failed:", err.message);
        setError("An unexpected error occurred.");
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <>
      <section className="signup_section d-flex align-items-center justify-content-center">
        <div className="signup_main px-3 py-5 rounded bg-light">
          <form onSubmit={handleSignup}>
            <h2 className="text-primary">Sign Up</h2>
            <div className="mt-4">
              <div className="row">
                <div className="col-md-6">
                  <input
                    onChange={(e) => { setFirstName(e.target.value); clearError();}}
                    value={firstName}
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="col-md-6 mt-4 mt-md-0">
                  <input
                    onChange={(e) => { setLastName(e.target.value); clearError(); }}
                    value={lastName}
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => { setEmail(e.target.value); clearError(); }}
                value={email}
                className="form-control"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => { setPassword(e.target.value); clearError(); }}
                value={password}
                className="form-control"
                type="password"
                placeholder="Password"
                required
              />
            </div>
            <p className="text-start my-2">
              Already have an account?
              <Link to="/login" className="fw-bold">
                &nbsp;Login
              </Link>
            </p>
            <Button name="Sign Up" className="btn btn-primary mt-3 d-block" type="submit" />
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
