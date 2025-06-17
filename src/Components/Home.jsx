import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/getUsers')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (_id) => {
    const confirm = window.confirm("would you like to delete")
    if (confirm) {
      axios.delete(`http://localhost:3001/deleteUser/${_id}`)
        .then(res => {
          console.log('Deleted User:', res.data);
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }
  const navigate = useNavigate();
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light h-100 vw-100'>
      <h1>List of Users</h1>
      {/* <div className='w-75 rounded bg-white border shadow p-4'>
        <ul className="list-group">
          {data.map((user, index) => (
            <li key={index} className="list-group-item">
              {user.name}
            </li>
          ))}
        </ul>
      </div> */}
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to="/Create" className='btn btn-outline-primary'>Add +</Link></div>
        <table className='table table-striped'>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>User Name</th> */}
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((d, i) => (
                <tr key={i}>
                  {/* <td>{d.id}</td> */}
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.phone}</td>
                  {/* <td>{d.username}</td> */}
                  <td>
                    <Link to={`/read/${d._id}`} className='btn btn-sn btn-info me-2'>Read</Link>
                    <Link to={`/update/${d._id}`} className='btn btn-sn btn-primary me-2'>Edit</Link>
                    <button onClick={() => handleDelete(d._id)} className='btn btn-sn btn-danger'>Delete</button>

                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );

}

export default Home;

