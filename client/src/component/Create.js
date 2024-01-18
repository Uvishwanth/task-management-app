import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [task, setTask] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const navigate = useNavigate();

    const containerStyle = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #FF7676 0%, #A74CF2 50%, #FF7676 100%)',
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formatDeadline=format(deadline,"yyyy-MM-dd HH:mm:ss")
        const data = { task ,formatDeadline };
        axios.post('http://localhost:5050/task', data)
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={containerStyle}>
            <div className="card p-5">
                <h2 className="mb-4">What Are You Doing Today?</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="taskTextarea" className="form-label">Give Me a Task</label>
                        <textarea
                            className="form-control"
                            id="taskTextarea"
                            rows="8"
                            style={{ width: '500px', height: '50px' }}
                            value={task}
                            onChange={(e) => { setTask(e.target.value) }}
                            placeholder="Describe your task here..."
                            required
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="deadlinePicker" className="form-label">Deadline</label>
                        <br />
                        <DatePicker
                            id="deadlinePicker"
                            selected={deadline}
                            onChange={(date) => setDeadline(date)}
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
