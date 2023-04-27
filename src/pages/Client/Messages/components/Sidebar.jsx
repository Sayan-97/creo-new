import React, {Fragment} from 'react'
import { FiSearch } from 'react-icons/fi';
import { Menu, Transition } from '@headlessui/react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import avatar from '../../../../assets/images/forms/profile1.png'

const Sidebar = () => {

    const UserShortInfo = () => (
        <div className='flex items-center space-x-3 cursor-pointer'>
            {/* avatar */}
            <div className='relative'>
                <div className='relative w-16 h-16 bg-[#0F103E] rounded-full bg-cover bg-no-repeat bg-center overflow-hidden' style={{ backgroundImage: `url(${avatar})` }}></div>
                {/* active green dot */}
                <div className='w-[14px] h-[14px] bg-[#04FF33] rounded-full absolute bottom-0 right-0'></div>

                {/* active tab bar */}
                <div className='w-1 h-10 bg-white rounded-full absolute -left-4 inset-0 my-auto'></div>
            </div>
            {/* info */}
            <div className='flex-1'>
                <h3 className='text-white text-base font-bold capitalize m-0'>Eleanor Pena</h3>
                <p className='text-gray-400 text-[11px] py-1'>UX Designer</p>
                <p className='text-white text-xs line-clamp-2'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
        </div>
    );

    return (
        <div className='w-full md:w-[250px] xl:w-[300px] h-full flex flex-col'>
            {/* search */}
            <div className='bg-[#06071B] flex items-center space-x-1 p-2 rounded-2xl m-[8px] xl:m-4'>
                <FiSearch className='w-6 h-auto text-white' />
                <input type='text' placeholder='Search here' className='flex-1 w-full appearance-none bg-transparent focus:outline-none text-white placeholder:text-white text-base' />
                {/* menu */}
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className='cursor-pointer'>
                            <HiOutlineDotsHorizontal className='text-white w-7 h-auto mt-1' />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-0 z-40 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-[#0F103E] text-white' : 'text-[#0F103E]'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-xs sm:text-sm`}
                                        >
                                            Option 1
                                        </button>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            className={`${active ? 'bg-[#0F103E] text-white' : 'text-[#0F103E]'
                                                } group flex w-full items-center rounded-md px-2 py-2 text-xs sm:text-sm`}
                                        >
                                            Option 2
                                        </button>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            {/* list */}
            <div className='flex-1 w-full pb-5 overflow-auto space-y-10'>
                {/* unread list */}
                <div className='space-y-4'>
                    <label className='sticky top-0 z-20 w-full bg-[#0F103E] text-white font-medium py-2 px-3'>Unread</label>
                    <div className='space-y-8 px-3'>
                        {
                            [...Array(3)].map((index) => (
                                <UserShortInfo key={index} />
                            ))
                        }
                    </div>
                </div>

                {/* all messages list */}
                <div className='space-y-4'>
                    <label className='sticky top-0 z-20 w-full bg-[#0F103E] text-white font-medium py-2 px-3'>All messages</label>
                    <div className='space-y-8 px-3'>
                        {
                            [...Array(10)].map((index) => (
                                <UserShortInfo key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar