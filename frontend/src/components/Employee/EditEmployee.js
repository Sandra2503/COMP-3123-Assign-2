import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editEmployee, getEmployees } from '../../services/api';

function EditEmployee() {
    const [employee, setEmployee] = useState({ name: '', position: '' });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEmployee = async () => {
            const response = await getEmployees();
            const emp = response.data.find((e) => e._id === id);
            setEmployee(emp);
        };
        fetchEmployee();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editEmployee(id, employee);
        navigate('/employees');
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={employee.name}
                    onChange={(e) =>
                        setEmployee({ ...employee, name: e.target.value })
                    }
                />
                <input
                    type="text"
                    value={employee.position}
                    onChange={(e) =>
                        setEmployee({ ...employee, position: e.target.value })
                    }
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditEmployee;
