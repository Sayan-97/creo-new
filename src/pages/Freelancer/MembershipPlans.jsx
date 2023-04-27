import React from 'react'
import { Link } from 'react-router-dom';

import USDT from '../../assets/images/svg/USDT.svg'
import { HiBadgeCheck } from 'react-icons/hi';

const MembershipPlans = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-10'>
                {/* basic */}
                <div className='flex flex-col items-center bg-[#171717] rounded-2xl px-10 py-10 space-y-10 z-10 hover:scale-105 transition-all ease-out'>
                    {/* title */}
                    <h2 className='text-white text-2xl font-bold capitalize'>Basic</h2>

                    {/* free badge */}
                    <div className='w-max bg-white text-black font-semibold px-6 py-2 rounded-lg'>Free</div>

                    {/* <div>
                                    <Link to='/user/freelancer/settings'>
                                        <div className='w-max flex items-center bg-[#201E7B] text-white text-sm lg:text-base font-semibold capitalize px-10 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                                            Upgrade to Basic
                                        </div>
                                    </Link>
                                </div> */}

                    {/* current plan label */}
                    <p className='text-white text-lg font-semibold'>This is your current plan</p>

                    {/* includes */}
                    <p className='text-white text-lg'>Includes:</p>

                    {/* list */}
                    <ul className='text-white list-disc space-y-3 w-full'>
                        <li>10 Connects/month</li>
                        <li>Buy Connects as you need them for $0.15 + Tax each*</li>
                        <li>Hourly protection to ensure you're paid for each hour worked</li>
                        <li>Fixed-price payments are secured through milestones</li>
                        <li>Limited reports and functionality</li>
                    </ul>
                </div>

                {/* plus */}
                <div className='flex flex-col items-center bg-[#171717] rounded-2xl px-10 py-10 space-y-10 z-10 hover:scale-105 transition-all ease-out'>
                    {/* title */}
                    <div className='flex !items-start space-x-2'>
                        <h2 className='text-white text-2xl font-bold capitalize'>Plus</h2>
                        <HiBadgeCheck className='w-6 h-auto text-white' />
                    </div>

                    {/* upgrade button */}
                    <div>
                        <Link to='/user/freelancer/settings'>
                            <div className='w-max flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-lg font-semibold capitalize px-10 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                                Upgrade to Plus
                            </div>
                        </Link>
                    </div>

                    {/* free badge */}
                    <div className='flex items-center space-x-4'>
                        <div className='w-max flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white font-semibold px-4 py-2 rounded-lg space-x-2'>
                            <img src={USDT} alt='usdt icon' className='w-6 h-auto' />
                            USDT
                        </div>
                        <p className='text-white font-medium'><span>0.07</span> / month</p>
                    </div>


                    {/* current plan label */}
                    {/* <p className='text-white text-lg font-semibold'>This is your current plan</p> */}

                    {/* includes */}
                    <p className='text-white text-lg'>Includes everything in Basic and also:</p>

                    {/* list */}
                    <ul className='text-white list-disc space-y-3'>
                        <li>80 Connects/month</li>
                        <li>View competitor bids for any job</li>
                        <li>Extended reports and functionality, including grouping and sorting</li>
                        <li>Customize your profile URL</li>
                        <li>Your profile will never be set to hidden due to inactivity</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MembershipPlans