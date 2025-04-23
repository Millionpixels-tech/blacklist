import React, { useState } from 'react';

interface Post {
  username: string;
  description: string;
  totalPrice: number;
  lotNumber: string;
  landName: string;
  phoneNumber: string;
}

const userPosts: Post[] = [
  {
    username: 'john_doe',
    description: 'Beautiful plot near the lake with great view.',
    totalPrice: 1250000,
    lotNumber: 'LOT 12',
    landName: 'Green Meadows',
    phoneNumber: '9876543210',
  },
  {
    username: 'jane_smith',
    description: 'Ideal for commercial use. Prime location!',
    totalPrice: 1800000,
    lotNumber: 'LOT 23',
    landName: 'Sunrise Estate',
    phoneNumber: '9123456789',
  },
  // Add more posts as needed
];

const Ads: React.FC = () => {
  const [showPhone, setShowPhone] = useState<boolean>(false);

  // Function to handle the 'Buy Now' button click
  const handleBuyNowClick = () => {
    setShowPhone(!showPhone); // Toggle visibility of phone number
  };

  // Function to mask the phone number except for the last part
  const maskPhoneNumber = (phone: string) => {
    return `**** **** **** ${phone.slice(-4)}`;
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">User Posts</h2>

      {userPosts.map((post, index) => (
        <div className="card mb-4 w-100" key={index}>
          <div className="card-body d-flex justify-content-between">
            <div className="left-side">
              <h5 className="card-title">{post.landName} - {post.lotNumber}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Posted by {post.username}</h6>
              <p className="card-text">{post.description}</p>
            </div>

            {/* Right side: Price and Buy Now button */}
            <div className="right-side d-flex flex-column align-items-end justify-content-between">
              <p className="fw-bold">Total Price: Rs. {post.totalPrice.toLocaleString()}</p>
              <button className="btn btn-primary" onClick={handleBuyNowClick}>
                Buy Now
              </button>

              {/* If 'Buy Now' is clicked, display the phone number */}
              {showPhone && (
                <p className="mt-2">Contact: {maskPhoneNumber(post.phoneNumber)}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ads;
