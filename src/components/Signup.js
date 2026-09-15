import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  function validateForm() {
    let isValid = true;

    if (fullName.trim().length === 0) {
      setFullNameError("Please enter full name.");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (email.trim().length === 0) {
      setEmailError("Please enter email.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.length === 0) {
      setPasswordError("Please enter password.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword.length === 0 || confirmPassword !== password) {
      setConfirmPasswordError("Passwords must match.");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    if (!validateForm()) {
      return; // Exit if validation fails
    }

    if (localStorage.getItem(email)) {
      setEmailError("Email already exists. Please use another email.");
    } else {
      // Store user details in localStorage
      localStorage.setItem(email, JSON.stringify({ fullName, email, password }));
      alert("Account has been successfully registered.");
      navigate("/login"); // Redirect to the login page

      // Reset form fields after successful submission
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  }

  return (
    <div className="Signup">
      <Form onSubmit={handleSubmit}>
        <h2 className="title1">Sign Up</h2>

        <Form.Group size="lg" controlId="fullName" className="FormGroup">
          <div className="label-container">
            <Form.Label>Full Name:</Form.Label>
            {fullNameError && <div className="error-text-inline" aria-live="polite">{fullNameError}</div>}
          </div>
          <Form.Control
            placeholder="Enter Full Name"
            autoFocus
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            onFocus={() => setFullNameError("")} // Reset error on focus
          />
        </Form.Group>

        <Form.Group size="lg" controlId="email" className="FormGroup">
          <div className="label-container">
            <Form.Label>Email:</Form.Label>
            {emailError && <div className="error-text-inline" aria-live="polite">{emailError}</div>}
          </div>
          <Form.Control
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailError("")} // Reset error on focus
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password" className="FormGroup">
          <div className="label-container">
            <Form.Label>Password:</Form.Label>
            {passwordError && <div className="error-text-inline" aria-live="polite">{passwordError}</div>}
          </div>
          <Form.Control
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordError("")} // Reset error on focus
          />
        </Form.Group>

        <Form.Group size="lg" controlId="confirmPassword" className="FormGroup">
          <div className="label-container">
            <Form.Label>Confirm Password:</Form.Label>
            {confirmPasswordError && <div className="error-text-inline" aria-live="polite">{confirmPasswordError}</div>}
          </div>
          <Form.Control
            placeholder="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => setConfirmPasswordError("")} // Reset error on focus
          />
        </Form.Group>

        <Button block size="lg" type="submit">
          Register Now
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
