import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
// import ProfileList from './components/ProfileList';
import ProfileDetails from './components/ProfileDetails';
import Dashboard from './pages/Admin';
import Home from './pages/Home';
import "./App.css";
const App = () => {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile/:id" element={<ProfileDetails/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
    </Router>
  );
};

export default App;