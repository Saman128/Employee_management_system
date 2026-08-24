import React from 'react'
import "./Popup.css";
import { IoMdClose } from "react-icons/io";
const Payslippopup = ({ onClose }) => {
    return (
        <div>
            <div className='popup popup1 '>
                <div className='popup-card popup-card1'>
                    <div className='popup-heading'>
                        <div className='main-heading'>
                            <h1>Generate Monthly Payslip</h1>
                        </div>
                        <div className='close-icon'><IoMdClose onClick={onClose} /></div>
                    </div>
                    <div className='popup-personal  popup-heading1'>
                        <div className='input-container'>
                            <label>Employee</label>
                            <input type='text' className='input'></input>
                            <div className='label-input label-input1'>
                                <label>Month</label>
                                <input type='text' className='input1'></input>
                            </div>
                            <div className='label-input label-input1'>
                                <label>Year</label>
                                <input type='tel' className='input'></input>
                            </div>
                            <label>Basic Salary</label>
                            <input type='number' className='input'></input>
                            <div className='label-input label-input1'>
                                <label>Allowances</label>
                                <input type='number' className='input'></input>
                            </div>
                            <div className='label-input label-input1'>
                                <label>Deductions</label>
                                <input type='number' className='input'></input>
                            </div>
                        </div>
                    </div>
                    <div className='btn-container'>
                        <button className='emp-button close' onClick={onClose}>Cancel</button>
                        <button className='emp-button create'> Generate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payslippopup
