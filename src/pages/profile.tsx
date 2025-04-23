import React, { useState } from 'react';
import Breadcrumb from './breadcrumb';

// Define the structure for the User's Profile and Ads
interface Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  lotNumber: string;
}

const Profile: React.FC = () => {
  // User details
  const [user, setUser] = useState({
    name: 'John Doe',
    phoneNumber: '123-456-7890',
  });

  // List of ads by the user
  const [ads, setAds] = useState<Ad[]>([
    {
      id: 1,
      title: 'Green Meadows Lot 1',
      description: 'Beautiful plot for sale!',
      price: 1500000,
      lotNumber: 'LOT 01',
    },
    {
      id: 2,
      title: 'Riverside Lot 2',
      description: 'Prime location near river',
      price: 2000000,
      lotNumber: 'LOT 02',
    },
  ]);

  // Handle input change for name and phone number
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  // Handle form submission to update user data
  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User updated:', user);
    // You can add API calls here to save the updated user data
  };

  // Delete an ad by id
  const handleDeleteAd = (adId: number) => {
    const updatedAds = ads.filter((ad) => ad.id !== adId);
    setAds(updatedAds);
  };

  return (
    <><Breadcrumb /><div className="container mt-5">
      <h2 className="text-center mb-4">User Profile</h2>

      {/* User Info Form */}
      <form onSubmit={handleUpdate} className="mb-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={user.name}
            onChange={handleChange}
            required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            className="form-control"
            value={user.phoneNumber}
            onChange={handleChange}
            required />
        </div>
        <button type="submit" className="btn btn-success w-100">
          Update Profile
        </button>
      </form>

      {/* User Ads */}
      <h4 className="mb-4">Your Ads</h4>
      {ads.length > 0 ? (
        <div>
          {ads.map((ad, index) => (
            <div className="card mb-4 w-100" key={index}>
            </div>
          ))}
        </div>
      ) : (
        <p>You have no ads posted yet.</p>
      )}
    </div></>
  );
};

export default Profile;
