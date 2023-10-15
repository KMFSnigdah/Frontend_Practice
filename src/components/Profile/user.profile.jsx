import React from "react";

const UserProfile = ({ item }) => {
  const { address, mobile, nationality, homeDistrict } = item;
  return (
    <li key={item.id}>
      <div className=" text-xl">
        <div>Address: {address}</div>
        <div>Mobile: {mobile}</div>
        <div>Nationality: {nationality}</div>
        <div>Home District: {homeDistrict}</div>
      </div>
    </li>
  );
};

export default UserProfile;
