import React from 'react';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome, Admin, Employee } from './signin';

const signup = () => {
    return (
        <div className='container'>
            <div className='left-side'>
                <div className='data'>
                    <h1>Employee
                        Management System</h1>
                    <p>Streamline your workforce operations, track attendance, manage payroll, and empower your team securely.</p>
                </div>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default signup
