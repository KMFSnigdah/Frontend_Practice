// import { useState, useEffect } from "react";

// import { getHealthData } from "../../services/healthdata";
// import MentalHealth from "./mentalHealth";
// import PhysicalHealth from "./physicalHealth";
// import "./Home.css";

// const Home = () => {
//   const [healthData, setHealthData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHealthData = async () => {
//       try {
//         const response = await getHealthData();
//         setHealthData(response.data.data);
//       } catch (error) {
//         console.error("Failed to fetch health data", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHealthData();
//   }, []);

//   return (
//     <div className="home-container">
//       <h1 className="home-heading">Welcome to the Home Page</h1>
//       {loading && <p className="loading-text">Loading...</p>}
//       {healthData && (
//         <div className="data-container">
//           <p className="data-item">
//             <span className="data-label">Age:</span>
//             <span className="data-value">{healthData.age}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">Weight:</span>
//             <span className="data-value">{healthData.weight}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">Height:</span>
//             <span className="data-value">{healthData.height}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">BMI:</span>
//             <span className="data-value">{healthData.bmi}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">BMR:</span>
//             <span className="data-value">{healthData.bmr}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">Blood Group:</span>
//             <span className="data-value">{healthData.bloodGroup}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">Goal Type:</span>
//             <span className="data-value">{healthData.goalType}</span>
//           </p>
//           <p className="data-item">
//             <span className="data-label">Activity Level:</span>
//             <span className="data-value">{healthData.activityLevel}</span>
//           </p>
//           <MentalHealth mentalHealthData={healthData.mentalHealth} />
//           <PhysicalHealth physicalHealthData={healthData.physicalHealth} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
