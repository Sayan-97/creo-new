import React, {useRef} from 'react'
import { Link } from 'react-router-dom'

import USDT from '../../assets/images/svg/USDT.svg'

import { AiOutlinePlus } from 'react-icons/ai';

const SubmitProposal = () => {

    const inputRef = useRef(null);

    const handleClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const handleFileChange = (event) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        event.target.value = null;
    };

    return (
        <form className='space-y-10'>
            {/* job details */}
            <div className=' p-4 space-y-6 rounded-2xl'>
                {/* title */}
                <div className='flex items-center'>
                    <div>
                        <svg className='text-white w-7 h-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.3628 8.72539C25.3003 7.55039 23.5253 6.96289 20.9503 6.96289H20.6503V6.91289C20.6503 4.81289 20.6503 2.21289 15.9503 2.21289H14.0503C9.35029 2.21289 9.35029 4.82539 9.35029 6.91289V6.97539H9.05029C6.46279 6.97539 4.70029 7.56289 3.63779 8.73789C2.40029 10.1129 2.43779 11.9629 2.56279 13.2254L2.57529 13.3129L2.70029 14.6254C2.71279 14.6379 2.73779 14.6629 2.76279 14.6754C3.17529 14.9504 3.60029 15.2254 4.05029 15.4754C4.22529 15.5879 4.41279 15.6879 4.60029 15.7879C6.73779 16.9629 9.08779 17.7504 11.4753 18.1379C11.5878 19.3129 12.1003 20.6879 14.8378 20.6879C17.5753 20.6879 18.1128 19.3254 18.2003 18.1129C20.7503 17.7004 23.2128 16.8129 25.4378 15.5129C25.5128 15.4754 25.5628 15.4379 25.6253 15.4004C26.2003 15.0754 26.7378 14.7254 27.2628 14.3379C27.2878 14.3254 27.3128 14.3004 27.3253 14.2754L27.3753 13.8254L27.4378 13.2379C27.4503 13.1629 27.4503 13.1004 27.4628 13.0129C27.5628 11.7504 27.5378 10.0254 26.3628 8.72539ZM16.3628 17.2879C16.3628 18.6129 16.3628 18.8129 14.8253 18.8129C13.2878 18.8129 13.2878 18.5754 13.2878 17.3004V15.7254H16.3628V17.2879ZM11.1378 6.96289V6.91289C11.1378 4.78789 11.1378 4.00039 14.0503 4.00039H15.9503C18.8628 4.00039 18.8628 4.80039 18.8628 6.91289V6.97539H11.1378V6.96289Z" fill="white" />
                            <path opacity="0.4" d="M25.6242 15.375C25.5617 15.4125 25.4992 15.45 25.4367 15.4875C23.2117 16.7875 20.7492 17.6625 18.1992 18.0875C18.0992 19.2875 17.5742 20.6625 14.8367 20.6625C12.0992 20.6625 11.5742 19.3 11.4742 18.1125C9.08672 17.7375 6.73672 16.95 4.59922 15.7625C4.41172 15.6625 4.22422 15.5625 4.04922 15.45C3.59922 15.2 3.17422 14.925 2.76172 14.65C2.73672 14.6375 2.71172 14.6125 2.69922 14.6L3.46172 22.7375C3.72422 25.225 4.74922 27.7875 10.2492 27.7875H19.7742C25.2742 27.7875 26.2992 25.225 26.5617 22.725L27.3492 14.25C27.3367 14.275 27.3117 14.3 27.2867 14.3125C26.7492 14.7 26.1992 15.0625 25.6242 15.375Z" fill="white" />
                        </svg>
                    </div>
                    <h3 className='text-white text-xl font-bold m-0 pl-2'>Job Details</h3>
                </div>

                {/* sub heading */}
                <h4 className='text-white text-xl font-bold'>Streaming App UI/UX Designing</h4>

                {/* tags */}
                <div className='flex flex-wrap items-center gap-4'>
                    <button className='secondary before:content-["UI/UX_Designer"] w-40 h-11'>UI/UX Designer</button>
                    <button className='secondary before:content-["User_Experience"] w-40 h-11'>"User Experience</button>
                    <button className='secondary before:content-["App_Designing"] w-40 h-11'>App Designing</button>
                </div>

                {/* description */}
                <p className='text-white text-sm md:text-base font-medium'>Streaming App Design</p>
                <p className='text-white text-sm md:text-base font-medium'>Design a multiplatform Streaming app that can stream music, videos, short videos and has a content creation marketplace. The app will act like a social media for content creators.</p>

                {/* button */}
                <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                    <button onClick={(e) => e.preventDefault()} className='flex items-center bg-[#171717] text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                        View Job Posting
                    </button>
                </div>
            </div>

            {/* terms */}
            <div className='p-4 space-y-6 rounded-2xl'>
                {/* title */}
                <div className='flex items-center'>
                    <div>
                        <svg className='text-white w-7 h-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M20.2375 2.5H9.7625C5.2125 2.5 2.5 5.2125 2.5 9.7625V20.225C2.5 24.7875 5.2125 27.5 9.7625 27.5H20.225C24.775 27.5 27.4875 24.7875 27.4875 20.2375V9.7625C27.5 5.2125 24.7875 2.5 20.2375 2.5Z" fill="white" />
                            <path d="M21.25 10.3125H8.75C8.2375 10.3125 7.8125 9.8875 7.8125 9.375C7.8125 8.8625 8.2375 8.4375 8.75 8.4375H21.25C21.7625 8.4375 22.1875 8.8625 22.1875 9.375C22.1875 9.8875 21.7625 10.3125 21.25 10.3125Z" fill="white" />
                            <path d="M21.25 15.9375H8.75C8.2375 15.9375 7.8125 15.5125 7.8125 15C7.8125 14.4875 8.2375 14.0625 8.75 14.0625H21.25C21.7625 14.0625 22.1875 14.4875 22.1875 15C22.1875 15.5125 21.7625 15.9375 21.25 15.9375Z" fill="white" />
                            <path d="M21.25 21.5625H8.75C8.2375 21.5625 7.8125 21.1375 7.8125 20.625C7.8125 20.1125 8.2375 19.6875 8.75 19.6875H21.25C21.7625 19.6875 22.1875 20.1125 22.1875 20.625C22.1875 21.1375 21.7625 21.5625 21.25 21.5625Z" fill="white" />
                        </svg>
                    </div>
                    <h3 className='text-white text-xl font-bold m-0 pl-2'>Terms</h3>
                </div>

                {/* client budget */}
                <div className='flex flex-wrap items-center text-white text-xl space-x-2'>
                    <div>Client Budget:</div>
                    <div className='bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center p-2 rounded-lg uppercase'>
                        <img className='w-7 h-auto mr-1' src={USDT} alt='usdt icon' />
                        USDT
                    </div>
                    <div>450</div>
                </div>

                {/* sub heading */}
                <h4 className='text-white text-xl font-bold'>How do you want to be paid ?</h4>

                {/* By Milestone radio input */}
                <div className='p-3 bg-[#272727] rounded-xl space-y-2'>
                    <div className='flex items-center space-x-2'>
                        <input type='radio' />
                        <div className='text-white text-xl'>By Milestone</div>
                    </div>
                    <p className='text-white text-xs md:text-sm font-medium'>Divide the project into smaller segments, called milestones. You'll be paid for milestones as they are completed and approved.</p>
                </div>

                {/* By Project radio input */}
                <div className='p-3 bg-[#272727] rounded-xl space-y-2'>
                    <div className='flex items-center space-x-2'>
                        <input type='radio' />
                        <div className='text-white text-xl'>By Project</div>
                    </div>
                    <p className='text-white text-xs md:text-sm font-medium'>Get your entire payment at the end, when all work has been delivered.</p>
                </div>

                {/* sub heading */}
                <h4 className='text-white text-xl font-bold'>How many milestones do you want to include ?</h4>

                {/* description input */}
                <div className='space-y-2'>
                    <label className='text-white text-sm lg:text-base font-medium'>Description</label>
                    <input
                        type='text'
                        className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                    />
                </div>

                {/* due date and set amount */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    {/* due date */}
                    <div className='space-y-2'>
                        <label className='text-white text-sm lg:text-base font-medium'>Due Date</label>
                        <input
                            type='date'
                            className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                        />
                    </div>

                    {/* set amount */}
                    <div className='space-y-2'>
                        <label className='text-white text-sm lg:text-base font-medium'>Amount</label>
                        <div className='relative'>
                            <input
                                type='number'
                                className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 pr-3 pl-[105px] py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                            />
                            <div className='h-max text-white absolute inset-y-0 my-auto left-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center px-2 py-1 rounded-md uppercase'>
                                <img className='w-6 h-auto mr-1' src={USDT} alt='usdt icon' />
                                USDT
                            </div>
                        </div>
                    </div>
                </div>

                {/* add milestone button */}
                <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                    <button onClick={(e) => e.preventDefault()} className='flex items-center bg-[#171717] text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                        <AiOutlinePlus className='w-5 h-auto mr-1' />
                        Add Milestones
                    </button>
                </div>

                {/* border line */}
                <div className='w-full border-b border-[#646587]'></div>

                {/* total amount */}
                <div className='space-y-6'>
                    <h4 className='text-white text-xl font-bold'>Total Amount</h4>
                    <p className='text-white text-sm md:text-base font-medium'>This includes all milestones, and is the amount your client will see.</p>
                    <div className='relative'>
                        <input
                            type='number'
                            className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 pr-3 pl-[105px] py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                        />
                        <div className='h-max text-white absolute inset-y-0 my-auto left-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center px-2 py-1 rounded-md uppercase'>
                            <img className='w-6 h-auto mr-1' src={USDT} alt='usdt icon' />
                            USDT
                        </div>
                    </div>
                </div>

                {/* border line */}
                <div className='w-full border-b border-[#646587]'></div>

                {/* Creo Service fees */}
                <div className='space-y-6'>
                    <h4 className='text-white text-xl font-bold'>Creo Service Fees</h4>
                    <p className='text-white text-sm md:text-base font-medium'>This includes service charge that creo charges</p>
                    <div className='relative'>
                        <input
                            type='number'
                            className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 pr-3 pl-[105px] py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                        />
                        <div className='h-max text-white absolute inset-y-0 my-auto left-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center px-2 py-1 rounded-md uppercase'>
                            <img className='w-6 h-auto mr-1' src={USDT} alt='usdt icon' />
                            USDT
                        </div>
                    </div>
                </div>

                {/* border line */}
                <div className='w-full border-b border-[#646587]'></div>

                {/* You will receive */}
                <div className='space-y-6'>
                    <h4 className='text-white text-xl font-bold'>You will Receive</h4>
                    <p className='text-white text-sm md:text-base font-medium'>Your estimated payment after service fees</p>
                    <div className='relative'>
                        <input
                            type='number'
                            className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 pr-3 pl-[105px] py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                        />
                        <div className='h-max text-white absolute inset-y-0 my-auto left-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center px-2 py-1 rounded-md uppercase'>
                            <img className='w-6 h-auto mr-1' src={USDT} alt='usdt icon' />
                            USDT
                        </div>
                    </div>
                </div>
            </div>

            {/* how long */}
            <div className='p-4 space-y-6 rounded-2xl'>
                {/* title */}
                <div className='flex items-center'>
                    <div>
                        <svg className='text-white w-7 h-auto' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" fill="white" />
                            <path d="M19.6383 19.9125C19.4758 19.9125 19.3133 19.875 19.1633 19.775L15.2883 17.4625C14.3258 16.8875 13.6133 15.625 13.6133 14.5125V9.38751C13.6133 8.87501 14.0383 8.45001 14.5508 8.45001C15.0633 8.45001 15.4883 8.87501 15.4883 9.38751V14.5125C15.4883 14.9625 15.8633 15.625 16.2508 15.85L20.1258 18.1625C20.5758 18.425 20.7133 19 20.4508 19.45C20.2633 19.75 19.9508 19.9125 19.6383 19.9125Z" fill="white" />
                        </svg>
                    </div>
                    <h3 className='text-white text-xl font-bold m-0 pl-2'>How long will this project take ?</h3>
                </div>

                {/* select */}
                <div>
                    <select className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">Select a duration</option>
                        {
                            [...Array(50)].map((index) => (
                                <option key={index} value="option">option</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/* cover letter and attachments */}
            <div className='p-4 space-y-6 rounded-2xl'>
                <h3 className='text-white text-xl font-bold m-0 pl-2'>Add Cover Letter</h3>
                {/* textarea */}
                <textarea
                    rows={6}
                    className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5]'
                ></textarea>

                <h3 className='text-white text-xl font-bold pl-2'>Attachments</h3>
                <div className='w-full h-40 flex items-center justify-center !border-2 !border-white !border-dashed rounded-xl'>
                    <div>
                        <div>
                            <input
                                ref={inputRef}
                                type="file"
                                onChange={handleFileChange}
                                className='hidden'
                            />

                            <button onClick={handleClick} className='flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
                                <AiOutlinePlus className='w-5 h-auto mr-1' />
                                Upload Photo
                            </button>
                        </div>
                        <p className='text-xs text-gray-400 mt-2'>Upload or Drag your files here</p>
                    </div>
                </div>
            </div>

            {/* cancel and submit button */}
            <div className='flex items-center justify-end space-x-4'>
                {/* cancel */}
                <div className='p-[1px] rounded-lg bg-gradient-to-r from-cyan-400 to-violet-500 inline-block'>
                    <button className='text-white text-sm md:text-sm font-semibold bg-[#171717] px-10 py-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-200'>Cancel</button>
                </div>

                {/* submit */}
                <Link to='/user/my-jobs'><button type='submit' className='text-white text-sm md:text-sm font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 px-10 py-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-200'>Submit</button></Link>
            </div>
        </form>
    )
}

export default SubmitProposal