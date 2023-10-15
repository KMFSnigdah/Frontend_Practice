import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute ";
import Home from "./components/Home/Home";
import Login from "./pages/Login";
import Profile from "./pages/profile";
import UserDetails from "./pages/userDetails";
import Layout from "./components/Layout/Layout";
import Health from "./pages/health";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/user-details/:userId"
            element={
              <ProtectedRoute>
                <UserDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/health"
            element={
              <ProtectedRoute>
                <Health />
              </ProtectedRoute>
            }
          />
          <Route index={true} element={<Navigate to="/login" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
