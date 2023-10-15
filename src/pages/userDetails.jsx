import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as ProfileService from "../services/user.Service";

const UserDetails = () => {
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState("");
  const { userId } = useParams();

  const fetchPrefileData = async (userId) => {
    try {
      const response = await ProfileService.getHealthInformation(userId);
      setProfileData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrefileData(userId);
  }, []);

  return (
    <div className="bg-red-300 text-red-950	 p-4">
      <h1 className="text-4xl mb-4 font-extrabold object-center	">
        User Details
      </h1>
      {loading && <p>Loading...</p>}
      {!loading && profileData && (
        <div>
          <section className="mb-8">
            <h3 className="text-xl mb-2 font-bold">Basic Information</h3>
            <ul>
              <li>ID: {profileData.id}</li>
              <li>UserID: {profileData.userId}</li>
              <li>Age: {profileData.age}</li>
              <li>Weight: {profileData.weight}</li>
              <li>Height: {profileData.height}</li>
              {/* Add more properties as needed */}
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl mb-2 font-bold">Mental Health</h3>
            <ul>
              <li>
                Anxiety: {profileData.mentalHealth.anxiety ? "Yes" : "No"}
              </li>
              <li>
                Depression: {profileData.mentalHealth.depression ? "Yes" : "No"}
              </li>
              <li>
                Bipolar Disorder:{" "}
                {profileData.mentalHealth.bipolarDisorder ? "Yes" : "No"}
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-xl mb-2 font-bold">Physical Health</h3>
            <ul>
              <li>
                Alcohol Consumption:{" "}
                {profileData.physicalHealth.alcoholConsumption}
              </li>
              <li>
                Blood Pressure: {profileData.physicalHealth.bloodPressure}
              </li>
              <li>
                Caffeine Consumption:{" "}
                {profileData.physicalHealth.caffeineConsumption}
              </li>
              <li>
                Diabetes Level: {profileData.physicalHealth.diabetesLevel}
              </li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
