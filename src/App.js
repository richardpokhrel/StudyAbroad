import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentDashboard from './Pages/home'; // Main dashboard page


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Wrap all pages inside the DashboardLayout */}
        <Route
          path="*"
          element={
           
              <Routes>
                <Route path="/" element={<StudentDashboard />} />
                
              </Routes>
           
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
