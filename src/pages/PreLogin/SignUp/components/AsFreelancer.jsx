import React from 'react'

import Profile from '../../../../assets/images/svg/profile.svg'
import Book from '../../../../assets/images/svg/book.svg'
import Dollar from '../../../../assets/images/svg/dollar-circle.svg'
import Briefcase from '../../../../assets/images/svg/briefcase.svg'
import Teacher from '../../../../assets/images/svg/teacher.svg'
import Experience from '../../../../assets/images/svg/medal.svg'
import USDT from '../../../../assets/images/svg/USDT.svg'
import avatar from '../../../../assets/images/forms/profile1.png'

import { HiPlus } from 'react-icons/hi'

const AsFreelancer = () => {

    const countries = ['USA', 'UK', 'Australia']
    const cities = ['ABC', 'ABC', 'ABC']

    return (
        <form action="" className='space-y-6'>
            <div>
                <h4>Sign Up to <span className='textGrad'>Find Work</span> you love</h4>
                <p>Lets get started by adding few important details and information.</p>
            </div>

            {/* Personal Details */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent p-4 rounded-card space-y-6'>

                    <div className='flex items-end gap-2'>
                        <img src={Profile} alt="img" />
                        <h6>Personal Details</h6>
                        <span className='required'>Required</span>
                    </div>

                    {/* Avatar */}
                    <div className='grid justify-items-center space-y-2'>
                        <img src={avatar} alt="img" />
                        <button className='primary flex items-center px-4 py-2'><HiPlus className='text-xl' />Upload Photo</button>
                    </div>

                    <div className='grid gap-2'>

                        {/* Username */}
                        <div className='grid gap-1'>
                            <label htmlFor="username">Username</label>
                            <input type="text" id='username' placeholder='Enter your username' />
                        </div>

                        {/* Profile Title */}
                        <div className='grid gap-1'>
                            <label htmlFor="title">Profile Title</label>
                            <input type="text" id='title' placeholder='Enter your profile title' />
                        </div>

                        <div className='grid md:grid-cols-2'>

                            {/* Country */}
                            <div className='grid gap-1'>
                                <label htmlFor="country">Country</label>
                                <select name="country" id="country">
                                    <option value="" disabled selected hidden>Select your country</option>
                                    {countries.map((item,index) => {
                                        return (
                                            <option key={index} value="">{item}</option>
                                        )
                                    })}
                                </select>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </form>
    )
}

export default AsFreelancer