import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]); // ✅ added dependency array to avoid infinite calls

  return (
    <div className='d-flex vw-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Name: </strong>{data.name}
        </div>
        <div className='mb-2'>
          <strong>Email: </strong>{data.email}
        </div>
        <div className='mb-3'>
          <strong>Phone: </strong>{data.phone}
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
      </div>
    </div>
  );
}

export default Read;
