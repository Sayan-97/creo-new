import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <form action="" className='w-[30%] space-y-16'>
            <h4 className='text-center'>Log In to <span className='textGrad'>Creo Network</span></h4>
            <div className='grid gap-4 w-[70%] mx-auto'>
                <div className='grid gap-1'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id='username' placeholder='Enter your username'/>
                </div>
                <div className='grid gap-1'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='Enter your password' />
                    <span className='text-base'>Forgot Password?</span>
                </div>
            </div>
            <div className='grid justify-items-center gap-8'>
                <Link to='/'><button type='submit' className='primary w-32 h-11'>Log In</button></Link>
                <Link to='/signup'><p>Want to become a part of Creo Network?</p></Link>
            </div>
        </form>
    )
}

export default SignIn