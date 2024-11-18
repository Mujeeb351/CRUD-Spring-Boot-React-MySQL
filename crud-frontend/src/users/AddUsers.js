import React from 'react'
import { Link } from 'react-router-dom'

export default function AddUsers() {

  const [value,setValue] = ({
    name:"",
    username:"",
    email:""
  })

  const {name,username,email} = value

  const handleChange = (e)=>{
    setValue({...value,[e.target.name]:e.target.vale})
  }




  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Registration</h2>

          <form>
            <div className="mb-3">
            <div class="input-group">
              <label htmlFor="Name" className="form-label">Name</label> 
            </div>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"   
                value={name} 
                onChange={(e)=>handleChange(e)}            
              />
            </div>
                        
            <div className="mb-3">
            <div class="input-group">
              <label htmlFor="Username" className="form-label">Username</label>
            </div>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="username"
                value={username} 
                onChange={(e)=>handleChange(e)} 
                
              />
            </div>
            <div className="mb-3">
              <div class="input-group">
              <label htmlFor="Email" className="form-label">E-mail</label>
              </div>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email} 
                onChange={(e)=>handleChange(e)} 
                
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
