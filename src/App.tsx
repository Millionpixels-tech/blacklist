import React from 'react';
import './App.css';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Ads from './pages/ads';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchProfile from './pages/search';
import Addperson from './pages/AddPerson';
import UpdatePerson from './pages/updatePerson';
import AuthComponent from './pages/auth/authComponent';

function App() {
  //comment
  return (
    <Router> {/* Make sure BrowserRouter wraps everything */}
      <AuthComponent/>
      <div className="main-content" style={{ marginTop: '55px' }}>
        {/* Routes should be wrapped in Routes component */}
        <Routes>
          <Route path="/" element={<SearchProfile />} />
          <Route path="/for-sale" element={<Ads />} />
          <Route path="/login" element={<Login />} /> {/* Auth page */}
          <Route path="/admin/register/person" element={<Register />} />
          <Route path="/add-person" element={<Addperson />} />
          <Route path="/blacklist-Person/edit/:id" element={<UpdatePerson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
