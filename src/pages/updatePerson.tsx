import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumb from './breadcrumb';
import axios from 'axios';
import Header from './header';
import MessageAlert from './messageAlert';

const UpdatePerson: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: '',
    fullName: '',
    nic: '',
    passportNumber: '',
    address: '',
    phone_number: '',
    description: ''
  });
  const [message, setMessage] = useState<string | null>(null);
  const [status, setStatus] = useState<'danger' | 'success' | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/update`, {
        id: id,
        category: formData.category,
        fullName: formData.fullName,
        nic: formData.nic,
        passportNumber: formData.passportNumber,
        address: formData.address,
        phoneNumber: formData.phone_number,
        description: formData.description
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );

      if(response.status === 401 || response.status === 403){
        localStorage.setItem("accessToken", ""); 
        navigate(`${process.env.PUBLIC_URL}/login`);
      }

      setMessage('Profile update successfully.');
      setStatus('success');
      setTimeout(() => {
        setMessage(null);
      }, 4000);

      //toast.success("Updated User details successfully");

    } catch (error: any){
      if(error.status === 401 || error.status === 403){
        localStorage.setItem("accessToken", ""); 
        navigate(`${process.env.PUBLIC_URL}/login`);
      }
      setMessage('Something went wrong. Please try again');
      setStatus('danger');
      setTimeout(() => {
        setMessage(null);
      }, 4000);

      //toast.error("Something went wrong. Please try again");
    }
  };

  const removeHandler = async () => {
    try {

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/delete`, {
        id: id
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      );

      if(response.status === 401 || response.status === 403){
        localStorage.setItem("accessToken", ""); 
        navigate(`${process.env.PUBLIC_URL}/login`);
      }

      //toast.success("User removed from blacklist successfully");

      setTimeout(() => {
        navigate(`${process.env.PUBLIC_URL}`);
      }, 4000);

    } catch (error: any){
      if(error.status === 401 || error.status === 403){
        localStorage.setItem("accessToken", ""); 
        navigate(`${process.env.PUBLIC_URL}/login`);
      }
      //toast.error("Something went wrong. Please try again");
    }
  };

  useEffect(() => {
    // Define the async function
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken"); 

        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/person/get/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if(response.status === 401 || response.status === 403){
          localStorage.setItem("accessToken", ""); 
          navigate(`${process.env.PUBLIC_URL}/login`);
        }

        setFormData(response.data);
      } catch( error: any) {

        if(error.status === 401 || error.status === 403){
          localStorage.setItem("accessToken", ""); 
          navigate(`${process.env.PUBLIC_URL}/login`);
        }
        
      }
    }

    fetchData();

}, []);

  return (
    <><Header /><Breadcrumb /><div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="text-left mb-4">Edit Customer</h2>

      <form>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control update-person-input"
            onChange={handleInputChange}
            value={formData.fullName}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">NIC Number</label>
          <input
            disabled
            type="text"
            name="nic"
            className="form-control update-person-input"
            onChange={handleInputChange}
            value={formData.nic}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Number</label>
          <input
            type="tel"
            name="phone_number"
            className="form-control update-person-input"
            onChange={handleInputChange}
            value={formData.phone_number}
            required />
        </div>

        <div className="mb-3">
          <label className="form-label">Passport Number</label>
          <input
            disabled
            type="text"
            name="passportNumber"
            className="form-control update-person-input"
            onChange={handleInputChange}
            value={formData.passportNumber} />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            className="form-control update-person-input"
            onChange={handleInputChange}
            value={formData.address} />
        </div>

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

        <button type="button" className="btn btn-primary w-100 mb-2 update-person-input" onClick={() => {
                        handleSubmit();
                    }}>Update Informations</button>
        <button type="button" className="btn btn-danger w-100 update-person-input" onClick={() => {
                        removeHandler();
                    }}>
          Delete Profile From Blacklist
        </button>
      </form>
    </div></>
  );
};

export default UpdatePerson;
