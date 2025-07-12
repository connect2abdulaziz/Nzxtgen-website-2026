import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "../components/Navbar";
import "./AdminLogin.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setError("Failed to send reset email. Please check your email address.");
    }
    setLoading(false);
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="admin-login-container">
        <form className="admin-login-form" onSubmit={handleSubmit}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
          {message && <p style={{ color: "green" }}>{message}</p>}
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
