
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns'

const Edit = () => {
  const { id } = useParams();
  const [taskData, setTaskData] = useState('');
  const [deadline, setDeadline] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:5050/view/${id}`)
      .then((response) => {
        console.log("data fetching ", response.data);
        setTaskData(response.data[0].task);
      })
      .catch((err) => {
        console.log("error in fetching user ", err);
      });
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formatDeadline = format(deadline, "yyyy-MM-dd HH:mm:ss")

    const data = { formatDeadline, taskData }
    axios.post(`http://localhost:5050/edit/${id}`, data)
      .then((res) => {
        console.log("successfully posted " + res.data);
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #FF7676 0%, #A74CF2 50%, #FF7676 100%)',
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100" style={containerStyle}>
      <div className="card p-5">
        <h2 className="mb-4">Have you changed your decision?</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="taskTextarea" className="form-label">
              Ok! Then what's on your mind
            </label>
            <textarea
              className="form-control"
              id="taskTextarea"
              rows="8"
              style={{ width: '500px', height: '100px' }}
              value={taskData}
              onChange={(e) => {
                setTaskData(e.target.value);
              }}
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
          <div className='d-flex justify-content-between pt-5'>
            <button type="submit" className="btn btn-primary"> Submit </button>
            <Link to={'/'} className="btn"><i className="fa-solid fa-house"></i> Back</Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Edit;




