import React, { useState } from "react";
import "../asset/CSS/Login.css";
import LoginApi from "../Api/LoginApi";
import { Ilogin } from "../Model/ILogin";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    rememberMe: false,
  });
  const [credential, setCredential] = useState({})

  const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = ev.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      emailError: "", // Clear error on input change
      passwordError: "", // Clear error on input change
    });
  };

  const handleLogin = async () => {
    // Basic form validation dwi.tripathy@gmail.com
    if (!formData.email.trim()) {
      setFormData({ ...formData, emailError: "Please enter your email" });
      return;
    }
    if (!formData.password.trim()) {
      setFormData({ ...formData, passwordError: "Please enter a password" });
      return;
    }
    const credential: Ilogin = {
      username: formData.email,
      password: formData.password,
    };
    setCredential(credential);

  };

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="user-box">
            <input
              name="email"
              value={formData.email}
              placeholder="Enter username here"
              onChange={handleInputChange}
              className={"user-box"}
            />
            <label className="errorLabel">{formData.emailError}</label>
          </div>
          <div className="user-box">
            <input
              name="password"
              value={formData.password}
              placeholder="Enter password here"
              onChange={handleInputChange}
              className={"user-box"}
              type="password" // Hide password input
            />
            <label className="errorLabel">{formData.passwordError}</label>
          </div>
          <div className="remeberme-box">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleInputChange}
            />
            <p>Remember Me</p>
          </div>
          <input
            onClick={handleLogin}
            className={"inputButton"}
            type="button"
            value={"Submit"}
          />
        </form>
      </div>
      {Object.keys(credential).length &&
        <LoginApi credential={credential} />
      }
    </>
  );
};

export default Login;
