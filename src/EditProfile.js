import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProfile() {
  const params = useParams();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [phone,setPhone] = useState("");
  const [dob,setdob] = useState("");
  const [gender,setGender] = useState("");

  useEffect(() => {
    getUserData();
  }, []);

  let getUserData = async () => {
    try {
      const user = await axios.get(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`);
      // console.log(user.data);
      setName(user.data.name);
      setEmail(user.data.email);
      setCountry(user.data.country);
      setState(user.data.state);
      setCity(user.data.city);
      setPhone(user.data.phone);
      setdob(user.data.dob);
      setGender(user.data.gender);
    } catch (error) {
        alert("Error in fetching user data");
    }
  }

  let updateUser = async () => {
    // console.log(name,email,country,state,city,phone,dob,gender);
    try {
      const updatedUser = await axios.put(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`);
    } catch (error) {
      alert("Error in updating");
    }
  }
  
  return (
    <>
      <h1 className="ml-5">Edit Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">ID: {params.id}</div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input type={"text"} className="form-control" value={`${name}`} onChange={(e)=>{setName(e.target.value)}} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input type={"email"} className="form-control" value={`${email}`} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select className="form-control" onChange={(e)=>{setCountry(e.target.value)}}>
                <option>{country}</option>
                <option>India</option>
                <option>USA</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select className="form-control" onChange={(e)=>{setState(e.target.value)}}>
                <option>{state}</option>
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select className="form-control" onChange={(e)=>{setCity(e.target.value)}}>
                <option>{city}</option>
                <option>Chennai</option>
                <option>Bengaluru</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone Number</label>
              <input type={"text"} className="form-control" value={`${phone}`} onChange={(e)=>{setPhone(e.target.value)}} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input type={"date"} className="form-control" value={`${dob}`} onChange={(e)=>{setdob(e.target.value)}} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control" onChange={(e)=>{setGender(e.target.value)}}>
                <option>{gender}</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <button onClick={updateUser} className="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;