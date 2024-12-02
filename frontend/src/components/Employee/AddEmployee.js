import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../../services/api';

function AddEmployee() {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEmployee({ name, position });
        navigate('/employees');
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddEmployee;
