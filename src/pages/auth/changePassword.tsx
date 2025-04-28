import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MessageAlert from '../messageAlert';
import Breadcrumb from '../breadcrumb';
import Header from '../header';

const ChangePassword: React.FC = () => {
  const [previousPassword, setPreviousPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setErrorMessage("New Password and Confirm Password do not match.");
      setTimeout(() => setErrorMessage(null), 3000);
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_SERVER}/api/users/change-password`, {
        previousPassword,
        newPassword
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });


      if(response.data.success){
        setSuccessMessage("Password changed successfully.");
        setErrorMessage(null);

        setTimeout(() => {
            setSuccessMessage(null);
            const token = localStorage.setItem('accessToken', '');
            navigate(`${process.env.PUBLIC_URL}/login`);
        }, 2000);
      } else {
        setErrorMessage(response.data.message);
        setTimeout(() => setErrorMessage(null), 3000);
      }

    } catch (error: any) {
        setErrorMessage("Something went wrong while updating password. Please try again");
        setTimeout(() => setErrorMessage(null), 3000);
        console.log(error)
    }
  };

  return (
    <><Header /><Breadcrumb /><div className="container mt-10" style={{ maxWidth: '400px', marginTop: "100px" }}>
          <h2 className="text-center mb-4">Change Password</h2>
          <form onSubmit={handleChangePassword}>
              <div className="mb-3">
                  <label htmlFor="previousPassword" className="form-label">Previous Password</label>
                  <input
                      type="password"
                      id="previousPassword"
                      className="form-control change-password-input"
                      value={previousPassword}
                      onChange={(e) => setPreviousPassword(e.target.value)}
                      required />
              </div>

              <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">New Password</label>
                  <input
                      type="password"
                      id="newPassword"
                      className="form-control change-password-input"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required />
              </div>

              <div className="mb-3">
                  <label htmlFor="confirmNewPassword" className="form-label">Re-enter New Password</label>
                  <input
                      type="password"
                      id="confirmNewPassword"
                      className="form-control change-password-input"
                      value={confirmNewPassword}
                      onChange={(e) => setConfirmNewPassword(e.target.value)}
                      required />
              </div>

              {errorMessage && <MessageAlert type="danger" message={errorMessage} />}
              {successMessage && <MessageAlert type="success" message={successMessage} />}

              <button type="submit" className="btn btn-primary change-password-input w-100">Change Password</button>
          </form>
      </div></>
  );
};

export default ChangePassword;
