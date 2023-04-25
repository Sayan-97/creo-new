import React from 'react'

import { BiEdit } from 'react-icons/bi'
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { BiPlus } from 'react-icons/bi'

import USDTIcon from '../../assets/images/svg/USDT.svg'
import avatar from '../../assets/images/forms/profile1.png'
import Img1 from '../../assets/images/pages/profilePageImg1.png'
import PortfolioImg from '../../assets/images/pages/portfolioImg.png'
import CatelogImg from '../../assets/images/pages/catalogue.png'
import TestimonialImg from '../../assets/images/pages/testimonials3.png'
import CertificationImg from '../../assets/images/pages/Certifications3.png'
import OtherImg from '../../assets/images/pages/other.png'

const Profile = () => {
    return (
        <div className='container-small grid grid-cols-3 gap-2 pt-16'>
            {/* Left Profile */}
            <div className='relative h-fit col-span-1 flex flex-col bg-[#1E2127] rounded-xl '>
                <img src={avatar} alt="img" className='absolute w-30 top-[-8%] left-[50%] translate-x-[-50%]' />
                <div className='flex flex-col items-center w-full gap-3 p-5 mt-[20%]'>
                    <h3 className='text-white text-2xl font-semibold mb-0'>John Doe</h3>
                    <p className='text-xl'>Game Designer & Developer</p>
                    <p className='flex items-center gap-2'><div className='w-2 h-2 rounded-full bg-green-500'></div>Available now<BiEdit className='text-xl' /></p>

                    <div className='w-full grid grid-cols-2 gap-2 py-2'>
                        <button className='w-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-md text-white text-md font-bold py-2'>See Public View</button>
                        <div class="p-[1px] rounded-md bg-gradient-to-r from-cyan-400 to-purple-500">
                            <button class="w-full text-white text-md font-bold bg-[#272727] py-2 rounded-md">Profile Settings</button>
                        </div>
                    </div>
                </div>

                <hr className='border-[#575757] w-full' />

                <div className='flex flex-col items-start w-full gap-2 p-5'>
                    <h5 className='flex items-center gap-2 text-xl font-semibold'>Video Interoduction <HiOutlinePlusCircle className='text-lg' /></h5>
                    <p>Add a video introduction to make you stand out from the croud</p>
                </div>

                <hr className='border-[#575757] w-[90%] relative left-[-5%]' />

                <div className='flex flex-col items-start w-full gap-2 p-5'>
                    <h5 className='flex items-center gap-2 text-xl font-semibold'>Hours per week <HiOutlinePlusCircle className='text-lg' /></h5>
                    <p>More than 30 hours in week</p>
                </div>

                <hr className='border-[#575757] w-[90%] relative left-[-5%]' />

                <div className='flex flex-col items-start w-full gap-2 p-5'>
                    <h5 className='flex items-center gap-2 text-xl font-semibold'>Language <HiOutlinePlusCircle className='text-lg' /> <BiEdit className='text-lg' /></h5>
                    <div className='flex gap-2'><p className='font-bold text-lg'>English:</p><p>Fluent</p></div>
                    <div className='flex gap-2'><p className='font-bold text-lg'>French:</p><p>Fluent</p></div>
                </div>

                <hr className='border-[#575757] w-[90%] relative left-[-5%]' />

                <div className='flex flex-col items-start w-full gap-2 p-5'>
                    <h5 className='flex items-center gap-2 text-xl font-semibold'>Education <HiOutlinePlusCircle className='text-lg' /></h5>
                    <div className='grid gap-4'>
                        <div className='grid gap-2'>
                            <p className='font-semibold'>XYZ UNIVERSITY</p>
                            <p className='text-sm'>BAJMC In Designing</p>
                            <p>(2012-2015)</p>
                        </div>
                        <div className='grid gap-2'>
                            <p className='font-semibold'>XYZ UNIVERSITY</p>
                            <p className='text-sm'>BAJMC In Designing</p>
                            <p>(2012-2015)</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Right Side */}
            <div className='col-span-2 flex flex-col gap-3'>
                <div className='relative w-full bg-[#171717] flex flex-col rounded-xl py-4'>
                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='flex gap-2 mb-0 text-2xl font-semibold'>UI/UX Designer | Visual Designer <BiEdit /></h4>
                            <div className='flex gap-1'>
                                <button className='flex gap-1 font-bold bg-gradient-to-r from-[#15DBFF] to-[#A514FC] p-2 rounded-md'><img src={USDTIcon} alt="img" />USDT</button>
                                <p>10.00</p>
                                <p className='font-bold'>/hr</p>
                                <BiEdit className='text-2xl font-bold' />
                            </div>
                        </div>
                        <div className='flex justify-between align-items-baseline w-full'>
                            <p className='w-[85%]'>Lorem ipsum dolor sit amet consectetur. Dui pretium quis egestas nisl dapibus egestas orci quis tellus. Malesuada gravida viverra cursus commodo. In volutpat vulputate magna facilisi diam velit. Blandit mi dapibus etiam donec viverra penatibus commodo ut enim. .</p>
                            <BiEdit className='' />
                        </div>
                        <div className='w-full relative rounded-xl bg-[#272727] flex gap-2 p-2'>
                            <img src={Img1} alt="img" className='rounded-md' />
                            <div className='flex flex-col items-start gap-2'>
                                <h5>Consultation</h5>
                                <button className='bg-gradient-to-r from-[#15DBFF] to-[#A514FC] py-1 px-2 rounded-md'>Drafts</button>
                                <p>Cliants can only see and buy consultants</p>
                            </div>
                            <BiEdit className='absolute right-2 top-2 text-lg' />
                        </div>
                    </div>

                    <hr className='bg-white w-full' />

                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='flex gap-2 mb-0 text-xl'>Work History<BiEdit /></h4>
                        </div>
                        <div className='flex align-items-baseline gap-4 w-full'>
                            <div className='px-2 py-1 border-b'>
                                <a href="/" className='text-white no-underline'>Completed (10)</a>
                            </div>
                            <div className='px-2 py-1'>
                                <a href="/" className='text-white no-underline'>In Progress (3)</a>
                            </div>
                        </div>
                        <div className='w-full grid gap-2'>
                            <h5>Dashboard for Ecommerce Website</h5>
                            <div className='flex gap-2'>
                                <div class="flex items-center">
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                </div>
                                <p>5.0</p>
                                <p className='text-sm'>June 12, 2022- June 20, 2022</p>
                            </div>
                            <p className='italic'>“Best work till date, Great Job”</p>
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='flex gap-2'>
                                <button className='flex gap-1 font-bold bg-gradient-to-r from-[#15DBFF] to-[#A514FC] p-2 rounded-md'><img src={USDTIcon} alt="img" />USDT</button>
                                <p>50.00</p>
                            </div>
                            <div className='flex gap-2'>
                                <button className='flex gap-1 font-bold bg-gradient-to-r from-[#15DBFF] to-[#A514FC] p-2 rounded-md'><img src={USDTIcon} alt="img" />USDT</button>
                                <p>50.00</p>
                            </div>
                            <div>
                                <p>0 Hours</p>
                            </div>
                        </div>
                    </div>

                    <hr className='bg-white w-full' />

                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='flex gap-2 mb-0 text-xl'>Portfolio<BiEdit /></h4>
                        </div>
                        <div className='w-full flex flex-col'>
                            <img src={PortfolioImg} alt="img" className='w-80' />
                            <p>Showcase your works to win more clients</p>
                        </div>
                    </div>

                    <hr className='bg-white w-full' />

                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='flex gap-2 mb-0 text-xl'>Skills<BiEdit /></h4>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />UI / UX Designing</button>
                            </div>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />Web Design</button>
                            </div>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />Graphic Design</button>
                            </div>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />Mobile App Design</button>
                            </div>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />UX Designing</button>
                            </div>
                            <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'><BiPlus />Figma</button>
                            </div>
                        </div>
                    </div>

                    <hr className='bg-white w-full' />

                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='flex items-center justify-between w-full'>
                            <h4 className='flex gap-2 mb-0 text-xl'>Your Project Catelog</h4>
                            <button className='bg-gradient-to-r from-[#15DBFF] to-[#A514FC] px-3 py-2 rounded-md'>Manage</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur. Dui pretium quis egestas nisl dapibus egestas orci quis tellus. Malesuada gravida viverra cursus commodo. In volutpat vulputate magna facilisi diam velit. Blandit mi dapibus etiam donec viverra penatibus commodo ut enim. .</p>
                        <div className='w-full flex gap-2'>
                            <img src={CatelogImg} alt="img" className='rounded-md' />
                            <div className='flex flex-column align-items-baseline gap-4'>
                                <h5>Mobile App Design</h5>
                                <div className='flex gap-2'>
                                    <button className='flex gap-1 font-bold bg-gradient-to-r from-[#15DBFF] to-[#A514FC] p-2 rounded-md'><img src={USDTIcon} alt="img" />USDT</button>
                                    <p className='mr-4'>50.00</p>
                                    <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                                        <button className='text-white flex gap-2 text-lg font-bold bg-[#171717] px-[18px] py-[6px] rounded-lg'>7 days Delivery</button>
                                    </div>
                                </div>
                                <button className='border rounded-md px-3 py-2'>View Projects</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full bg-[#171717] flex flex-col rounded-xl py-4'>
                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='w-full flex justify-between'>
                            <h4 className='flex gap-2 mb-0 w- text-xl'>Testimonials</h4>
                            <HiOutlinePlusCircle className='text-2xl' />
                        </div>

                        <div className='w-full flex flex-col'>
                            <img src={TestimonialImg} alt="img" className='w-80' />
                            <p>Showcasing client testimonials can strengthen your profile. (+5%)</p>
                        </div>
                    </div>
                </div>

                <div className='relative w-full bg-[#171717] flex flex-col rounded-xl py-4'>
                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='w-full flex justify-between'>
                            <h4 className='flex gap-2 mb-0 w-full text-xl'>Certifications</h4>
                            <HiOutlinePlusCircle className='text-2xl' />
                        </div>

                        <div className='w-full flex flex-col'>
                            <img src={CertificationImg} alt="img" className='w-80' />
                            <p className='w-[80%] text-center'>Listing your certifications can help prove your specific knowledge or abilities. (+10%)You can add them manually or import them from Credly.</p>
                        </div>
                    </div>
                </div>

                <div className='relative w-full bg-[#171717] flex flex-col rounded-xl py-4'>
                    <div className='flex flex-col items-center w-full gap-5 p-3'>
                        <div className='w-full flex justify-between'>
                            <h4 className='flex gap-2 mb-0 w-full text-xl'>Employment History</h4>
                            <HiOutlinePlusCircle className='text-2xl' />
                        </div>

                        <div className='w-full flex flex-col gap-3'>
                            <div className='w-full relative'>
                                <h5>UI/UX Designer</h5>
                                <p className='font-bold'>Microsoft India</p>
                                <p>Jun 2021 - Mar 2023</p>
                                <BiEdit className='absolute right-2 top-0 text-xl' />
                            </div>
                            <div className='w-full relative'>
                                <h5>UI/UX Designer</h5>
                                <p className='font-bold'>Microsoft India</p>
                                <p>Jun 2021 - Mar 2023</p>
                                <BiEdit className='absolute right-2 top-0 text-xl' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative w-full bg-[#171717] flex flex-col rounded-xl py-4'>
                    <div className='flex flex-col items-center w-full gap-4 p-3'>
                        <div className='w-full flex justify-between'>
                            <h4 className='flex gap-2 mb-0 w-full text-xl'>Other Experience</h4>
                            <HiOutlinePlusCircle className='text-2xl' />
                        </div>

                        <div className='w-full flex flex-col'>
                            <img src={OtherImg} alt="img" className='w-80' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile