import React from 'react'
import { Link } from 'react-router-dom'

import USDT from '../../assets/images/svg/USDT.svg'

import { AiOutlineClockCircle } from 'react-icons/ai'
import { TiFlashOutline } from 'react-icons/ti'
import { RiFlag2Line } from 'react-icons/ri'
import { MdVerified } from 'react-icons/md'

const Apply = () => {
    return (
        <div className='container'>
            <div className='grid md:grid-cols-3 gap-5 w-full'>
                <div className='w-full bg-[#171717] col-span-1 md:col-span-2 py-5 space-y-8 rounded-lg'>

                    <div className='w-full px-10 space-y-4'>
                        <div className='flex items-center justify-between'>
                            <h2 className='text-2xl font-semibold'>Looking For a Game Tester</h2>
                            <p className='flex gap-1'><img src={USDT} alt="img" />USDT 20.00 /hr</p>
                        </div>

                        <div className='flex gap-5 text-[#9E9E9E]'>
                            <p className='flex gap-1'><AiOutlineClockCircle />Posted 18 Minutes Ago</p>
                            <p className='flex gap-1'><TiFlashOutline />6 Credits</p>
                        </div>

                        <div className='flex gap-5'>
                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>Gaming</p>
                            </button>

                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>Testing</p>
                            </button>
                        </div>
                    </div>

                    <hr className='border-[#575757]' />

                    <div className='w-full px-10 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Details</h2>
                        <p className='text-[#9E9E9E] text-justify'>Lorem ipsum dolor sit amet consectetur. Felis in lobortis sit non. Sit sed volutpat enim velit purus viverra. Lacus ornare pellentesque maecenas nibh risus fringilla eget cras. Nibh tincidunt nisl faucibus bibendum. Non aliquet elit in enim ut imperdiet nam amet. Scelerisque convallis ipsum sociis lobortis viverra sed nec urna etiam. Metus phasellus nec sem sed praesent lacus. Vitae lacus risus eget non libero metus. Nulla vestibulum vestibulum diam ut leo arcu consectetur. Tincidunt et praesent blandit egestas quis quis. Dui risus consequat ac ut suspendisse sagittis.</p>
                    </div>

                    <hr className='border-[#575757]' />

                    <div className='w-full px-10 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Skills & Expertise</h2>
                        <div className='flex flex-wrap gap-5'>
                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>Gaming</p>
                            </button>

                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>Testing</p>
                            </button>

                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>FPP Shooting</p>
                            </button>

                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-1 bg-[#171717] rounded-lg'>Automation</p>
                            </button>
                        </div>
                    </div>

                    <hr className='border-[#575757]' />

                    <div className='w-full px-10 space-y-4'>
                        <h2 className='text-2xl font-semibold'>Project Type</h2>
                        <p className='text-[#9E9E9E] text-justify'>One time Project</p>
                    </div>

                    <hr className='border-[#575757]' />

                </div>

                {/* Right Side */}
                <div className='w-full bg-[#171717] col-span-1 py-5 rounded-lg space-y-4'>
                    <div className='grid gap-4 px-5 w-full'>
                        <Link to='/freelancer/findwork/submit-proposal'>
                            <button className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                                <p className='px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg'>Apply</p>
                            </button>
                        </Link>

                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 rounded-lg p-[1px]'>
                            <p className='px-4 py-2 bg-[#171717] rounded-lg'>Save</p>
                        </button>
                    </div>

                    <div className='grid gap-4 px-5'>
                        <p className='text-[#9E9E9E] flex gap-2'><RiFlag2Line className='text-lg' />Flag as Inappropriate</p>
                        <p className='text-[#9E9E9E]'>Send a Proposal for : 6 Credits</p>
                        <p className='text-[#9E9E9E]'>Available Credits : 100</p>
                    </div>

                    <hr className='border-[#575757]' />

                    <div className='grid gap-4 px-5'>
                        <h2 className='text-xl font-semibold'>About Client</h2>
                        <p className='text-[#9E9E9E] flex gap-2'><MdVerified />Payment Verified</p>
                        <p className='flex gap-4'>
                            <div className='flex'>
                                <svg class="w-5 h-5 text-[#9E9E9E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg class="w-5 h-5 text-[#9E9E9E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg class="w-5 h-5 text-[#9E9E9E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg class="w-5 h-5 text-[#9E9E9E]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <svg class="w-5 h-5 text-[#9E9E9E] dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            </div>
                            <p className='text-[#9E9E9E]'>5.00 out of 5.00 Reviews</p>
                        </p>
                        <p className='New Delhi'>Available Credits : 100</p>

                        <div>
                            <h2 className='text-lg font-semibold'>India</h2>
                            <p className='text-[#9E9E9E]'>New Delhi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apply