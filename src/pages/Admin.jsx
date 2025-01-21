/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from 'react';
import profilesData from '../api/profiles.json';
import MapComponent from '../components/MapComponent';
import axios from 'axios';
import {ErrorBoundary} from 'react-error-boundary';
const Dashboard = () => {
  const [profiles, setProfiles] = useState(profilesData);
  const [newProfile, setNewProfile] = useState({
    id: '',
    name: '',
    photo: '',
    description: '',
    address: '',
    contact: '',
    interests: '',
    biography: '',
  });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({
      id: '',
      name: '',
      photo: '',
      description: '',
      address: '',
      contact: '',
      interests: '',
      biography: '',
    });
  };

  useEffect(() => {
    setProfiles(profilesData)
  }, []);

  // Handle delete action
  const handleDelete = (profileId) => {
   const updatedProfile=profiles.filter(profile => profile._id !== profileId);
   setProfiles(updatedProfile);
  
};
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="add-profile">
        <h3>Add New Profile</h3>
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newProfile.address}
          onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
        />
        <button onClick={handleAddProfile}>Add Profile</button>
      </div>
      <div className="admin-dashboard">
      <h2>Manage Profiles</h2>
      <div className="profile-list">
        {profiles.map(profile => (
          <div key={profile._id} className="profile-card">
            <img src={profile.photo} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <button onClick={() => handleDelete(profile._id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>

    


    </div>
    
  );
};




export default Dashboard;