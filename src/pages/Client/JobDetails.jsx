import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import USDT from '../../assets/images/svg/USDT.svg'

const JobDetails = () => {
    return (
        <div className='container flex flex-col gap-3'>
            <h1 className='mx-auto lg:mx-[28%] text-2xl lg:text-4xl font-Outfit font-semibold'>Job Details</h1>
            <form className=''>

                {/* Project Name */}
                <div class="w-full mb-2">
                    <label class="block text-white text-md font-medium mb-2" for="username">
                        Project Name
                    </label>
                    <div className='flex items-start gap-2'>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Hello World" readOnly />
                        <FaRegEdit className='text-2xl' />
                    </div>
                </div>

                {/* Project category */}
                <div class="w-full mb-2">
                    <label class="block text-white text-md font-medium mb-2" for="username">
                        Project Category
                    </label>
                    <div className='flex items-start gap-2'>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Hello" readOnly />
                        <FaRegEdit className='text-2xl' />
                    </div>
                </div>

                {/* Skills */}
                <div class="w-full mb-2 grid gap-3">
                    <h3 class="block text-white text-lg font-medium mb-2">
                        Skills
                    </h3>

                    <div className='flex gap-3'>
                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                            <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                ui/ux designing
                            </div>
                        </button>

                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                            <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                web designing
                            </div>
                        </button>

                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                            <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                Figma
                            </div>
                        </button>

                    </div>
                </div>

                {/* Scope */}
                <div class="w-full mb-2">
                    <label class="block text-white text-md font-medium mb-2" for="username">
                        Scope
                    </label>
                    <div className='flex items-start gap-2'>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Hello" readOnly />
                        <FaRegEdit className='text-2xl' />
                    </div>
                </div>

                {/* Budget */}
                <div class="w-full mb-2">
                    <label class="block text-white text-md font-medium mb-2" for="username">
                        Budget
                    </label>
                    <div className='flex items-end gap-1'>
                        <div className='relative'>
                            <input type="number" className='w-44 rounded-lg pl-24 text-black' placeholder='0.00' />
                            <div className='absolute top-[50%] translate-y-[-50%] left-2 bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center gap-1 px-2 py-1 rounded-lg'>
                                <img src={USDT} alt="img" />
                                <p>USDT</p>
                            </div>
                        </div>
                        <p className='text-xl'>/ hr</p>
                    </div>
                </div>

                <hr className='w-full' />
                <div className='w-full flex items-center justify-between'>
                    <h2 className='text-xl'>Talents are looking for</h2>
                    <FiChevronDown />
                </div>
            </form>

            <div className='mx-auto lg:mx-[28%] flex justify-end items-center gap-3'>
                <Link to='/'>
                    <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg text-white text-lg font-medium mt-2'>
                        <div className='bg-[#171717] flex items-center justify-center px-6 py-2 rounded-lg'>
                            Save as Draft
                        </div>
                    </button>
                </Link>
                <Link to='/client/jobs/success'><button className='bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-2 rounded-lg text-white text-lg font-medium mt-2'>Post this Job</button></Link>
            </div>
        </div>
    )
}

export default JobDetails