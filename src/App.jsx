import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import Player from "./pages/Player/Player";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import Notfound from "./components/Notfound/Notfound";

const App = () => {
  return (
    <div className="max-w-[2160px] m-auto">
      <ToastContainer theme="dark" position="top-right" animation="bounce" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute />}>
          <Route exact path="/home" element={<Home />} />
        </Route>
        <Route path="/player/:id" element={<ProtectedRoute />}>
          <Route path="/player/:id" element={<Player />} />
        </Route>
        <Route path="/not-found" element={<ProtectedRoute />}>
          <Route path="/not-found" element={<Notfound />} />
        </Route>
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default App;
