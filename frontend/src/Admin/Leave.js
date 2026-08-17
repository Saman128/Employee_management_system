import React from 'react'
import "./leave.css";

const Leave = () => {
    return (
        <div>
            <div className='leave-heading'>
                <h1>Leave Management</h1>
                <p>Manage leave applications</p>
            </div>
            <div className='leave-data'>
                <table>
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Type</th>
                            <th>Dates</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Ali</td>
                            <td>ali@gmail.com</td>
                            <td>Developer</td>
                            <td>Developer</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Leave
