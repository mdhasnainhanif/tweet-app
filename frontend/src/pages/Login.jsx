import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../global.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signin",
        user,
        { withCredentials: true }
      );
      console.log("Signin successful:", response?.data);
      localStorage.setItem("access_token", response?.data?.token);
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      localStorage.setItem("userid", response?.data?.data?._id);

      navigate("/");
    } catch (err) {
      if (err.response && err.response.data) {
        console.log("Signin failed:", err.response.data);
        setError(err.response.data.message);
      } else {
        console.log("Signin failed:", err.message);
        setError("An unexpected error occurred.");
      }
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
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
              value={email}
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
              value={password}
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
          {error && <p className="text-danger">{error}</p>}
          <Button
            name="Login"
            className="btn btn-primary mt-3 d-block"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Login;
