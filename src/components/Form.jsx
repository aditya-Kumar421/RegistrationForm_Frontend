import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    student_no: "",
    branch: "",
    section: "",
    email: "",
    phone_number: "",
    residence:"",
    hackerRank_username: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setCaptchaError("Please complete the CAPTCHA.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/form/register/`,
        {
          ...formData,
          captcha: captchaValue,
        }
      );
      toast.success(response.data.message || "Form submitted successfully!");

      setFormData({
        name: "",
        student_no: "",
        branch: "",
        section: "",
        email: "",
        phone_number: "",
        hackerRank_username: "",
        residence:"",
      });

      setCaptchaValue(null);
      setCaptchaError("");

      setTimeout(() => {
        navigate("/success");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.error || "Registration failed!");
    }
  };

  return (
    <>
      <h1 className="header">Registration Form</h1>
      <form onSubmit={handleSubmit} className="container">
        <div  className="mb-3">
          <label className="form-label labelText">Name:</label>
          <input
            type="text"
            className="form-control inputField" 
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Student Number:</label>
          <input
            type="text"
            className="form-control inputField" 
            name="student_no"
            inputMode="numeric"
            value={formData.student_no}
            onChange={handleChange}
          />
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Branch:</label>
          <select name="branch"  className="form-control inputField"  value={formData.branch} onChange={handleChange}>
            <option value="">--choose branch--</option>
            <option value="CSE">CSE</option>
            <option value="CS">CS</option>
            <option value="CSE(AIML)">CSE(AIML)</option>
            <option value="CSE(DS)">CSE(DS)</option>
            <option value="CSE(Hindi)">CSE(Hindi)</option>
            <option value="AIML">AIML</option>
            <option value="IT">IT</option>
            <option value="CSIT">CSIT</option>
            <option value="ECE">ECE</option>
            <option value="EN">EN</option>
            <option value="ME">ME</option>
            <option value="CIVIL">CIVIL</option>
          </select>
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Section:</label>
          <select
            name="section"
            className="form-control inputField" 
            value={formData.section}
            onChange={handleChange}
          >
            <option value="">--choose section--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Email:</label>
          <input
            type="email"
            className="form-control inputField" 
            placeholder="example@akgec.ac.in"
            name="email"
            inputMode="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Phone Number:</label>
          <input
            type="text"
            className="form-control inputField" 
            name="phone_number"
            inputMode="numeric"
            value={formData.phone_number}
            onChange={handleChange}
          />
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Residence:</label>
          <select
            name="residence"
            className="form-control inputField" 
            value={formData.residence}
            onChange={handleChange}
          >
            <option value="">--choose residence--</option>
            <option value="1">Hostler</option>
            <option value="2">Day Scholar</option>
          </select>
        </div >
        <div  className="mb-3">
          <label className="form-label labelText">Hacker Rank Username:</label>
          <input
             type="text"
            name="hackerRank_username"
            className="form-control inputField" 
            value={formData.hackerRank_username}
            onChange={handleChange}
          />
           
        </div >

        <div>
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(value) => setCaptchaValue(value)}
          />
          {captchaError && <p style={{ color: "red" }}>{captchaError}</p>}
        </div >

        <button type="submit"  className="btn btn-primary submit-btn">Register</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
