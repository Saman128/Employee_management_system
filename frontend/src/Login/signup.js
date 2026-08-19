import React from 'react';
import "./style.css";
import { Outlet } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Welcome, Admin, Employee } from './signin';

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
            <Outlet />
        </div>
    )
}

export default signup
