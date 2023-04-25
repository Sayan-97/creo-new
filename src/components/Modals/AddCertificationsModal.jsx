import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { RxCrossCircled } from 'react-icons/rx'

const AddCertificationsModal = ({ show, setCrtModal }) => {

    const modalRef = useRef();

    useEffect(() => {
        // Add event listener to modal overlay
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setCrtModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setCrtModal]);

    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function generateArrayOfYears() {
        var min = new Date().getFullYear()
        var max = min + 9
        var years = []

        for (var i = min; i <= max; i++) {
            years.push(i)
        }
        return years
    }

    return show ? ReactDOM.createPortal(
        <React.Fragment>
            <div className='fixed top-0 left-0 w-full h-full z-20 pt-32 pb-5 overflow-y-scroll hide-scrollbar' style={{ background: 'rgba(0, 0, 0, 0.52)' }}>
                <div ref={modalRef} className='w-11/12 lg:w-[50%] 3xl:w-[40%] py-10 px-10 mx-auto space-y-4 bg-[#171717] rounded-xl text-white'>

                    {/* Head */}
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='text-xl font-semibold'>Add Certifications</h2>
                        <RxCrossCircled onClick={setCrtModal} className='text-xl cursor-pointer hover:rotate-90 transition-all ease-in-out duration-300' />
                    </div>

                    <form className='space-y-5'>
                        {/* Title */}
                        <div class="w-full mb-2">
                            <label class="block text-white text-md font-medium mb-2" for="title">
                                Title
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter your Title" />
                            <p class="text-red-500 text-xs italic">Please enter your title</p>
                        </div>

                        {/* Company */}
                        <div class="w-full mb-2">
                            <label class="block text-white text-md font-medium mb-2" for="company">
                                Company
                            </label>
                            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="company" type="text" placeholder="Enter your Company Name" />
                            <p class="text-red-500 text-xs italic">Please enter your Company Name</p>
                        </div>

                        <div>
                            <div className='w-full flex items-center justify-between gap-4'>
                                {/* Location */}
                                <div class="w-full mb-2">
                                    <label class="block text-white text-md font-medium mb-2" for="location">
                                        Location
                                    </label>
                                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" placeholder="Enter your Location" />
                                    <p class="text-red-500 text-xs italic">Please enter your Location</p>
                                </div>

                                {/* City */}
                                <div class="w-full mb-2">
                                    <label class="block text-white text-md font-medium mb-2" for="city">
                                        City
                                    </label>
                                    <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="city" type="text" placeholder="Enter your City" />
                                    <p class="text-red-500 text-xs italic">Please enter your City</p>
                                </div>

                            </div>

                            <div className='flex gap-2'>
                                <input type="checkbox" />
                                <p>I am currently working here</p>
                            </div>
                        </div>

                        <div className='w-full flex gap-3'>
                            {/* start date */}
                            <div className='w-full relative col-span-2 lg:col-span-1 text-black'>
                                <label className='w-full text-left text-sm lg:text-base font-medium text-white'>Start Date</label>
                                <div className='grid grid-cols-2 gap-2 sm:gap-3'>
                                    {/* month */}
                                    <select className='w-full text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">Select Month</option>
                                        {
                                            monthsArray.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    {/* year */}
                                    <select className='w-full text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">Select Year</option>
                                        {
                                            generateArrayOfYears().map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className='absolute -bottom-5 right-1 text-red-600 text-xs lg:text-sm text-right'>error</p>
                            </div>
                            {/* end date */}
                            <div className='w-full relative col-span-2 lg:col-span-1 text-black'>
                                <label className='w-full text-left text-sm lg:text-base font-medium text-white'>End Date</label>
                                <div className='grid grid-cols-2 gap-2 sm:gap-3'>
                                    {/* month */}
                                    <select className='w-full text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">Select Month</option>
                                        {
                                            monthsArray.map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    {/* year */}
                                    <select className='w-full text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">Select Year</option>
                                        {
                                            generateArrayOfYears().map((item, index) => (
                                                <option key={index} value={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className='absolute -bottom-5 right-1 text-red-600 text-xs lg:text-sm text-right'>error</p>
                            </div>
                        </div>

                        {/* Description */}
                        <div class="w-full mb-2">
                            <label class="block text-white text-md font-medium mb-2" for="Description">
                                Description
                            </label>
                            <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-40" id="Description" type="text" placeholder="Enter your Description" />
                            <p class="text-red-500 text-xs italic">Please enter your Description</p>
                        </div>

                        <div className='w-full flex justify-end'>
                            <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-1 text-lg rounded-lg'>
                                Save
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </React.Fragment>, document.body
    ): null
    }

export default AddCertificationsModal
