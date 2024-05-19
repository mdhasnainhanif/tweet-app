import React, { useState } from "react";
import "../global.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please Fill in all Fields");
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signin",
        user
      );
      console.log("signin successful:", response.data);
      // Handle success (e.g., redirect to login page or show a success message)
    } catch (err) {
      if (err.response && err.response.data) {
        console.error("signin failed:", err.response.data);
        setError(err.response.data.message); // Set error message to state
      } else {
        console.error("signin failed:", err.message);
        setError("An unexpected error occurred."); // General error message
      }
    }
  };

  // Function to clear error when user starts typing
  const clearError = () => {
    setError(null);
  };

  return (
    <>
      <section className="login_section d-flex align-items-center justify-content-center">
        <div className="login_main px-3 py-5 rounded bg-light">
          <form onSubmit={handleSignin}>
            <h2 className="text-primary">Login</h2>
            <div className="mt-4">
              <input
                onChange={(e) => {
                  setEmail(e.target.value); 
                  clearError();
                }}
                className="form-control"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  clearError();
                }}
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>
            <p className="text-start my-2">
              Don’t you have an account?&nbsp;
              <Link to="/signup" className="fw-bold">
                Sign up
              </Link>
            </p>
            {error && <p className="text-danger">{error}</p>} {/* Display error message */}
            <Button
              name="Login"
              className="btn btn-primary mt-3 d-block"
              type="submit"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
