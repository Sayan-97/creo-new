import React from 'react'
import { Link } from 'react-router-dom'
import USDT from '../../assets/images/svg/USDT.svg'

const MyJobs = () => {
    return (
        <div className='container-small'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>My Jobs</h2>
                <p className='flex gap-2'>Earning Available: <img src={USDT} alt="img" /> USDT 200</p>
            </div>

            <div className='w-full bg-[#171717] py-10 rounded-xl divide-y divide-[#474747]'>
                <div className='px-5 py-6'>
                    <h3 className='text-xl font-semibold'>Active Contracts</h3>
                </div>

                <div className='px-5 py-6 flex flex-col md:flex-row items-start space-y-5 md:space-y-0 justify-between'>
                    <div className='space-y-2'>
                        <h2 className='text-xl font-bold'>Game Tester for a TPP Shooting Multiplayer</h2>
                        <p className='text-[#9E9E9E]'>Hired By : Michel Jones</p>
                        <p className='text-[#9E9E9E]'>Company Name : Activison</p>
                        <p className='text-[#9E9E9E]'>Deadline: July 05-August 31</p>
                    </div>
                    <div className='space-y-2'>
                        <h3 className='text-lg font-medium text-[#04FF33]'>ACTIVE</h3>
                        <p className='flex gap-2'>Budget: <img src={USDT} alt="img" /> USDT 200</p>
                        <p className='flex gap-2'>Escrow: <img src={USDT} alt="img" /> USDT 200</p>
                    </div>
                    <div>
                        <Link to='/user/messages'>
                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-1 rounded-lg '>
                                Message
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='px-5 py-6 flex justify-center'>
                    <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-2 rounded-lg '>
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MyJobs