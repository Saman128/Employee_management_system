import React from 'react'
import "./Setting.css";
import "./Popup.css";
import { LuSave } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
const Setting = ({ passOpenPopup }) => {
    return (
        <div>
            <h1 className='heading'>Settings</h1>
            <p className='p'>Manage your account and preferences</p>
            <div className='popup-card setting-cards'>
                <div className='popup-personal settings'>
                    <h1 className='h1'><FiUser className='ic' /> Public Profile</h1>
                    <div className='input-container'>
                        <div className='label-input'>
                            <label>Name</label>
                            <input type='text' className='input'></input>
                        </div>
                        <div className='label-input'>
                            <label>Email</label>
                            <input type='email' className='input'></input>
                        </div>
                        <label>Position</label>
                        <input type='text' className='input'></input>
                        <label>Bio</label><br></br>
                        <textarea className='input textarea' placeholder="Write a brief bio.."></textarea>
                        <p className='p1'>This will be displayed on your profile.</p>
                    </div>
                    <div className='btn-container'>
                        <button className='emp-button create'><LuSave className='ic' /> Save Changes</button>
                    </div>
                </div>
            </div>
            <div className='chnage-password'>
                <div className='change-heading1'>
                    <div className='change-heading'>
                        <div className='bag'><IoBagOutline className='bag-ic' /></div>
                        <div>
                            <h2 className='heading-change'>Password</h2>
                            <p className='p-change'>Update your account password</p>
                        </div>
                    </div>
                    <div className='change-btn'>
                        <button onClick={passOpenPopup} className='change-btn1'>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
