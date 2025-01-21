/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from 'prop-types';

const ProfileCard=({ profile ,onSummaryClick})=>{
console.log(profile);
    return(
    
        
        <div className="card profile-card">
            <img src={profile.photo} alt={profile.name} className="card-img-top" />
            <div className=" card-body">

                <h5 className="card-title">{profile.name}</h5>
                <p className="card-text">{profile.description}</p>
                <p className="card-text">{profile.interest}</p>
                <p className="card-text">
                    <strong>Address:</strong>{profile.address}
                </p>
                <button className="btn btn-primary" onClick={()=>onSummaryClick(profile)}>View Profile</button>
            </div>
        </div>
        
    );

};

ProfileCard.propTypes={
    profile:PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        photo:PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        interest:PropTypes.string.isRequired,
        address:PropTypes.string.isRequired,

    }).isRequired,
    onSummaryClick:PropTypes.func.isRequired,
};


export default ProfileCard;