import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import MessageAlert from '../messageAlert';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // You can add validation or API call here
  };

  const handleRegisterRedirect = () => {
    // Navigate to the Register page
    navigate('/register');
  };

  const loginAuth = async () => {

    try {

        const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/auth/login`, {
          "email": email,
          "password": password
        });

        localStorage.setItem("accessToken", response.data.accessToken);
        setErrorMessage(null);

        navigate(`${process.env.PUBLIC_URL}/`);

      } catch (error){
        setErrorMessage('Something went wrong with your username or password. Please check and try again');
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        localStorage.setItem("accessToken", 'null');
        //toast.error("Password or email is incorrect. Try Again");
    }
  };

  return (
    <><div className="container mt-10" style={{ maxWidth: '400px', marginTop: "100px" }}>
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
        </div>
        {errorMessage && <MessageAlert type='danger' message={errorMessage}/>}
        <button type="submit" className="btn btn-primary w-100 login-input" onClick={() => loginAuth()}>Login</button>
      </form>

      {/* Register Button */}
      <div className="mt-3 text-center">
        <button
          className="btn btn-secondary w-100 login-input"
          onClick={(handleRegisterRedirect)} // On click, it navigates to the register page
        >
          Register
        </button>
      </div>
    </div></>
  );
};

export default Login;
