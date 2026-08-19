import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Welcome = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <h2>Welcome Back</h2>
                <p className='p1'>Select your portal to securely access the system.</p>
                <Link to={"/admin"} className='Link'>  <button className='btn'>Admin portal <FaArrowRight className='icon' /></button></Link><br></br>
                <Link to={"/employe"} className='Link'> <button className='btn'>Employee portal <FaArrowRight className='icon' /></button></Link>
                <p className='p2'>© 2026 GreatStack. All rights reserved.</p>
            </div>
        </div>
    )
}
const Admin = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <Link to={"/"} className='Link'>  <p className='p2'><FaArrowLeft className='icon' />Back to portals</p></Link>
                <h2 className='heading1'>Admin Portal</h2>
                <p className='p1 p3'>Sign in to manage the organization</p>
                <form>
                    <label>Email address</label><br></br>
                    <input type='text' /><br></br>
                    <label>Password</label><br></br>
                    <input type='password' /><br></br>
                    <Link to={"/dashboard"}>  <button className='btn1'>Sign in</button></Link>
                </form>

            </div>
        </div>
    )
}
const Employe = () => {
    return (
        <div className='right-side'>
            <div className='data'>
                <Link to={"/"} className='Link'> <p className='p2 p4'><FaArrowLeft className='icon' />  Back to portals</p></Link>
                <h2 className='heading1'>Employee Portal</h2>
                <p className='p1 p3'>Sign in to access your account</p>
                <form>
                    <label>Email address</label><br></br>
                    <input type='text' /><br></br>
                    <label>Password</label><br></br>
                    <input type='password' /><br></br>
                    <button className='btn1'>Sign in</button>
                </form>

            </div>
        </div>
    )
}

export { Welcome, Admin, Employe };
