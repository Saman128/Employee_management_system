
import "./Employee.css";
import { FiPlus } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const Employee = ({ onOpenPopup }) => {

    return (
        <div>
            <div className='heading'>
                <div className='heading-emp'>
                    <h1>Employees</h1>
                    <p>Manage your team members</p>
                </div>
                <div className='add-emp'>
                    <button onClick={onOpenPopup} className='emp-btn' ><FiPlus className='f-icons' /> Add Employee</button>
                </div>
            </div>

            <div className='search'>
                <div className='search-box'>
                    <IoSearchSharp className="search-icon" />
                    <input type='text'></input>
                </div>
                <select className='selector'>
                    <option value="">All Departments</option>
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
            <div className='employee-data'>
                <div className='card'>
                    <div className='card-img'>
                        {/* <img src='' alt='picture'></img> */}
                    </div>
                    <div className='card-heading'>
                        <h3>Saman Seher</h3>
                        <p>Frontend developer</p>
                    </div>
                    <div className='card-overlay'>
                        <MdOutlineEdit className='overlay-icon edit' />
                        <RiDeleteBinLine className='overlay-icon delete' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee
