import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import logo from '../assets/logo.jpeg'
import './CSS/NavbarStyle.css'

const Navbar = () => {
    const { userData, setUserData } = useContext(UserContext);
    
    const navigate=useNavigate();

    const handleLogout = () => {
        setUserData(null);
        navigate('/')
    };

  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src={logo}/></Link>
      </div>
      <div className="user-section">
        {userData ? (
          <>
            <span>Welcome</span>
            <button onClick={handleLogout} className="btn">Logout</button>
          </>
        ) : (
          <button className="btn">Login</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
