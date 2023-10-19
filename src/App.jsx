import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Profile from "./pages/profile";
import UserDetails from "./pages/userDetails";
import Layout from "./components/Layout/Layout";
import Health from "./pages/health";
import CreateProfile from "./pages/createProfile";
import Home from "./pages/home";
import Authenticate from "./Auth/ProtectedRoute";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Authenticate />}>
            <Route
              path="/home"
              element={
                <Home />
              }
            />

            <Route
              path="/profile"
              element={
                <Profile />
              }
            />

            <Route
              path="/profile/user-details/:userId"
              element={
                <UserDetails />
              }
            />

            <Route
              path="/health"
              element={
                <Health />
              }
            />

            <Route
              path="/create/profile"
              element={
                <CreateProfile />
              }
            />
          </Route>
          <Route index={true} element={<Navigate to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/home"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile"
//             element={
//               <ProtectedRoute>
//                 <Profile />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/profile/user-details/:userId"
//             element={
//               <ProtectedRoute>
//                 <UserDetails />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/health"
//             element={
//               <ProtectedRoute>
//                 <Health />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/create/profile"
//             element={
//               <ProtectedRoute>
//                 <CreateProfile />
//               </ProtectedRoute>
//             }
//           />
//           <Route index={true} element={<Navigate to="/login" />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
