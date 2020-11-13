import React from "react";
import { Redirect } from "react-router-dom";

const Profile = () => {
    const token = localStorage.getItem("Your token");
    console.log("Your token", token)
    if (!token) {
        return <Redirect to="/account" / >;
        
    }

    return (
        <>
        <div>
            <p style={{marginTop: "80px"}}>Ini Halaman Profile</p>
        </div>
        </>
    );
}

export default Profile;
