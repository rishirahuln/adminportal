import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();
  const params = useParams();
  // const [name,setName] = useState("");
  // const [email,setEmail] = useState("");
  // const [country,setCountry] = useState("");
  // const [state,setState] = useState("");
  // const [city,setCity] = useState("");
  // const [phone,setPhone] = useState("");
  // const [dob,setdob] = useState("");
  // const [gender,setGender] = useState("");
  const [user, setUser] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phone: "",
      dob: "",
      gender: "",
    },
    onSubmit: async (values) => {
      try {
        const updatedUser = await axios.put(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`, values);
        if (updatedUser) {
          alert("User details updated successfully");
          navigate(-1);
        }
      } catch (error) {
        alert("Error in updating");
      }
    }
  });

  let getUserData = async () => {
    try {
      const user = await axios.get(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`);
      // console.log(user.data);
      // setName(user.data.name);
      // setEmail(user.data.email);
      // setCountry(user.data.country);
      // setState(user.data.state);
      // setCity(user.data.city);
      // setPhone(user.data.phone);
      // setdob(user.data.dob);
      // setGender(user.data.gender);
      const userData = user.data;
      setUser({...userData});
      formik.setValues({
        name: userData.name,
        email: userData.email,
        country: userData.country,
        state: userData.state,
        city: userData.city,
        phone: userData.phone,
        dob: userData.dob,
        gender: userData.gender,
      });
    } catch (error) {
        alert("Error in fetching user data");
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  // let updateUser = async () => {
  //   // console.log(name,email,country,state,city,phone,dob,gender);
  //   try {
  //     const updatedUser = await axios.put(`https://636a0001b10125b78fcda721.mockapi.io/api/users/${params.id}`);
  //   } catch (error) {
  //     alert("Error in updating");
  //   }
  // }
  
  return (
    <>
      <h1 className="ml-5">Edit Profile</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">ID: {params.id}</div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Name</label>
                <input type={"text"} className="form-control" name="name" value={formik.values.name} onChange={formik.handleChange} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Email</label>
                <input type={"email"} className="form-control" name="email" value={formik.values.email} onChange={formik.handleChange} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Country</label>
                <select className="form-control" name="country" value={formik.values.country} onChange={formik.handleChange}>
                  <option>India</option>
                  <option>USA</option>
                  <option>China</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>State</label>
                <select className="form-control" name="state" value={formik.values.state} onChange={formik.handleChange}>
                  <option>Tamil Nadu</option>
                  <option>Karnataka</option>
                  <option>Maharashtra</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>City</label>
                <select className="form-control" name="city" value={formik.values.city} onChange={formik.handleChange}>
                  <option>Chennai</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Phone Number</label>
                <input type={"text"} className="form-control" name="phone" value={formik.values.phone} onChange={formik.handleChange} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Date of Birth</label>
                <input type={"date"} className="form-control" name="dob" value={formik.values.dob} onChange={formik.handleChange} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control" name="gender" value={formik.values.gender} onChange={formik.handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default EditProfile;