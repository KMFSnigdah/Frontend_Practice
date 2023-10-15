import React, { useState, useEffect } from "react";
import * as ProfileService from "../services/user.Service";
import UserProfile from "../components/Profile/user.profile";
import { Link } from "react-router-dom";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState("");

  const fetchPrefileData = async () => {
    try {
      const response = await ProfileService.getProfileData();
      setProfileData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrefileData();
  }, []);

  return (
    <div>
      {loading && <p className="loading-text">Loading...</p>}

      {!loading && (
        <ul className="pt-2">
          {profileData &&
            profileData.map((item, index) => (
              <Link to={`/profile/user-details/${item.userId}`} key={index}>
                <div className="p-4 m-2 text-red-900 bg-red-300">
                  <UserProfile key={item.id} item={item} />
                </div>
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Profile;
