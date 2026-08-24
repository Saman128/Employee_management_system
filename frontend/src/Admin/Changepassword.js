import React from 'react'
import "./Popup.css";
import { IoMdClose } from "react-icons/io";
import { CiLock } from "react-icons/ci";
const Changepassword = ({ onClose }) => {
    return (
        <div>
            <div>
                <div className='popup popup1 '>
                    <div className='popup-card popup-card2'>
                        <div className='popup-heading'>
                            <div className='main-heading'>
                                <h1><CiLock className='bag-icon' />Change Password</h1>
                            </div>
                            <div className='close-icon'><IoMdClose onClick={onClose} /></div>
                        </div>
                        <div className='popup-personal  popup-heading1'>
                            <div className='input-container'>
                                <label>Current Password</label>
                                <input type='password' className='input input2'></input>
                                <label>New Password</label>
                                <input type='password' className='input1 input2'></input>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <button className='emp-button close' onClick={onClose}>Cancel</button>
                            <button className='emp-button create'> Update Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Changepassword
