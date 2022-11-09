import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [user,setUser] = useState([]);

  useEffect(() => {
    // console.log(searchParams.get("status"));
    viewProfile();
  }, []);

  let viewProfile = async () => {
    try {
      const user = await axios.get(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`);
      // console.log(user.data);
      setUser(user.data)
    } catch (error) {
      alert("Error in getting user data");
    }
  }

  return (
    <>
      <h1 className="ml-5">Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">ID: {params.id}</div>
          <div className="col-lg-12">
            {/* query params: {searchParams.get("status")} */}
          </div>
          <div className="col-lg-12">Name: {user.name}</div>
          <div className="col-lg-12">Email: {user.email}</div>
          <div className="col-lg-12">Country: {user.country}</div>
          <div className="col-lg-12">State: {user.state}</div>
          <div className="col-lg-12">City: {user.city}</div>
          <div className="col-lg-12">Phone: {user.phone}</div>
          <div className="col-lg-12">DOB: {user.dob}</div>
          <div className="col-lg-12">Gender: {user.gender}</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
