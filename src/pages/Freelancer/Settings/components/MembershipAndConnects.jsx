import React from 'react'
import { Link } from 'react-router-dom'

const MembershipAndConnects = () => {
    return (
        <div className='divide-y divide-[#474747]'>
            {/* summery */}
            <div className='space-y-6 p-[16px] md:p-10'>
                <h3 className='text-white text-xl font-bold m-0'>Summery</h3>
                <p className='text-white text-sm md:text-base font-medium'>Current Plan : <span className='font-semibold'>Freelancer Basic</span></p>
                {/* go to membership plans */}
                <div>
                    <Link to='/freelancer/membership-plans'>
                        <div className='w-max flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                            View or Edit Membership Plans
                        </div>
                    </Link>
                </div>
            </div>

            {/* Available Connects */}
            <div className='space-y-6 p-[16px] md:p-10'>
                <h3 className='text-white text-xl font-bold m-0'>Available Connects</h3>
                <p className='text-white text-sm md:text-base font-medium'>20</p>
                {/* button */}
                <div className='flex items-center space-x-4'>
                    <Link to='/freelancer/buy-connects'>
                        <div className='flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                            Buy Connects
                        </div>
                    </Link>
                    <Link to='/user/reports/connects'>
                        <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                            <div className='flex items-center bg-[#171717] text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                                View Connects History
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* membership connects */}
            <div className='space-y-6 p-[16px] md:p-10'>
                <h3 className='text-white text-xl font-bold m-0'>Membership Connects</h3>
                <p className='text-white text-sm md:text-base font-medium'>10 per Month</p>
                <p className='text-white text-sm md:text-base font-medium'>
                    Any unused Connects at the end of your billing cycle will roll over to the next month. <a href='/' className='text-white hover:!text-[#9359d5] font-semibold cursor-pointer'>Learn more</a>
                </p>
            </div>

            {/* membership fees */}
            <div className='space-y-6 p-[16px] md:p-10'>
                <h3 className='text-white text-xl font-bold m-0'>Membership Fees</h3>
                <p className='text-white text-sm md:text-base font-medium'>Free</p>
            </div>

            <div className='space-y-6 p-[16px] md:p-10'>
                <h3 className='text-white text-xl font-bold m-0'>Current Billing Cycle</h3>
                <p className='text-white text-sm md:text-base font-medium space-x-2'>
                    <span>Jan 20, 2023</span>
                    <span>-</span>
                    <span>Feb 20, 2023</span>
                </p>
                <div>
                    <a href='/' className='text-xs md:text-sm text-white hover:!text-[#9359d5] font-semibold cursor-pointer'>Learn more</a>
                </div>
            </div>
        </div>
    )
}

export default MembershipAndConnects