import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const response = await getEmployees();
        setEmployees(response.data);
    };

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div>
            <h2>Employee List</h2>
            <button onClick={() => navigate('/add-employee')}>Add Employee</button>
            <ul>
                {employees.map((emp) => (
                    <li key={emp._id}>
                        {emp.name} - {emp.position}
                        <button onClick={() => navigate(`/edit-employee/${emp._id}`)}>
                            Edit
                        </button>
                        <button onClick={() => handleDelete(emp._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EmployeeList;
