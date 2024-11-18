import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = async()=>{
    const result = await axios.get("http://localhost:8090/api/alluser")
    setUsers(result.data);
    
  };

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
                  <button type="button" className="btn btn-success mx-2">View</button>
                  <button type="button" className="btn btn-secondary mx-2">Edit</button>
                  <button type="button" className="btn btn-danger mx-2">Delete</button>
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
