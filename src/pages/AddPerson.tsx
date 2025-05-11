import React, { useState } from 'react';
import Breadcrumb from './breadcrumb';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from './header';
import MessageAlert from './messageAlert';

const Addperson: React.FC = () => {
  const history = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'danger' | 'success' | null>(null);
  const [userType, setUserType] = useState('HOUSEMAID');
  const [formData, setFormData] = useState({
    fullName: '',
    nicNumber: '',
    passportNumber: '',
    address: '',
    contactNumber: '',
    description: ''
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {

      let errors = false;
      if(!userType || !formData.fullName || !formData.nicNumber || !formData.passportNumber || !formData.address || !formData.contactNumber || !formData.description){
        errors = true;
      }
      if(formData.contactNumber.length !== 10){
        errors = true;
      }
      if(formData.nicNumber.length < 10){
        errors = true;
      }
      if(errors){
        setStatus('danger');
        setMessage('Please fill all the details and try again');
        setTimeout(() => {
          setMessage(null);
        }, 4000);
        return;
      }

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/add`, {
        category: userType,
        fullName: formData.fullName,
        nic: formData.nicNumber,
        passportNumber: formData.passportNumber,
        address: formData.address,
        phoneNumber: formData.contactNumber,
        description: formData.description
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );

      if(response.status === 401 || response.status === 403){
        setMessage(null);
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }

        setStatus('success');
        setMessage('Profile successfully added.');
        setTimeout(() => {
          setMessage(null);
        }, 4000);

        setFormData({
          fullName: '',
          nicNumber: '',
          passportNumber: '',
          address: '',
          contactNumber: '',
          description: ''
        });
      
    } catch (error: any){
      if(error.status === 401 || error.status === 403){
        setMessage(null);
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      } else {
        setStatus('danger');
        setMessage('Something went wrong. Please check details and try again');
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    }
  };

  const options = [
    { value: 'HOUSEMAID', label: 'Housemaid' },
    { value: 'SUBAGENT', label: 'Sub Agent' }
  ];

  return (
    <>
    <Header />
    <Breadcrumb />
      <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-left mb-4">Add Person</h2>

      {/* Form to add customer details */}
      <form onSubmit={handleSubmit}>
        {/* Customer Category Dropdown */}
        <div className="mb-3">
          <label className="form-label">Customer Category</label>
          <select
            name="category"
            className="form-select add-person-input"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Full Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control add-person-input"
            value={formData.fullName} onChange={handleInputChange}
            required />
        </div>

        {/* NIC Number */}
        <div className="mb-3">
          <label className="form-label">NIC Number</label>
          <input
            type="text"
            name="nicNumber"
            className="form-control add-person-input"
            value={formData.nicNumber}
            maxLength={12}
            onChange={handleInputChange}
            required />
        </div>

        {/* Contact Number */}
        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            className="form-control add-person-input"
            value={formData.contactNumber} maxLength={10} onChange={handleInputChange}
            required />
        </div>

        {/* Passport Number */}
        <div className="mb-3">
          <label className="form-label">Passport Number</label>
          <input
            type="text"
            name="passportNumber"
            className="form-control add-person-input"
            value={formData.passportNumber} maxLength={12} onChange={handleInputChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control add-person-input"
            value={formData.address} onChange={handleInputChange} />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            onChange={handleInputChange}
            value={formData.description}
            rows={4} />
        </div>
        {message && <MessageAlert type={status} message={message}/>}
        {/* Submit Button */}
        <button type="button" className="btn btn-primary w-100 add-person-input" onClick={()=>{handleSubmit()}}>Add Person</button>
      </form>
      
    </div></>
  );
};

export default Addperson;
