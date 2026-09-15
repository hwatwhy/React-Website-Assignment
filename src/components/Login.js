import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function validateForm() {
    let isValid = true;

    // Reset error messages
    setEmailError("");
    setPasswordError("");

    if (email.length === 0) {
      setEmailError("Please enter your email.");
      isValid = false;
    }

    if (password.length === 0) {
      setPasswordError("Please enter your password.");
      isValid = false;
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate form fields
    if (!validateForm()) {
      return;
    }

    // Reset general error message
    setErrorMessage("");

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Check if the password matches
      if (user.password === password) {
        // Save user data to local storage
        localStorage.setItem("currentUser", JSON.stringify(user));
        // In your Login component, after successfully setting the user in localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Dispatch a custom event
        window.dispatchEvent(new Event("storage"));
        alert("Login Successful");
        navigate("/dashboard"); // Navigate to the homepage or dashboard
      } else {
        setErrorMessage("Invalid Password.");
      }
    } else {
      setErrorMessage("Invalid Email.");
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <h2 className="title1">Login Page</h2>
        <Form.Group controlId="email" className="FormGroup">
          <div className="label-container">
            <Form.Label>Email:</Form.Label>
            {emailError && <div className="error-text-inline">{emailError}</div>}
          </div>
          <Form.Control
            placeholder="Enter Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isInvalid={!!emailError} // Bootstrap error styling
          />
        </Form.Group>

        <Form.Group controlId="password" className="FormGroup">
          <div className="label-container">
            <Form.Label>Password:</Form.Label>
            {passwordError && <div className="error-text-inline">{passwordError}</div>}
            {errorMessage && <div className="error-text-inline">{errorMessage}</div>}
          </div>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError} // Bootstrap error styling
          />
        </Form.Group>

        <div className="row">
          <Form.Check
            type="checkbox"
            label="Keep me signed in"
            onChange={(e) => setKeepSignedIn(e.target.checked)}
          />
          <Link className="forgot-password" to="/Forget_Password">
            Forgot password?
          </Link>
        </div>

        <Button block size="lg" type="submit">
          Login
        </Button>

        <div className="sign-up">
          <Link className="text" to="/Signup">
            Not a Member yet? Sign up now
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
