import './App.css';
import './Login/style.css';

import { Dashboard, DashboardDisplay } from './Admin/Dashboard';
import Employee from './Admin/Employee';
import Leave from './Admin/Leave';
import Payslips from './Admin/Payslips';
import Setting from './Admin/Setting';
import { useState } from 'react';
import { Welcome, Admin, Employe } from './Login/signin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './Login/signup';
function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [slippopup, setSlipPopup] = useState(false);
  const [passpopup, setpassPopup] = useState(false);
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Signup />} >
          <Route index element={<Welcome />} />
          <Route path="admin" element={<Admin />} />
          <Route path="employe" element={<Employe />} />
        </Route>
        <Route path="dashboard" element={<Dashboard showPopup={showPopup}
          setShowPopup={setShowPopup}
          slippopup={slippopup}
          setSlipPopup={setSlipPopup}
          passpopup={passpopup}
          setpassPopup={setpassPopup} />}>

          <Route index element={<DashboardDisplay />} />
          <Route path="employee" element={<Employee onOpenPopup={() => setShowPopup(true)} />} />
          <Route path="leave" element={<Leave />} />
          <Route path="payslips" element={<Payslips slipOpenPopup={() => setSlipPopup(true)} />} />
          <Route path="setting" element={<Setting passOpenPopup={() => setpassPopup(true)} />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;