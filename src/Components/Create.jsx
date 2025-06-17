import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';


function Create() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post('http://localhost:3001/createUser', values) // ✅

      .then(res => {
        console.log(res);
        navigate('/')
      })
      .catch(err => console.log(err));
  }
  return (
    <div className='d-flex vw-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
            <label htmlFor='ID'>ID:</label>
            <input type='text' name='ID' className='form-control' placeholder='Enter ID' required
              onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter Name' required
              onChange={e => setValues({ ...values, name: e.target.value })} />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter Email' required
              onChange={e => setValues({ ...values, email: e.target.value })} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Phone:</label>
            <input type='text' name='phone' className='form-control' placeholder='Enter Phone' required
              onChange={e => setValues({ ...values, phone: e.target.value })} />
          </div>
          <button className='btn btn-success me-1'>Submit</button>
          <Link to="/" className='btn btn-info '>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create
