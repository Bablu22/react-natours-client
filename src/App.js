import Home from "./pages/Home";
import "./App.css";
import { useEffect } from "react";
import GoTop from "./components/common/GoTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Nav from "./components/common/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAllUsers, getMe } from "./redux/features/authSlice";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Dashboard/Profile";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Wrapper from "./components/common/Wrapper";
import EditProfile from "./components/Dashboard/EditProfile";
import ChangePassword from "./components/Dashboard/ChangePassword";
import Booking from "./components/Dashboard/Booking";
import AddTour from "./components/Dashboard/Admin/AddTour";
import Tour from "./pages/Tour";
import Tours from "./pages/Tours";
import AllUsers from "./components/Dashboard/Admin/AllUsers";
import DeactivatedUser from "./components/Dashboard/Admin/DeactivatedUser";
import AllBookings from "./components/Dashboard/Admin/AllBookings";
import Stats from "./components/Dashboard/Admin/Stats";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getMe());
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Wrapper>
          <Nav />
          <ToastContainer autoClose={1000} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tour/:id" element={<Tour />} />
            <Route path="/tours" element={<Tours />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route index element={<Profile />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="change-password" element={<ChangePassword />} />
              <Route path="bookings" element={<Booking />} />
              <Route path="add-tour" element={<AddTour />} />
              <Route path="all-users" element={<AllUsers />} />
              <Route path="deactive-users" element={<DeactivatedUser />} />
              <Route path="all-bookings" element={<AllBookings />} />
              <Route path="stats" element={<Stats />} />
            </Route>
          </Routes>
          <GoTop />
        </Wrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
