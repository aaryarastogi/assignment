// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserContext from './contexts/UserContext';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';


const App = () => {
  const [userData, setUserData] = React.useState([]);

  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
