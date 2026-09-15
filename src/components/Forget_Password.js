import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./Forget_Password.css"; // Ensure the correct file extension for the CSS file

const Forget_Password = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  function validateForm() {
    // Reset error messages
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    if (email.length === 0) {
      setEmailError("Email is required.");
      isValid = false;
    }

    if (password.length === 0) {
      setPasswordError("Old password is required.");
      isValid = false;
    }

    if (confirmPassword.length === 0) {
      setConfirmPasswordError("New password is required.");
      isValid = false;
    }

    return isValid;
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Perform validation
    if (!validateForm()) {
      return; // Exit if validation fails
    }

    // Reset error message on successful submission
    alert("Your password has been reset."); // Show alert
    navigate("/login"); // Redirect to the login page
  }

  return (
    <div className="forget">
      <Form onSubmit={handleSubmit}>
        <h2 className="title1">Reset Password</h2>

        <Form.Group size="lg" controlId="email" className="FormGroup">
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

        <Form.Group size="lg" controlId="password" className="FormGroup">
          <div className="label-container">
            <Form.Label>Old Password:</Form.Label>
            {passwordError && <div className="error-text-inline">{passwordError}</div>}
          </div>
          <Form.Control
            placeholder="Enter Old Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isInvalid={!!passwordError} // Bootstrap error styling for Old Password
          />
        </Form.Group>

        <Form.Group size="lg" controlId="confirmPassword" className="FormGroup">
          <div className="label-container">
            <Form.Label>New Password:</Form.Label>
            {confirmPasswordError && <div className="error-text-inline">{confirmPasswordError}</div>}
          </div>
          <Form.Control
            placeholder="Enter New Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            isInvalid={!!confirmPasswordError} // Bootstrap error styling for New Password
          />
        </Form.Group>

        <Button block size="lg" type="submit">
          Reset Password
        </Button>

        <div className="text">
          <Link to="/login" className="text2">Already have an account? Log in</Link>
        </div>
      </Form>
    </div>
  );
};

export default Forget_Password;
