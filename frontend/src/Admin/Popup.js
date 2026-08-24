import React from 'react'
import "./Popup.css";
import { IoMdClose } from "react-icons/io";
const Popup = ({ onClose }) => {
    return (
        <div className='popup'>
            <div className='popup-card'>
                <div className='popup-heading'>
                    <div className='main-heading'>
                        <h1>Add New Employee</h1>
                        <p>Create a user account and employee profile</p>
                    </div>
                    <div className='close-icon'><IoMdClose onClick={onClose} /></div>
                </div>
                <div className='popup-personal'>
                    <h1 className='h1'>Personal Information</h1>
                    <div className='input-container'>
                        <div className='label-input'>
                            <label>First Name</label>
                            <input type='text' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Last Name</label>
                            <input type='text' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Phone Number</label>
                            <input type='tel' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Join Date</label>
                            <input type='date' className='input'></input>
                        </div>
                        <label>Bio (Optional)</label><br></br>
                        <textarea className='input textarea' placeholder="Brief description.."></textarea>
                    </div>
                </div>
                <div className='popup-employement'>
                    <h1 className='h1'>Employment Details</h1>
                    <div className='input-container'>
                        <div className='label-input'>
                            <label>Department</label><br></br>
                            <select className='select department-input'>
                                <option value="">Select Departments</option>
                                <option value="hr">HR</option>
                                <option value="engineering">Engineering</option>
                                <option value="finance">Finance</option>
                                <option value="marketing">Marketing</option>
                                <option value="sales">Sales</option>
                                <option value="operation">Operation</option>
                                <option value="it">IT</option>
                                <option value="design">Design</option>
                            </select>
                        </div>
                        <div className='label-input'>
                            <label>Position</label>
                            <input className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Basic Salary</label>
                            <input type='number' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Allowances</label>
                            <input type='number' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Deductions</label>
                            <input type='number' className='input'></input>
                        </div>
                    </div>
                </div>
                <div className='popup-account'>
                    <h1 className='h1'>Account Setup</h1>
                    <div className='input-container'>
                        <label>Work Email</label>
                        <input type='email' className='input'></input>
                        <div className='label-input'>
                            <label>Temporary Password</label>
                            <input type='password' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>System Role</label><br></br>
                            <select className='select department-input'>
                                <option value="">Employee</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='btn-container'>
                    <button className='emp-button close' onClick={onClose}>Close</button>
                    <button className='emp-button create'> Create Employee</button>
                </div>
            </div>
        </div>
    )
}

export default Popup
