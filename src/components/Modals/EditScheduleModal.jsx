import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { RxCrossCircled } from 'react-icons/rx'

import USDT from '../../assets/images/svg/USDT.svg'

const EditScheduleModal = ({ show, setSchModal }) => {

    const modalRef = useRef();

    useEffect(() => {
        // Add event listener to modal overlay
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setSchModal();
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setSchModal]);

    return show ? ReactDOM.createPortal(
        <React.Fragment>
            <div className='fixed top-0 left-0 w-full h-full z-20 pt-10 pb-5 overflow-y-scroll hide-scrollbar' style={{ background: 'rgba(0, 0, 0, 0.52)' }}>
                <div ref={modalRef} className='w-11/12 lg:w-[50%] 3xl:w-[40%] py-10 px-10 mx-auto space-y-4 bg-[#171717] rounded-xl text-white'>

                    {/* Head */}
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='text-2xl font-semibold'>Edit Schedule</h2>
                        <RxCrossCircled onClick={setSchModal} className='text-xl cursor-pointer hover:rotate-90 transition-all ease-in-out duration-300' />
                    </div>

                    <form className='space-y-10'>
                        <div className='w-full text-left space-y-10 py-6'>

                            {/* Preferred payment methods */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Preferred payment methods</label>
                                <p className='text-white text-sm md:text-base'>Metamask  ID - <span>2329UR49823RHJKI</span></p>
                            </div>

                            {/* Withdrawal Fees */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Withdrawal Fees</label>
                                <div className='flex items-center text-white text-sm md:text-base space-x-2'>
                                    <div className='bg-gradient-to-r from-cyan-400 to-violet-500 text-sm flex items-center p-2 rounded-lg uppercase'>
                                        <img className='w-7 h-auto mr-1' src={USDT} alt='usdt icon' />
                                        USDT
                                    </div>
                                    <div>0.04 <span>Per payment</span></div>
                                </div>
                            </div>

                            {/* Preferred payment schecule */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Preferred payment schecule</label>
                                <p className='text-white text-sm md:text-base'>Earnings will be released upon your request. Learn more</p>
                                <div className='flex !items-start space-x-2'>
                                    <div>
                                        <input
                                            type='checkbox'
                                            className='lg:w-5 lg:h-5'
                                        />
                                    </div>
                                    <p className='text-white text-sm lg:text-base'>Quarterly (Mar 27, 2023)</p>
                                </div>
                                <div className='flex !items-start space-x-2'>
                                    <div>
                                        <input
                                            type='checkbox'
                                            className='lg:w-5 lg:h-5'
                                        />
                                    </div>
                                    <p className='text-white text-sm lg:text-base'>Monthly (last Wednesday of each month)</p>
                                </div>
                                <div className='flex !items-start space-x-2'>
                                    <div>
                                        <input
                                            type='checkbox'
                                            className='lg:w-5 lg:h-5'
                                        />
                                    </div>
                                    <p className='text-white text-sm lg:text-base'>Twice per month (1st and 3rd Wednesday of each month)</p>
                                </div>
                                <div className='flex !items-start space-x-2'>
                                    <div>
                                        <input
                                            type='checkbox'
                                            className='lg:w-5 lg:h-5'
                                        />
                                    </div>
                                    <p className='text-white text-sm lg:text-base'>Weekly (every Wednesday)</p>
                                </div>
                            </div>

                            {/* Only when balance is */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Only when balance is</label>
                                <div>
                                    <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base text-gray-900 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">USDT 0.04 or more</option>
                                        {
                                            [...Array(5)].map((index) => (
                                                <option key={index} value="question">Option</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <p className='text-white text-xs md:text-sm font-medium'>
                                    Minimize withdrawal fees by choosing larger amounts. Learn more. <a href='#' className='text-white hover:!text-[#9359d5] font-semibold cursor-pointer'>Learn more</a>
                                </p>
                            </div>

                            {/* Reserve balance */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Reserve balance</label>
                                <p className='text-white text-xs md:text-sm font-medium'>
                                    Set aside money each month to use for Connects.
                                </p>
                                <div>
                                    <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base text-gray-900 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                                        <option value="">Select a reserve balance</option>
                                        {
                                            [...Array(5)].map((index) => (
                                                <option key={index} value="question">Option</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            {/* Next payment (based on your schedule) */}
                            <div className='space-y-2'>
                                <label className='text-white text-base lg:text-lg font-semibold'>Next payment (based on your schedule)</label>
                                <p className='text-white text-sm md:text-base'>March 27, 2023</p>
                            </div>
                        </div>

                        {/* cancel and Save button */}
                        <div className='flex items-center justify-end space-x-4'>
                            {/* cancel */}
                            <button className='text-white text-sm md:text-sm font-semibold bg-[#222354] px-10 py-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-200'>Cancel</button>

                            {/* Save */}
                            <button type='submit' className='text-white text-sm md:text-sm font-semibold bg-[#201E7B] px-10 py-3 rounded-lg hover:scale-105 transition-all ease-in-out duration-200'>Save</button>
                        </div>
                    </form>

                </div>
            </div>
        </React.Fragment>, document.body
    ) : null
}

export default EditScheduleModal
