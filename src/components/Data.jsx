
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://registrationportal-hrxz.onrender.com/form/data/');
                setData(response.data);
            } 
            catch (error) {
                console.error("Error fetching the data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='TableContainer'>
            <h2 className='TableHeading'>Registered User Data</h2>
            <table  className="table table-dark table-hover">
                <thead>
                    <tr className="table-success">
                        <th>S no.</th>
                        <th>Name</th>
                        <th>Student Number</th>
                        <th>Branch</th>
                        <th>Section</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>HackerRank Username</th>
                        <th>Residence</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.student_no}</td>
                            <td>{item.branch}</td>
                            <td>{item.section}</td>
                            <td>{item.email}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.hackerRank_username}</td>
                            <td>{item.residence}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Data;
