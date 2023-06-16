import React, { useState, useEffect } from 'react';
import { authActions, toggleUser } from '../../../../store/user/userSlice';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import avatar from '../../../../assets/images/forms/profile1.png'
import { HiPlus } from 'react-icons/hi'
import { useDispatch } from 'react-redux';

const AsClient = () => {

    const history = useNavigate();

    const dispatch = useDispatch()
    

    const countries = ['USA', 'UK', 'Australia']
    const cities = ['ABC', 'ABC', 'ABC']

    // ======================================= //
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        companyName: '',
    });

    const handleChange = (e) => {
        setUser((prevUser) => ({
            ...prevUser,
            [e.target.name]: e.target.value,
        }));
    };

    

    const sendRequest = async () => {
        const response = await axios.post('http://localhost:8080/api/client/register', {
            name: user.name,
            email: user.email,
            password: user.password,
            companyName: user.companyName,
        }).catch(err => console.log(err))
        const data = await response.data
        return data
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => dispatch(authActions.toggleUser('client'))).then(() => history('/client/dashboard'));
    };
    // ======================================= //

    const handleSignUpAsClient = () => {
        dispatch(toggleUser('client'))
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid justify-items-center'>
                <h4>
                    Sign Up to <span className='textGrad'>Hire Talent</span>
                </h4>
                <p>To keep things safe & simple we need your personal information</p>
            </div>

            {/* Avatar */}
            <div className='grid justify-items-center space-y-2'>
                <img src={avatar} alt="img" />
                <button className='primary flex items-center px-4 py-2'><HiPlus className='text-xl' />Upload Photo</button>
            </div>

            {/* Username */}
            <div className='grid gap-1'>
                <label htmlFor='username'>Username</label>
                <input
                    value={user.name}
                    type='text'
                    id='username'
                    name='name'
                    placeholder='Enter your username'
                    onChange={handleChange}
                />
            </div>

            {/* Email */}
            <div className='grid gap-1'>
                <label htmlFor='email'>Email</label>
                <input
                    value={user.email}
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    onChange={handleChange}
                />
            </div>

            {/* Password */}
            <div className='grid gap-1'>
                <label htmlFor='password'>Password</label>
                <input
                    value={user.password}
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your Password'
                    onChange={handleChange}
                />
            </div>

            

            <div className='grid md:grid-cols-2 gap-2'>

                {/* Company Name */}
                <div className='grid gap-1'>
                    <label htmlFor='company'>Company Name</label>
                    <input
                        value={user.companyName}
                        type='text'
                        id='company'
                        name='companyName'
                        placeholder='Enter your company name'
                        onChange={handleChange}
                    />
                </div>

                {/* DOB */}
                <div className='grid gap-1'>
                    <label htmlFor="DOB">DOB</label>
                    <input type="date" id='DOB' placeholder='Enter your DOB' />
                </div>

            </div>

            <div className='grid md:grid-cols-2 gap-2'>

                {/* Country */}
                <div className='grid gap-1'>
                    <label htmlFor="country">Country</label>
                    <select name="country" id="country">
                        <option value="" disabled selected hidden>Select your country</option>
                        {countries.map((item, index) => {
                            return (
                                <option key={index} value="">{item}</option>
                            )
                        })}
                    </select>
                </div>

                {/* City */}
                <div className='grid gap-1'>
                    <label htmlFor="city">City</label>
                    <select name="city" id="city">
                        <option value="" disabled selected hidden>Select your city</option>
                        {cities.map((item, index) => {
                            return (
                                <option key={index} value="">{item}</option>
                            )
                        })}
                    </select>
                </div>

            </div>

            {/* Checkbox's */}
            <div className='grid'>
                <div className='space-x-2 flex items-start'>
                    <input type="checkbox" id='mail' className='h-6' />
                    <label htmlFor="mail" className='text-base'>Send me emails and announcements made on Creo Network</label>
                </div>

                <div className='space-x-2 flex items-start'>
                    <input type="checkbox" id='tnc' className='h-6' />
                    <label htmlFor="tnc" className='text-base'>Yes, I understand and agree to the Creo Network Terms of Service, including the User Agreement and Privacy Policy.</label>
                </div>
            </div>

            {/* Submit */}
            <div className='flex justify-center'>
                <button type='submit' className='primary px-5 py-2'>
                    Sign Up
                </button>
            </div>

            <Link to='/client/dashboard' onClick={handleSignUpAsClient}>Click Me</Link>
        </form>
    );
};

export default AsClient;