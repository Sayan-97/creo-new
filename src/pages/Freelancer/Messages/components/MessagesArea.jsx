import React from 'react'
import { HiOutlinePaperAirplane, HiPaperClip } from 'react-icons/hi';
import { IoImageOutline } from 'react-icons/io5';
import { FiPhone, FiSearch, FiVideo } from 'react-icons/fi';
import avatar from '../../../../assets/images/forms/profile1.png'

const MessagesArea = () => {

    const messageArray = [
        { message: '1' },
        { message: '2', myMessage: true },
        { message: '3', myMessage: true },
        { message: '4' },
        { message: '5', myMessage: true },
        { message: '6' },
        { message: '7' },
        { message: '8', myMessage: true },
        { message: '9' },
        { message: '10' },
        { message: '11', myMessage: true },
        { message: '12', myMessage: true },
        { message: '13' },
        { message: '14', myMessage: true },
        { message: '15' },
        { message: '16' },
        { message: '17', myMessage: true },
        { message: '18' }
    ];

    return (
        <div className='flex-1 h-full p-[12px] xl:p-6'>
            <div className='w-full h-full flex flex-col bg-[#0F103E] rounded-3xl overflow-hidden'>
                {/* header */}
                <div className='w-full flex items-center bg-[#06071B] p-3'>
                    <div className='flex-1'>
                        <div className='flex items-center space-x-2'>
                            <div className='w-12 h-12 bg-white rounded-full overflow-hidden bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${avatar})` }}></div>
                            <div>
                                <h4 className='text-white text-sm font-bold m-0'>Ronald Richards</h4>
                                <p className='text-gray-400 text-[11px]'>UX Designer</p>
                                <p className='text-white text-xs'>Online</p>
                            </div>
                        </div>
                    </div>
                    {/* action icons */}
                    <div className='flex items-center space-x-4'>
                        <button>
                            <FiPhone className='w-5 h-auto text-white' />
                        </button>
                        <button>
                            <FiVideo className='w-5 h-auto text-white' />
                        </button>
                        <button>
                            <FiSearch className='w-5 h-auto text-white' />
                        </button>
                    </div>
                </div>

                {/* message area */}
                <div className='flex-1 flex flex-col w-full overflow-auto'>
                    {/* messages container */}
                    <div className='flex-1 w-full flex flex-col-reverse p-3 space-y-reverse space-y-6 bg-accent'>
                        {/* message */}
                        {
                            messageArray.map((item, index) => (
                                <div key={index} className='w-full space-y-2'>
                                    {/* name and date */}
                                    <div className={`${item.myMessage ? 'justify-end' : ''} flex items-center space-x-2`}>
                                        {
                                            !item.myMessage &&
                                            <div className='flex items-center space-x-2'>
                                                <div className='w-6 h-6 bg-[#201E7B] rounded-full overflow-hidden bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${avatar})` }}></div>
                                                <p className='text-white text-xs capitalize'>Ronald Richards</p>
                                            </div>
                                        }
                                        <p className='text-gray-400 text-[11px]'>13:35</p>
                                    </div>
                                    <div className={`${item.myMessage ? 'rounded-tr-none ml-auto' : 'rounded-tl-none'} w-10/12 bg-[#201E7B] rounded-xl p-2`}>
                                        <p className='text-white text-xs'>{item.message} Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* type area */}
                    <div className='bg-accent sticky bottom-0 w-full p-3'>
                        <div className='bg-[#06071B] w-full flex items-center space-x-3 p-3 rounded-2xl'>
                            <input type='text' placeholder='Write your message' className='flex-1 w-full text-sm appearance-none bg-transparent text-white placeholder:text-white' />
                            <div className='flex items-center space-x-3'>
                                <button>
                                    <HiPaperClip className='w-5 h-auto text-white' />
                                </button>
                                <button>
                                    <IoImageOutline className='w-5 h-auto text-white' />
                                </button>
                                <button className='w-9 h-9 bg-gradient rounded-full p-2 rotate-45'>
                                    <HiOutlinePaperAirplane className='w-full h-auto text-white' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesArea