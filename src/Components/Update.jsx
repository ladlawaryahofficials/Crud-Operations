import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';



function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(res =>
        setValues(res.data)
      )
      .catch(err => console.log(err));
  },[id]);
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, values)
      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='d-flex vw-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name'
              value={values.name} onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email'
              value={values.email} onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Phone'
              value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button className='btn btn-success me-1'>Submit</button>
          <Link to="/" className='btn btn-info '>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update
