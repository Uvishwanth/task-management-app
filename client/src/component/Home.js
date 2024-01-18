

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {


    

    // feteching the data from database

    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5050/")
            .then(response => { console.log(response.data); setdata(response.data) })
            .catch(error => console.log('You got an error while fetching data ', error))
    }, [])

    //deleting task

    const handleDelete = (task) => {
        axios.delete(`http://localhost:5050/delete/${task}`)
            .then(
                res => {
                    window.location.reload();
                }
            )
            .catch(err => {
                console.log(err);
            });
    }
    

    // deletting the data from database

    const render = data.map((item, index) => {
        // const deadline = new Date(item.deadline);
        // console.log(deadline)
        // const newDate=new Date()
        // console.log(newDate)
        // const isPastDeadline = deadline > newDate ;
    
        // const rowClass = isPastDeadline ? 'text-danger' : 'text-success';

        // console.log(rowClass)
    
        return (
            <tr key={index}>
                <td>{new Date(item.created_on).toLocaleString()}</td>
                <td>{item.task}</td>
                <td>
                    <Link to={`/view/${item.id}`} className='bg-transparent text-dark border-0 p-2 me-2'>
                        <i className="fa-regular fa-eye"></i>
                    </Link>
                    <Link to={`/edit/${item.id}`} className='bg-transparent text-dark border-0 p-2 me-2'>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button onClick={() => { handleDelete(item.task) }} className='bg-transparent border-0 p-2 me-2'>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        );
    });
    

    return (
        <div className='d-flex vh-100 content-justify-center align-items-start bg-dark py-5'>
            <div className='container py-5' >
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success mb-5 ps-3 pe-3'>Add new <i class="fa-solid fa-plus ms-2"></i></Link>
                </div>

                <table className='table table-info table-striped table-hover'>
                    <thead>
                        <tr>
                            <th scope='row' colSpan={4} style={{ textAlign: 'center' }}> TASK MANAGEMENT APP</th>
                        </tr>

                        <tr>
                            <th scope='col'>CREATED ON</th>
                            <th scope='col'>TASK</th>
                            <th scope='col'>ACTION</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            render
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Home;
