import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SongList from "./pages/SongList";
import AddSong from "./pages/AddPlaylist";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const location = useLocation();

  // Hide navbar on login & register pages
  const hideNavbar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-black text-white">
      {!hideNavbar && <Navbar />}
      
      <Routes>
        {/* Root -> Home (Protected) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Auth Pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Songs (Protected) */}
        <Route
          path="/songs"
          element={
            <PrivateRoute>
              <SongList />
            </PrivateRoute>
          }
        />
        <Route
          path="/songs/add"
          element={
            <PrivateRoute>
              <AddSong />
            </PrivateRoute>
          }
        />

        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-2xl">
              404 - Page Not Found
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
