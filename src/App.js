import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import OneboxScreen from './Pages/OneboxScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/onebox" element={<OneboxScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
