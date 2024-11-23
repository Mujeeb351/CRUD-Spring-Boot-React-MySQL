import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Home() {

  const [users, setUsers] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = async()=>{
    const result = await axios.get("http://localhost:8090/api/alluser")
    setUsers(result.data);
    
  };

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8090/api/user/${id}`)
    loadUser();
  }

  return (
    <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

            {
              users.map((user, index) => {
                return(

                  <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/api/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link type="button" className="btn btn-secondary mx-2"
                  to={`/api/user/${user.id}`}>Edit</Link>
                  <button type="button" className="btn btn-danger mx-2"
                  onClick={()=>{deleteUser(user.id)}}>
                    Delete</button>
                </td>
                
              </tr>

                )
                


              })

            }
              
                
                
            </tbody>
            </table>

        </div>
    </div>
  )
}
