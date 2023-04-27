import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { toggleUser } from '../../../../store/user/userSlice'

import Profile from '../../../../assets/images/svg/profile.svg'
import Book from '../../../../assets/images/svg/book.svg'
import Dollar from '../../../../assets/images/svg/dollar-circle.svg'
import Briefcase from '../../../../assets/images/svg/briefcase.svg'
import Teacher from '../../../../assets/images/svg/teacher.svg'
import Experience from '../../../../assets/images/svg/medal.svg'
import USDT from '../../../../assets/images/svg/USDT.svg'
import avatar from '../../../../assets/images/forms/profile1.png'

import { HiPlus } from 'react-icons/hi'

import { WorkExpModal, EducationModal, AddCertificationsModal } from '../../../../components/Modals'

const AsFreelancer = () => {

    const dispatch = useDispatch()
    const handleSignUpAsFreelancer = () => (
        dispatch(toggleUser('freelancer'))
    )

    const countries = ['USA', 'UK', 'Australia']
    const cities = ['ABC', 'ABC', 'ABC']
    const language = ['English', 'Dutch', 'Spanish']
    const proficiency = ['Beginner', 'Intermediate', 'Advanced']

    const [showExpModal, setShowExpModal] = useState(false)
    const setExpModal = () => (
        setShowExpModal(!showExpModal)
    )

    const [showEdModal, setShowEdModal] = useState(false)
    const setEdModal = () => (
        setShowEdModal(!showEdModal)
    )

    const [showCrtModal, setShowCrtModal] = useState(false)
    const setCrtModal = () => (
        setShowCrtModal(!showCrtModal)
    )

    return (
        <form action="" className='space-y-6'>
            <div className='grid justify-items-center'>
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

                        <div className='grid md:grid-cols-2 gap-2'>

                            {/* Add Language */}
                            <div className='grid gap-1'>
                                <label htmlFor="language">Add Language</label>
                                <select name="language" id="language">
                                    <option value="" disabled selected hidden>Select a language</option>
                                    {language.map((item, index) => {
                                        return (
                                            <option key={index} value="">{item}</option>
                                        )
                                    })}
                                </select>
                            </div>

                            {/* Proficiency */}
                            <div className='grid gap-1'>
                                <label htmlFor="proficiency">Proficiency</label>
                                <select name="proficiency" id="proficiency">
                                    <option value="" disabled selected hidden>Select your proficiency</option>
                                    {proficiency.map((item, index) => {
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

            {/* Professional Summery */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent p-4 rounded-card space-y-6'>

                    <div className='flex items-end gap-2'>
                        <img src={Book} alt="img" />
                        <h6>Professional Summery</h6>
                        <span className='required'>Required</span>
                    </div>

                    <div className='grid gap-1'>
                        <label htmlFor="summery">Write a short professional summery (3-5 sentences) about yourself and the work you do</label>
                        <textarea name="summery" id="summery" rows="4" placeholder='Add your summery'></textarea>
                    </div>

                </div>
            </div>

            {/* Hourly Rate */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent p-4 rounded-card space-y-4'>
                    <div className='flex items-end gap-2'>
                        <img src={Dollar} alt="img" />
                        <h6>Hourly Rate</h6>
                        <span className='required'>Required</span>
                    </div>

                    <p>Enter the amount that you would like to charge per hour for the work that you will do</p>

                    <div className='max-md:space-y-2 md:flex items-center justify-between'>
                        <div>
                            <h5>Hourly Rate:</h5>
                            <label htmlFor="rate">Total amount that the client will see</label>
                        </div>

                        <div className='flex items-end gap-2'>
                            <div className='relative'>
                                <input type="number" id='rate' className='w-44 h-12 pl-28' />
                                <div className='absolute bg-gradient flex gap-1 items-center rounded-button px-2 py-1 top-[50%] translate-y-[-50%] left-4'>
                                    <img src={USDT} alt="img" />
                                    <span className='text-lg'>USDT</span>
                                </div>
                            </div>
                            <p>/hr</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add Experience */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent px-5 py-5 rounded-card space-y-4'>

                    <div className='flex items-end gap-2'>
                        <img src={Briefcase} alt="img" />
                        <h6>Add Experience</h6>
                        <span className='required'>Required</span>
                    </div>

                    <p>Add your work experience here with your most recent position</p>

                    <button type='button' onClick={() => setExpModal()} className='primary px-5 py-2 flex items-center justify-center gap-1'> <HiPlus className='text-lg' /> Add Work Experience</button>
                    <WorkExpModal
                        show={showExpModal}
                        setExpModal={setExpModal}
                    />

                </div>
            </div>

            {/* Add Education */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent px-5 py-5 rounded-card space-y-4'>

                    <div className='flex items-end gap-2'>
                        <img src={Teacher} alt="img" />
                        <h6>Add Education</h6>
                        <span className='required'>Required</span>
                    </div>

                    <p>Add your latest Education Qualifications here</p>

                    <button type='button' onClick={() => setEdModal()} className='primary px-5 py-2 flex items-center justify-center gap-1'> <HiPlus className='text-lg' /> Add Education</button>
                    <EducationModal
                        show={showEdModal}
                        setEdModal={setEdModal}
                    />

                </div>
            </div>

            {/* Add Certifications */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent px-5 py-5 rounded-card space-y-4'>

                    <div className='flex items-end gap-2'>
                        <img src={Experience} alt="img" />
                        <h6>Add Certifications</h6>
                        <span className='required'>Required</span>
                    </div>

                    <p>Add a category that defines your skills</p>

                    <button type='button' onClick={() => setCrtModal()} className='primary px-5 py-2 flex items-center justify-center gap-1'> <HiPlus className='text-lg' /> Add Certifications</button>
                    <AddCertificationsModal
                        show={showCrtModal}
                        setCrtModal={setCrtModal}
                    />

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

            <div className='flex justify-center'>
                <Link to='/freelancer/findwork'>
                    <button onClick={handleSignUpAsFreelancer} className='primary px-5 py-2'>Sign Up</button>
                </Link>
            </div>
        </form>
    )
}

export default AsFreelancer