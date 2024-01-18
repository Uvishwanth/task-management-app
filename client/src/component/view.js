
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const View = () => {
    const { id } = useParams();
    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5050/view/${id}`)
            .then(response => {
                console.log("data fetching ", JSON.stringify(response.data));
                setValue(response.data);
            })
            .catch(err => {
                console.log("error in fetching user ", err);
            });
    }, [id]);

    const render = value.map((item, index) => (
        <div className="container-xl d-flex justify-content-center align-items-center" key={index} >
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="2" className="text-center">Today's Task</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Created On:</td>
                                    <td>{new Date(item.created_on).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td>Task:</td>
                                    <td>{item.task}</td>
                                </tr>
                                <tr>
                                    <td>Deadline:</td>
                                    <td>{new Date(item.deadline).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td colSpan="2" className="text-center">
                                        <div className="d-flex justify-content-between">
                                            <Link to={'/'} className="btn"><i className="fa-solid fa-house"></i> Back</Link>
                                            <Link to={`/edit/${item.task}`} className="btn"><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center styled">
            {render}
        </div>
    );
}

export default View;
