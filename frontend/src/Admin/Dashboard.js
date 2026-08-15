import React from 'react';
import './style.css';
import { FiUser, FiUsers } from "react-icons/fi";
import { LuLayoutDashboard, LuBuilding2 } from "react-icons/lu";
import { FaRegFileAlt, FaRegCalendar } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = (props) => {
    return (
        <div className='main-container'>
            <div className='left-container'>
                <div className='logo'>
                    <div className='logo-pic'><FiUser /></div>
                    <div className='logo-heading'>
                        <h2>Employee MS</h2>
                        <p>Management System</p>
                    </div>
                </div>
                <div className='name'>
                    <div className='name-icon'>
                        <h3>A</h3>
                    </div>
                    <div className='name-heading'>
                        <h2>Admin</h2>
                        <p>Administrator</p>
                    </div>
                </div>
                <h3 className='nav-heading'>NAVIGATION</h3>
                <div className='nav'>
                    <ul>
                        <NavLink to={"/"} className='Link'> <li><LuLayoutDashboard className='icons' />Dashboard</li></NavLink>
                        <NavLink to={"/employee"} className='Link'>  <li><FiUser className='icons' />Employees</li></NavLink>
                        <NavLink to={"/leave"} className='Link'>   <li><FaRegFileAlt className='icons' />Leave</li></NavLink>
                        <NavLink to={"/payslips"} className='Link'>  <li><TbCurrencyDollar className='icons' />Payslips</li></NavLink>
                        <NavLink to={"/setting"} className='Link'> <li><CiSettings className='icons' />Settings</li></NavLink>
                    </ul>
                </div>
                <div className=' logout'>
                    <div className='logout-heading'>
                        <h3><IoIosLogOut className='icons icon-log' />Log out</h3>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <Outlet />
            </div>

        </div>
    )
};
const DashboardDisplay = () => {
    return (<>

        <div className='dashboard-heading'>
            <h1>Dashboard</h1>
            <p>Welcome back, Admin — here's your overview</p>
        </div>
        <div className='dashboard-cards'>
            <div className='card1'>
                <div className='card-h'>
                    <h2>Total Employees</h2>
                    <h1>5</h1>
                </div>
                <div className='card-icon'>
                    <h1><FiUsers /></h1>
                </div>
            </div>
            <div className='card1'>
                <div className='card-h'>
                    <h2>Departments</h2>
                    <h1>5</h1>
                </div>
                <div className='card-icon'>
                    <h1><LuBuilding2 /></h1>
                </div>
            </div>
            <div className='card1'>
                <div className='card-h'>
                    <h2>Today's Attendance</h2>
                    <h1>5</h1>
                </div>
                <div className='card-icon'>
                    <h1><FaRegCalendar /></h1>
                </div>
            </div>
            <div className='card1'>
                <div className='card-h'>
                    <h2>Pending Leaves</h2>
                    <h1>5</h1>
                </div>
                <div className='card-icon'>
                    <h1><FaRegFileAlt /></h1>
                </div>
            </div>
        </div>
    </>
    )
};

export { Dashboard, DashboardDisplay };
