import React from 'react'
import { Link } from 'react-router-dom'
import USDT from '../../assets/images/svg/USDT.svg'

const BuyConnects = () => {
    return (
        <div className='container-small flex flex-col gap-5'>
            <div className='flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>My Jobs</h2>
                <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 rounded-lg'>Add Time</button>
            </div>

            <form className='container'>
                <div className='space-y-6'>
                    <h2 className='text-white text-xl font-bold capitalize'>Your Available Connects</h2>
                    <h3 className='text-white text-xl font-bold capitalize'>50</h3>

                    {/* Select the amount to buy */}
                    <div className='space-y-2'>
                        <label className='text-white text-base lg:text-lg font-medium'>Select the amount to buy</label>
                        <div>
                            <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base text-black placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                <option value="" disabled hidden>10 for <img src={USDT} alt="img" /> USDT 0.04</option>
                                {
                                    [...Array(5)].map((index) => (
                                        <option key={index} value="question">10 for <img src={USDT} alt="img" /> USDT 0.04</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    {/* Your account will be charged */}
                    <div className='space-y-2'>
                        <label className='text-white text-base lg:text-lg font-medium'>Your account will be charged</label>
                        <div className='flex items-center text-white text-base md:text-xl space-x-2'>
                            <div className='bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center p-2 rounded-lg uppercase'>
                                <img className='w-7 h-auto mr-1' src={USDT} alt='usdt icon' />
                                USDT
                            </div>
                            <div>0.04</div>
                        </div>
                    </div>

                    {/* Your new Connects balance will be */}
                    <div className='space-y-2'>
                        <label className='text-white text-base lg:text-lg font-medium'>Your new Connects balance will be</label>
                        <p className='text-white text-base md:text-xl font-medium'>60</p>
                    </div>

                    {/* These Connects will expire on */}
                    <div className='space-y-2'>
                        <label className='text-white text-base lg:text-lg font-medium'>These Connects will expire on</label>
                        <p className='text-white text-base md:text-xl font-medium'>January 25, 2024</p>
                    </div>

                    {/* Promo code */}
                    <div className='space-y-2'>
                        <label className='text-white text-base lg:text-lg font-medium'>Promo code</label>
                        <div className='flex items-center space-x-4'>
                            <input
                                type='text'
                                placeholder='Enter code'
                                className='w-full lg:w-auto text-black bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                            />
                            <button onClick={(e) => e.preventDefault()} className='flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-6 py-2.5 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                                Apply
                            </button>
                        </div>
                    </div>

                    <p className='text-white text-sm md:text-base font-medium'>
                        This bundle of Connects will expire 1 year from today. Unused Connects rollover to the next month. <a href='#' className='text-white hover:!text-[#9359d5] font-semibold cursor-pointer'>Learn more</a>
                    </p>

                    <p className='text-white text-sm md:text-base font-medium'>
                        You're authorizing Upwork to charge your account. If you have sufficient funds, we will withdraw from your account balance. If not, the full amount will be charged to your primary billing method. <a href='#' className='text-white hover:!text-[#9359d5] font-semibold cursor-pointer'>Learn more</a>
                    </p>

                    {/* cancel and buy connects button */}
                    <div className='flex items-center justify-end space-x-4 pt-10'>
                        {/* cancel */}
                        <Link to='/user/settings'>
                            <div className='text-white text-sm md:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg hover:scale-105 transition-all ease-in-out duration-200'><p className='px-10 py-3 bg-[#171717] rounded-lg'>Cancel</p></div>
                        </Link>

                        {/* buy connects */}
                        <button type='submit' className='text-white text-sm md:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 px-10 py-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-200'>Buy Connects</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default BuyConnects