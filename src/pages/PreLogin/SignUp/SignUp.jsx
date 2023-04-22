import React from 'react'

import { Link } from 'react-router-dom'

import Freelancer from '../../../assets/images/pages/metachar.png'
import Client from '../../../assets/images/pages/metachar2.png'

const SignUp = () => {
    return (
        <div className='container py-10 grid justify-items-center gap-10'>
            <h4>Join as a <span className='textGrad'>Client</span> or a <span className='textGrad'>Freelancer</span></h4>

            <div className='grid grid-cols-2 gap-10'>
                <Link to='/signup/freelancer'>
                    <div className='bg-accent rounded-card px-5 py-8 grid justify-items-center gap-4 cursor-pointer hover:transform hover:scale-[102%]'>
                        <img src={Freelancer} alt="img" className='w-72' />
                        <h5>I am a Gamelancer looking for Gaming work</h5>
                    </div>
                </Link>

                <Link to='/signup/client'>
                    <div className='bg-accent rounded-card px-5 py-8 grid justify-items-center gap-4 cursor-pointer hover:transform hover:scale-[102%]'>
                        <img src={Client} alt="img" className='w-72' />
                        <h5>I’m a Client looking to Hire Talents</h5>
                    </div>
                </Link>
            </div>

            <p>Create Account</p>

            <p>Already have a account? <Link to='/login'>Log In</Link></p>
        </div>
    )
}

export default SignUp