import React from 'react';
import "./style.css";
import { Admin } from './Signin';

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
            <Admin />
        </div>
    )
}

export default signup
