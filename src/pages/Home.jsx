/* eslint-disable no-unused-vars */
import React from "react";
// import ProfileCard from "../components/ProfileCard";
import ProfileList from "../components/ProfileList";


const Home=()=>{
    return(
        <div className="home-container">
            <header className="home-header">
                <h1>Profile Explorer</h1>
                <p>Browse Through Profiles and explore Their location on map.</p>
            </header>
            <main className="main">
                <ProfileList/>
            </main>
        </div>
    )
}

export default Home;