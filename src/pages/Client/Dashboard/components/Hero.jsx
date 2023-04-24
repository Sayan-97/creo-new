import React from 'react'
import { Link } from 'react-router-dom'

import DashImg from '../../../../assets/images/pages/client-dashboard.png'
import avatar from '../../../../assets/images/forms/profile1.png'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { RiMailSendLine } from 'react-icons/ri'


const Hero = () => {

    const category = [
        { name: 'Game Development', link: '/' },
        { name: 'Game Designer', link: '/' },
        { name: 'Blockchain Developer', link: '/' },
        { name: '3D Designer', link: '/' },
        { name: 'UI/UX Designer', link: '/' },
        { name: 'Marketing', link: '/' },
        { name: 'Sound Designer', link: '/' },
        { name: 'Character Creator', link: '/' },
        { name: 'Game Content Writer', link: '/' },
    ]

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full bg-[#171717] py-5 flex max-lg:flex-wrap max-lg:gap-2 px-4 lg:items-center lg:justify-between lg:px-28'>
                {
                    category.map((item, index) => {
                        return (
                            <Link className='text-base' to={item.link} key={index}>{item.name}</Link>
                        )
                    })
                }
            </div>
            <div className='container grid grid-cols-8 gap-4 py-10'>
                <div className='col-span-8 lg:col-span-6 bg-[#171717] rounded-xl px-5 py-5 relative z-10 flex'>

                    <div className='flex flex-col justify-center gap-4 z-10'>
                        <p>Good Morning Michael,</p>
                        <h2 className='text-3xl font-semibold'>Your Dashboard</h2>
                        <div className='flex gap-5'>
                            <button className='secondary w-36 h-11 before:content-["Browse_Talents"]'>Browse Talents</button>
                            <button className='primary w-36 h-11'>Post a Job</button>
                        </div>
                    </div>

                    <div className='absolute right-0 top-0 w-ful h-full'>
                        <img src={DashImg} alt="img" className='rounded-xl h-full z-[-1]' />
                        <div className=' absolute top-0 left-0 w-full h-full rounded-xl' style={{ background: 'linear-gradient(89.73deg, #171717 0.23%, rgba(23, 23, 23, 0) 100.39%)' }}></div>
                    </div>
                </div>

                {/* Profile Info */}
                <div className='col-span-8 lg:col-span-2 row-span-2 bg-[#171717] rounded-xl grid relative'>
                    <div className='grid justify-items-center gap-3 p-10'>
                        <img src={avatar} alt="img" />
                        <h2 className='text-2xl font-semibold'>Michael James</h2>
                        <h3 className='text-lg font-semibold'>Getting Started</h3>

                        <div className='grid w-full justify-items-center gap-1'>
                            <div className='bg-white w-full h-[5px] rounded-lg'>
                                <div className='h-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg w-[90%]'>
                                </div>
                            </div>
                            <p className='text-sm text-[#9e9e9e]'>90% Complete</p>
                        </div>
                    </div>

                    <hr className='w-full relative' />

                    <div className='grid justify-items-center gap-5 px-10 py-5'>
                        <p className='flex gap-3 items-center'><div className='bg-gradient-to-r from-cyan-400 to-violet-500 p-0.5 rounded-full'> <div className='p-2 bg-[#171717] rounded-full'><RiMailSendLine /></div> </div> Invite Talents to Apply</p>
                        <p className='flex gap-3 items-center'><div className='bg-gradient-to-r from-cyan-400 to-violet-500 p-0.5 rounded-full'> <div className='p-2 bg-[#171717] rounded-full'><RiMailSendLine /></div> </div> Invite Talents to Apply</p>
                        <p className='flex gap-3 items-center'><div className='bg-gradient-to-r from-cyan-400 to-violet-500 p-0.5 rounded-full'> <div className='p-2 bg-[#171717] rounded-full'><RiMailSendLine /></div> </div> Invite Talents to Apply</p>
                    </div>

                    <div className='grid gap-5 px-10 py-5'>
                        <h6>See More</h6>
                        <h6>Completed Tasks</h6>
                    </div>
                </div>

                {/* Your Posting */}
                <div className='col-span-8 md:col-span-4 lg:col-span-3 bg-[#171717] rounded-xl p-10 space-y-8'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='font-semibold'>Your Posting</p>
                        <p className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>View All</p>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-2xl font-semibold'>Build a Blockchain Platform for Gamers</h2>
                        <p className='flex gap-2 items-center text-[#d9d9d9]'><AiOutlineClockCircle /> Posted 18 Minutes Ago</p>
                        <p className='text-sm text-[#9e9e9e]'>
                            Lorem ipsum dolor sit amet consectetur. Id convallis enim quis nisl. Aenean sed amet ut vestibulum ligula. Elementum quisque in mattis lectus pharetra lectus interdum.
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>0</p>
                            <p>Proposals</p>
                        </div>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>0</p>
                            <p>Messaged</p>
                        </div>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>0</p>
                            <p>Hired</p>
                        </div>
                    </div>
                </div>

                {/* Your Drafts */}
                <div className='col-span-8 md:col-span-4 lg:col-span-3 bg-[#171717] rounded-xl p-10 space-y-8'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='font-semibold'>Your Drafts</p>
                        <p className='font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>View All</p>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-2xl font-semibold'>Web 3 NFT Designer needed for a IGO Platform</h2>
                        <p className='flex gap-2 items-center text-[#d9d9d9]'><AiOutlineClockCircle /> Posted 18 Minutes Ago</p>
                        <p className='text-sm text-[#9e9e9e]'>
                            Lorem ipsum dolor sit amet consectetur. Id convallis enim quis nisl. Aenean sed amet ut vestibulum ligula. Elementum quisque in mattis lectus pharetra lectus interdum.
                        </p>
                    </div>

                    <div className='flex gap-8'>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>3</p>
                            <p>Proposals</p>
                        </div>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>4</p>
                            <p>Messaged</p>
                        </div>
                        <div className='grid justify-items-center'>
                            <p className='text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#15DBFF] to-[#A514FC]'>0</p>
                            <p>Hired</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero