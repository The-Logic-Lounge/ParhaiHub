import React, { useState } from 'react'
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Radiobtn from '../Components/RadioBtn/Radiobtn';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import './Forgetpassword.css';

const Forgetpassword = () => {
  const [userType, setUserType] = useState('');
  const [data, setData] = useState({ email: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!data.email) {
      toast.error('Email is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      toast.error('Please provide a valid email');
      return;
    }
    if (!userType) {
      toast.error('Please select Student or Teacher');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4400/api/${userType}/forgetpassword`, {
        Email: data.email
      });
      console.log(response.data);
      toast.success('Email sent successfully');
    } catch (error) {

      toast.error(error.response?.data?.message || 'An error occurred while sending the email');
    }
  };

  console.log(userType);

  return (
    <section className='forgot-password-page h-[100vh] flex items-center justify-center'>
      <form noValidate className='forgot-password-form w-96 p-10 flex flex-col justify-center gap-4 rounded-lg' onSubmit={onFormSubmit}>
        <h1 className='text-2xl font-bold'>Forgot Your Password?</h1>
        <p className='text-lg'>Enter your email address below to reset your password.</p>
        <label htmlFor='email' className='text-2xl font-semibold rounded-md'>Email Address</label>
        <input  
          type="email"
          name="email" 
          id="email" 
          placeholder="Enter your email"
          value={data.email}
          onChange={handleChange}
          className='forgot-password-input py-3 px-4 rounded-lg'
        />
        <div className='radio-btn'>
          <Radiobtn userType={userType} setUserType={setUserType} />
        </div>
        <div className='flex flex-row items-center justify-between mt-4'>
          <button type="submit" className='forgot-password-submit py-2 px-4 font-bold rounded-lg'>Send</button>
          <p className='forgot-password-back text-xl flex items-center' onClick={() => navigate(-1)}>
            <IoArrowBack className='text-xl text-semibold' /> Go back
          </p>
        </div>
      </form>
    </section>
  );
};

export default Forgetpassword;
