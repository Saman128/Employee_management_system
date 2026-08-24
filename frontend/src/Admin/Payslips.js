import React from 'react'
import { FiPlus } from "react-icons/fi";
import "./Employee.css";
import "./leave.css";
import { PiDownloadSimpleThin } from "react-icons/pi";
const Payslips = ({ slipOpenPopup }) => {
    return (
        <div>
            <div className='heading'>
                <div className='heading-emp'>
                    <h1>Payslips</h1>
                    <p>Generate and manage employee payslips</p>
                </div>
                <div className='add-emp'>
                    <button onClick={slipOpenPopup} className='emp-btn' ><FiPlus className='f-icons' />Generate Payslip</button>
                </div>
            </div>
            <div className='leave-data'>
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Period</th>
                            <th>Basic Salary</th>
                            <th>Net Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>saman</td>
                            <td>november 2026</td>
                            <td>$1,000</td>
                            <td>$1,000</td>
                            <td><button className='download'><PiDownloadSimpleThin className='download-icon' /> Download</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Payslips
