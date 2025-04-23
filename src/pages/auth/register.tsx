import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    nic: '',
    contactNumber: '',
    whatsappNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log('Registering:', formData);
    // You can add form validation and API call here
  };

  const handleLoginRedirect = () => {
    // Navigate to the Login page
    navigate('/login');
  };

  return (
    <div className="container" style={{ maxWidth: '500px', marginTop: '100px' }}>
      <h2 className="text-center mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control register-input"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control register-input"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">NIC Number</label>
          <input
            type="text"
            name="nic"
            className="form-control register-input"
            value={formData.nic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            className="form-control register-input"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsappNumber"
            className="form-control register-input"
            value={formData.whatsappNumber}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control register-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control register-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Re-enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control register-input"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 register-input">Register</button>
      </form>

      {/* Button to redirect to login page */}
      <div className="mt-3 text-center">
        <button
          className="btn btn-link w-100 register-input"
          onClick={handleLoginRedirect} // Redirect to login page
        >
          Already have an account? Login here
        </button>
      </div>
    </div>
  );
};

export default Register;
