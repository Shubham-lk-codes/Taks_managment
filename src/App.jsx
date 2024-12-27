// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import IdeasPage from "./pages/IdeasPage";
import CollaborationPage from "./pages/CollaborationPage";
import FeedbackPage from "./pages/FeedbackPage";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Chat from "./components/Chat"; 
import AuditPage from "./pages/AuditPage";
import Team from "./components/Team";
import SignUp from "./pages/SignUp";
import UsersList from "./components/Admin/ManageUser";

import FeedbackList from "./components/Admin/GetFeedback"

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/collaborate" element={<CollaborationPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} /> {/* Add Chat Route */}
        <Route path="/audit" element={<AuditPage />} /> 
        <Route path="/teams" element={<Team />} />
        <Route path="/manage-user" element={<UsersList />} />
        <Route path="/Feedback-manage" element={<FeedbackList />} />
       
      </Routes>
    </Router>
  );
};

export default App;
