import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../api/profiles.json';
import MapComponent from '../components/MapComponent';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const selectedProfile = profilesData.find((profile) => profile.id === parseInt(id));
    setProfile(selectedProfile);
  }, [id]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} className="profile-photo" />
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Contact:</strong> {profile.contact || 'N/A'}</p>
      <p><strong>Interests:</strong> {profile.interests || 'N/A'}</p>
      <p><strong>Biography:</strong> {profile.biography || 'N/A'}</p>

      <h3>Location</h3>
      <MapComponent address={profile.address} /> */}
    </div>
  );
};

export default ProfileDetails;