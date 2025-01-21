import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilesData from '../api/profiles.json';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    setProfiles(profilesData); // Fetch profiles from the JSON file
  }, []);

  
  return (
    <div className="profile-list">
      <h2>Profiles</h2>
     {profiles.length>0}(
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img src={profile.photo} alt={profile.name} className="profile-photo" />
          <h5>{profile.name}</h5>
          <p>{profile.description}</p>
          <Link to={`/profile/${profile.id}`} className="btn btn-primary">
            View Profile
          </Link>
          
        </div>
      ))}
      <Link to="/dashboard" className="btn btn-secondary">
        Go to Dashboard
     </Link>
     )
    </div>
  );
};

export default ProfileList;