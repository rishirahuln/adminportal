import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
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
    validate : (values) => {
      let error={};
      
      if(!values.name){
        error.name="Please enter a name";
      }
      if(values.name && (values.name.length<=2 || values.name.length>15)){
        error.name="Name should be between 3 to 15 characters";
      }

      if(!values.email){
        error.email="Please enter an email";
      }
      if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email="Invalid email address";
      }

      if(!values.country){
        error.country="Please select a country";
      }

      if(!values.state){
        error.state="Please select a state";
      }

      if(!values.city){
        error.city="Please select a city";
      }

      if(!values.phone){
        error.phone="Please enter a phone number";
      }
      if(values.phone && values.phone.toString().length!==10){
        error.phone="Invalid phone number";
      }

      if(!values.dob){
        error.dob="Please enter your Date of Birth";
      }
      // console.log(values.dob);
      // console.log(values.dob.split("-")[0]);
      // console.log(new Date().getFullYear());
      let age= new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
      // console.log(age);
      if(values.dob && age<18){
        error.dob="You must be above 18";
      }

      if(!values.gender){
        error.gender="Please select a gender";
      }

      return error;
    },
    onSubmit: async (values) => {
      try {
        // console.log(values)
        const newUserData= await axios.post("https://636a0001b10125b78fcda721.mockapi.io/api/users",values);
        alert("User created successfully");
        navigate("/users");

      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <>
      <h1 className="ml-5">Create User</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>Name</label>
                <input type={"text"} 
                name="name" placeholder="John Doe" onChange={formik.handleChange} value={formik.values.name} 
                onBlur={formik.handleBlur}
                className={`form-control 
                ${formik.touched.name && formik.errors.name ? "error-box" : ""} 
                ${formik.touched.name && !formik.errors.name ? "success-box" : ""}`} />
                {formik.touched.name && formik.errors.name ? <span style={{color:"red"}}>{formik.errors.name}</span> : null}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label>Email</label>
                <input type={"email"} 
                name="email" placeholder="johndoe@gmail.com" onChange={formik.handleChange} value={formik.values.email} 
                onBlur={formik.handleBlur}
                className={`form-control 
                ${formik.touched.email && formik.errors.email ? "error-box" : ""} 
                ${formik.touched.email && !formik.errors.email ? "success-box" : ""}`} />
                {formik.touched.email && formik.errors.email ? <span style={{color:"red"}}>{formik.errors.email}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Country</label>
                <select name="country" onChange={formik.handleChange} value={formik.values.country} 
                onBlur={formik.handleBlur} 
                className={`form-control 
                ${formik.touched.country && formik.errors.country ? "error-box" : ""} 
                ${formik.touched.country && !formik.errors.country ? "success-box" : ""}`}>
                  <option value="">---Select Country---</option>
                  <option>India</option>
                  <option>Germany</option>
                  <option>Canada</option>
                </select>
                {formik.touched.country && formik.errors.country ? <span style={{color:"red"}}>{formik.errors.country}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>State</label>
                <select name="state" onChange={formik.handleChange} value={formik.values.state} 
                onBlur={formik.handleBlur} 
                className={`form-control 
                ${formik.touched.state && formik.errors.state ? "error-box" : ""} 
                ${formik.touched.state && !formik.errors.state ? "success-box" : ""}`}>
                  <option value="">---Select State---</option>
                  <option>Tamil Nadu</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Telangana</option>
                </select>
                {formik.touched.state && formik.errors.state ? <span style={{color:"red"}}>{formik.errors.state}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>City</label>
                <select name="city" onChange={formik.handleChange} value={formik.values.city} 
                onBlur={formik.handleBlur} 
                className={`form-control 
                ${formik.touched.city && formik.errors.city ? "error-box" : ""} 
                ${formik.touched.city && !formik.errors.city ? "success-box" : ""}`}>
                  <option value="">---Select City---</option>
                  <option>Chennai</option>
                  <option>Mumbai</option>
                  <option>Bengaluru</option>
                  <option>Kochin</option>
                  <option>Hyderabad</option>
                </select>
                {formik.touched.city && formik.errors.city ? <span style={{color:"red"}}>{formik.errors.city}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Phone Number</label>
                <input type={"number"} 
                name="phone" placeholder="Phone" onChange={formik.handleChange} value={formik.values.phone} 
                onBlur={formik.handleBlur}
                className={`form-control 
                ${formik.touched.phone && formik.errors.phone ? "error-box" : ""} 
                ${formik.touched.phone && !formik.errors.phone ? "success-box" : ""}`} />
                {formik.touched.phone && formik.errors.phone ? <span style={{color:"red"}}>{formik.errors.phone}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Date of Birth</label>
                <input type={"date"} 
                name="dob" onChange={formik.handleChange} value={formik.values.dob} 
                onBlur={formik.handleBlur}
                min={"1960-01-01"}
                max={"2010-12-31"}
                className={`form-control 
                ${formik.touched.dob && formik.errors.dob ? "error-box" : ""} 
                ${formik.touched.dob && !formik.errors.dob ? "success-box" : ""}`} />
                {formik.touched.dob && formik.errors.dob ? <span style={{color:"red"}}>{formik.errors.dob}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" onChange={formik.handleChange} value={formik.values.gender} 
                onBlur={formik.handleBlur} 
                className={`form-control 
                ${formik.touched.gender && formik.errors.gender ? "error-box" : ""} 
                ${formik.touched.gender && !formik.errors.gender ? "success-box" : ""}`}>
                  <option>---Select Gender---</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
                {formik.touched.gender && formik.errors.gender ? <span style={{color:"red"}}>{formik.errors.gender}</span> : null}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <input type={"submit"} className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateUser;
