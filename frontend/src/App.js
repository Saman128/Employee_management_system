import './App.css';
import './Login/style.css';

import { Dashboard, DashboardDisplay } from './Admin/Dashboard';
import Employee from './Admin/Employee';
import Leave from './Admin/Leave';
import Payslips from './Admin/Payslips';
import Setting from './Admin/Setting';
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard showPopup={showPopup}
          setShowPopup={setShowPopup} />}>

          <Route index element={<DashboardDisplay />} />
          <Route path="employee" element={<Employee onOpenPopup={() => setShowPopup(true)} />} />
          <Route path="leave" element={<Leave />} />
          <Route path="payslips" element={<Payslips />} />
          <Route path="setting" element={<Setting />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;