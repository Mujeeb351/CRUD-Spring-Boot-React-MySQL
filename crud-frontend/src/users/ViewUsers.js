import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewUsers() {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const {id} = useParams();

  const viewUser = async()=>{
    const view = await axios.get(`http://localhost:8090/api/user/${id}`);
    setUser(view.data)

  }

  useEffect(()=>{
    viewUser()
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View User</h2>
          <div className='card'>
          <div className='card-header'>
            User Details with id: {user.id}
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                  <b>Name:</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>UserName:</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>

            </ul>

          </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
