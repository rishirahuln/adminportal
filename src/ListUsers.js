import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Spinner.css";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData()
  },[]);

  let fetchData=async()=>{
    try {
      setLoading(true)
      const users= await axios.get("https://636a0001b10125b78fcda721.mockapi.io/api/users")
      // console.log(users)
      setUsers(users.data)
      setLoading(false)
    } catch (error) {
      alert("Error")
    }
  }

  let deleteUser=async(userId)=>{
    try {
      const confirmDelete=window.confirm("Are you sure, do you want to delete?")
      if(confirmDelete){
        const deleteUser = await axios.delete(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${userId}`);
        alert("User deleted successfully");
        fetchData();
      }
    } catch (error) {
      alert("Error in deleting")
    }
  }

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800 flex-grow-1">Users</h1>
        <Link
          to={"/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          Create User
        </Link>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center spinner">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Users List</h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Date of Birth</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {users.map((user, index) => {
                    // key={index}
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.country}</td>
                        <td>{user.state}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.dob}</td>
                        <td>{user.gender}</td>
                        <Link
                          to={`/profile/${user.id}`}
                          className="btn btn-warning btn-sm mx-2 mt-1"
                        >
                          View
                        </Link>
                        <Link
                          to={`/edit-profile/${user.id}`}
                          className="btn btn-primary btn-sm mr-1 mt-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteUser(user.id)}
                          className="btn btn-danger btn-sm mx-2 mt-1"
                        >
                          Delete
                        </button>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListUsers;
