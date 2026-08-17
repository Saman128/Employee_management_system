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
                <div className='popup-personal'></div>
                <div className='popup-employement'></div>
                <div className='popup-account'></div>
            </div>
        </div>
    )
}

export default Popup
