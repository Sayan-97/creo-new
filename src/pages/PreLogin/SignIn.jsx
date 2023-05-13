import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const [ user, setUser ] = useState({
        name: '',
        password: ''
    })

    const handleChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, password } = user;

        try {
            const response = await axios.post('http://localhost:8080/api/client/login', {
                name,
                password
            });
            
            const data = response.data;
            console.log(data);

            if (response.status === 200) {
                console.log('Login Success')
            } else {
                console.log('Error:', data.error);
            }
        } catch (error) {
            console.log('Error:', error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className='lg:w-[30%] space-y-16'>
            <h4 className='text-center'>Log In to <span className='textGrad'>Creo Network</span></h4>
            <div className='grid gap-4 w-[70%] mx-auto'>
                <div className='grid gap-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' name='name' value={user.name} onChange={handleChange} placeholder='Enter your username'/>
                </div>
                <div className='grid gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter your password' />
                    <span className='text-base'>Forgot Password?</span>
                </div>
            </div>
            <div className='grid justify-items-center gap-8'>
                <button type='submit' className='primary w-32 h-11'>Log In</button>
                <Link to='/signup'><p>Want to become a part of Creo Network?</p></Link>
            </div>
        </form>
    )
}

export default SignIn