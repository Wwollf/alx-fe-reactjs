
import React, { useContext } from 'react';
import UserContext from '../UserContext'; // adjust path if needed


const UserProfile = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>
    );
};
function UserProfile() {
    const userData = useContext(UserContext);
  
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
  

export default UserProfile;
