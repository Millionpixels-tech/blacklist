import React, { useState } from 'react';
import Breadcrumb from './breadcrumb';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Header from './header';

// Define the structure for User Profile
interface User {
  id: string;
  username: string;
  description: string;
  passportNumber: string;
  fullName: string;
  nic: string;
}

const SearchProfile: React.FC = () => {

  const [foundUser, setFoundUser] = useState<User | null>(null);
  const [nic, setNic] = useState('');
  const history = useNavigate();

  const searchUser = async (nic: string) => {

    try {

      const token = localStorage.getItem("accessToken"); 

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_SERVER}/api/profiles/person/${nic}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('ssssss');
      if(response.status === 401 || response.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }

      if(!response.data){
        setFoundUser(null);
      } else {
        setFoundUser(response.data);
      }

    } catch (error: any){
      if(error.status === 401 || error.status === 403){
        localStorage.setItem("accessToken", ""); 
        history(`${process.env.PUBLIC_URL}/login`);
      }
      setFoundUser(null);
    }
  };

  return (
    <><Header /><Breadcrumb /><div className="container mt-5">
      <h2 className="text-right mb-4">Search Person</h2>

      {/* Search input box */}
      <div className="mb-4 row">
        <div className="col-12 col-md-10 mb-2 mb-md-0 pe-md-1">
          <input
            type="text"
            className="form-control search-person-input"
            placeholder="Search for a user..."
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-2 ps-md-1">
          <button className="btn btn-primary w-100 search-person-input" type="button" onClick={() => searchUser(nic)}>
            Search
          </button>
        </div>
      </div>

      {/* Display the users as cards */}
      {foundUser ? (
          <div key={foundUser.nic} className="card mb-3 shadow-sm rounded-3">
            <div className="card-body d-flex justify-content-between align-items-start flex-column flex-md-row">
              
              {/* Left Side: User Info */}
              <div>
                <h5 className="card-title mb-4 search-card-name"><b>{foundUser.fullName}</b></h5>
                <p className="mb-1">NIC: <strong>{foundUser.nic}</strong></p>
                <p className="mb-1">Passport No: <strong>{foundUser.passportNumber}</strong></p>
                <p className="mb-0">{foundUser.description}</p>
              </div>

              <div className="mt-3 mt-md-0 ms-md-4">
                <Link to={`${process.env.PUBLIC_URL}/blacklist-Person/edit/${foundUser.id}`}>
                  <button className="btn btn-outline-primary btn-sm">Edit or Remove This Person</button>
                </Link>
              </div>

            </div>
          </div>
      ) : (
        <p>No user found</p>
      )}
    </div></>
  );
};

export default SearchProfile;
