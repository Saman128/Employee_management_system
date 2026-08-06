import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const Welcome = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <h2>Welcome Back</h2>
                <p className='p1'>Select your portal to securely access the system.</p>
                <button className='btn'>Admin portal <FaArrowRight className='icon' /></button><br></br>
                <button className='btn'>Employee portal <FaArrowRight className='icon' /></button>
                <p className='p2'>© 2026 GreatStack. All rights reserved.</p>
            </div>
        </div>
    )
}
const Admin = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <p className='p2'><FaArrowLeft className='icon' />Back to portals</p>
                <h2>Admin Portal</h2>
                <p className='p1'>Sign in to manage the organization</p>
                <label>Email address</label><br></br>
                <input type='text' /><br></br>
                <label>Password</label><br></br>
                <input type='password' /><br></br>
                <button className='btn'>Sign in</button>

            </div>
        </div>
    )
}
const Employee = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <p className='p2'><FaArrowLeft className='icon' />Back to portals</p>
                <h2>Employee Portal</h2>
                <p className='p1'>Sign in to access your account</p>
                <label>Email address</label><br></br>
                <input type='text' /><br></br>
                <label>Password</label><br></br>
                <input type='password' /><br></br>
                <button className='btn'>Sign in</button>

            </div>
        </div>
    )
}

export { Welcome, Admin, Employee };
