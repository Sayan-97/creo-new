import React, { useState, useRef, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { Popover, Transition } from '@headlessui/react';

import CreoLogo from '../assets/images/logos/creo-logo.svg'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { BiChevronDown } from 'react-icons/bi'
import { FiSearch } from 'react-icons/fi'
import userImg from '../assets/images/svg/user.svg'
import sms from '../assets/images/svg/sms.svg'
import notification from '../assets/images/svg/notification.svg'

const Header = () => {

    const dispatch = useDispatch()
    const userType = useSelector((state) => state.user.userType)

    const handleLogOut = () => {
        dispatch(logoutSuccess())
    }

    // Navbar show and hide for mobile view
    const [showNav, setShowNav] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
    }

    // Hide nav on button click
    const handleButtonClick = () => {
        setShowNav(false)
    }

    const ref = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setShowNav(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref])

    // PreLogin Links
    const preLoginLinks = [
        { link: '#findtalent', title: 'Find Talent' },
        { link: '#findwork', title: 'Find Work' },
        { link: '#whycreo', title: 'Why Creo?' },
    ]

    // Client Links
    const clientLinks = [
        {
            label: 'Jobs',
            dropdown: [
                { name: 'Post a Job', link: '/client/jobs/post-job' },
                { name: 'My Jobs', link: '/client/jobs/my-jobs' },
                { name: 'My Proposals', link: '/client/jobs/my-proposals' },
            ]
        },
        {
            label: 'Talent',
            dropdown: [
                { name: 'Hire Developers', link: '/client/hire-developers' },
                { name: 'Hire Designers', link: '/client/hire-designers' },
            ]
        },
        {
            label: 'Reports',
            dropdown: [
                { name: 'Weekly Summery', link: '/client/reports/weekly-summery' },
                { name: 'Transaction History', link: '/client/transaction-history' },
                { name: 'Timesheet', link: '/client/timesheet' },
            ]
        },
    ];

    // Freelancer Links
    const freelancerLinks = [
        {
            label: 'Find Work',
            dropdown: [
                { name: 'My Proposals', link: '/freelancer/my-proposals' },
                { name: 'Profile', link: '/freelancer/profile' },
            ]
        },
        {
            label: 'My Jobs',
            dropdown: [
                { name: 'My Jobs', link: '/freelancer/my-jobs' },
                { name: 'All Contracts', link: '/freelancer/all-contracts' },
                { name: 'Work Diary', link: '/freelancer/work-diary' },
            ]
        },
        {
            label: 'More',
            dropdown: [
                { name: 'Overview', link: '/freelancer/overview' },
                { name: 'Reports', link: '/freelancer/reports' },
                { name: 'Connect History', link: '/freelancer/connect-history' },
                { name: 'Transaction History', link: '/freelancer/transaction-history' }
            ]
        },
    ];

    const client = [
        {
            name: 'Dashboard',
            link: '/client/dashboard'
        },
        {
            name: 'Settings',
            link: '/client/settings'
        },
        {
            name: 'Log Out',
            link: '/'
        }
    ]

    const freelancers = [
        {
            name: 'Settings',
            link: '/freelancer/settings'
        },
        {
            name: 'Log Out',
            link: '/'
        }
    ]

    return (
        <header className='py-8 3xl:py-12 relative z-50'>
            <nav className='container flex items-center max-lg:justify-between'>
                <Link to={`${userType === 'client' ? '/client/dashboard' : userType === 'freelancer' ? '/freelancer/findwork' : '/'}`}>
                    <img src={CreoLogo} alt="img" className='w-20 md:w-24 inline-block' />
                </Link>
                <div className='hidden lg:flex items-center justify-between w-full'>

                    {/* Client Links */}
                    {userType === 'client' ? (

                        <>
                            <ul className='flex pl-10 space-x-6'>
                                {
                                    clientLinks.map((item, index) => (
                                        item.dropdown
                                            ? <Popover key={index} className="relative">
                                                {({ open, close }) => (
                                                    <>
                                                        <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} flex items-center text-lg font-medium transition-all ease-in-out duration-150 focus:outline-none group py-2 xl:py-0 hover:scale-100 outline-none`}>
                                                            <p className='text-xl'>{item.label}</p>
                                                            <BiChevronDown
                                                                className={`${open ? 'rotate-180 text-[#A334FF]' : 'text-white group-hover:!text-[#A334FF]'} text-xl mx-1 transition duration-150 ease-in-out`}
                                                                aria-hidden="true"
                                                            />
                                                        </Popover.Button>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                    <div className="relative bg-accent2 p-2">
                                                                        {
                                                                            item.dropdown.map((dropdownItem, dropdownindex) => (
                                                                                <Link key={dropdownindex} to={dropdownItem.link} onClick={close}>
                                                                                    <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                        {dropdownItem.name}
                                                                                    </div>
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                            : <Link key={index} to={item.link}>
                                                <div className='text-white hover:!text-[#A334FF] text-base font-semibold transition-all ease-in-out duration-150 py-2 xl:py-0 xl:px-4'>{item.label}</div>
                                            </Link>
                                    ))
                                }
                            </ul>

                            <div className='flex items-center space-x-6'>
                                <div className='bg-gradient p-[1px] rounded-button relative'>
                                    <FiSearch className='absolute top-[50%] translate-y-[-50%] left-2' />
                                    <input type="search" className='bg-background pl-8 outline-none text-white' placeholder='Search Here' />
                                </div>

                                <div className='flex gap-4'>
                                    <Link to='/client/messages'>
                                        <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                            <img src={sms} alt="img" />
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                        </button>
                                    </Link>

                                    <Link to='/user/messages'>
                                        <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                            <img src={notification} alt="img" />
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                        </button>
                                    </Link>

                                    <Popover className='relative'>
                                        {({ open, close }) => (
                                            <>
                                                <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center`} style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                    <img src={userImg} alt="img" />
                                                </Popover.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                            <div className="relative bg-accent2 p-2">
                                                                {
                                                                    client.map((item, index) => (
                                                                        <Link key={index} to={item.link} onClick={item.name === 'Log Out' ? handleLogOut : close}>
                                                                            <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                {item.name}
                                                                            </div>
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </div>
                            </div>
                        </>

                        // Freelancer Links
                    ) : userType === 'freelancer' ? (

                        <>
                            <ul className='flex pl-10 space-x-6'>
                                {
                                    freelancerLinks.map((item, index) => (
                                        item.dropdown
                                            ? <Popover key={index} className="relative">
                                                {({ open, close }) => (
                                                    <>
                                                        <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} flex items-center text-lg font-medium transition-all ease-in-out duration-150 focus:outline-none group py-2 xl:py-0 hover:scale-100 outline-none`}>
                                                            <p className='text-xl'>{item.label}</p>
                                                            <BiChevronDown
                                                                className={`${open ? 'rotate-180 text-[#A334FF]' : 'text-white group-hover:!text-[#A334FF]'} text-xl mx-1 transition duration-150 ease-in-out`}
                                                                aria-hidden="true"
                                                            />
                                                        </Popover.Button>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                    <div className="relative bg-accent2 p-2">
                                                                        {
                                                                            item.dropdown.map((dropdownItem, dropdownindex) => (
                                                                                <Link key={dropdownindex} to={dropdownItem.link} onClick={close}>
                                                                                    <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                        {dropdownItem.name}
                                                                                    </div>
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                            : <Link key={index} to={item.link}>
                                                <div className='text-white hover:!text-[#A334FF] text-base font-semibold transition-all ease-in-out duration-150 py-2 xl:py-0 xl:px-4'>{item.label}</div>
                                            </Link>
                                    ))
                                }
                            </ul>

                            <div className='flex items-center space-x-6'>
                                <div className='bg-gradient p-[1px] rounded-button relative'>
                                    <FiSearch className='absolute top-[50%] translate-y-[-50%] left-2' />
                                    <input type="search" className='bg-background pl-8 outline-none text-white' placeholder='Search Here' />
                                </div>

                                <div className='flex gap-4'>
                                    <Link to='/freelancer/messages'>
                                        <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                            <img src={sms} alt="img" />
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                        </button>
                                    </Link>

                                    <Link to='/user/messages'>
                                        <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                            <img src={notification} alt="img" />
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                            <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                        </button>
                                    </Link>

                                    <Popover className='relative'>
                                        {({ open, close }) => (
                                            <>
                                                <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center`} style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                    <img src={userImg} alt="img" />
                                                </Popover.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                            <div className="relative bg-accent2 p-2">
                                                                {
                                                                    freelancers.map((item, index) => (
                                                                        <Link key={index} to={item.link} onClick={item.name === 'Log Out' ? handleLogOut : close}>
                                                                            <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                {item.name}
                                                                            </div>
                                                                        </Link>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                </div>
                            </div>
                        </>

                        // PreLogin Links
                    ) : (
                        <>
                            <ul className='pl-10 space-x-6'>
                                {preLoginLinks.map((item, index) => {
                                    return (
                                        <a key={index} href={item.link}>{item.title}</a>
                                    )
                                })}
                            </ul>
                            <div className='space-x-4'>
                                <Link to='/signup'><button className='primary w-32 h-9'>Sign Up</button></Link>
                                <Link to='/login'><button className='secondary before:content-["Log_In"] w-32 h-9'>Log In</button></Link>
                            </div>
                        </>
                    )}

                </div>

                <FiMenu onClick={handleNav} className='max-lg:block hidden text-3xl' />
            </nav>

            {/* Responsive View */}
            <div ref={ref} className={`block lg:hidden absolute left-0 w-full h-[55vh] shadow-2xl ${showNav === true ? 'top-0' : 'top-[-55vh]'} transition-all duration-300`} style={{ backgroundColor: 'rgba(165, 20, 252, 0.2)', backdropFilter: 'blur(18px)' }}>
                <div className='py-6 container'>
                    <div className='w-full flex items-center justify-between'>
                        <img src={CreoLogo} alt="img" className='w-20 md:w-28 inline-block' />
                        <IoClose className='text-3xl' onClick={handleNav} />
                    </div>

                    <div className='grid justify-items-center gap-6 mt-12'>
                        {userType === 'client' ? (
                            <>
                                <ul className='grid space-y-2 justify-items-center'>
                                    {
                                        clientLinks.map((item, index) => (
                                            item.dropdown
                                                ? <Popover key={index} className="relative">
                                                    {({ open, close }) => (
                                                        <>
                                                            <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} flex items-center text-lg font-medium transition-all ease-in-out duration-150 focus:outline-none group py-2 xl:py-0 hover:scale-100 outline-none`}>
                                                                <p className='text-xl'>{item.label}</p>
                                                                <BiChevronDown
                                                                    className={`${open ? 'rotate-180 text-[#A334FF]' : 'text-white group-hover:!text-[#A334FF]'} text-xl mx-1 transition duration-150 ease-in-out`}
                                                                    aria-hidden="true"
                                                                />
                                                            </Popover.Button>
                                                            <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-200"
                                                                enterFrom="opacity-0 translate-y-1"
                                                                enterTo="opacity-100 translate-y-0"
                                                                leave="transition ease-in duration-150"
                                                                leaveFrom="opacity-100 translate-y-0"
                                                                leaveTo="opacity-0 translate-y-1"
                                                            >
                                                                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                        <div className="relative bg-accent2 p-2">
                                                                            {
                                                                                item.dropdown.map((dropdownItem, dropdownindex) => (
                                                                                    <Link key={dropdownindex} to={dropdownItem.link} onClick={close}>
                                                                                        <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                            {dropdownItem.name}
                                                                                        </div>
                                                                                    </Link>
                                                                                ))
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </Popover.Panel>
                                                            </Transition>
                                                        </>
                                                    )}
                                                </Popover>
                                                : <Link key={index} to={item.link}>
                                                    <div className='text-white hover:!text-[#A334FF] text-base font-semibold transition-all ease-in-out duration-150 py-2 xl:py-0 xl:px-4'>{item.label}</div>
                                                </Link>
                                        ))
                                    }
                                </ul>

                                <div className='grid space-y-6'>
                                    <div className='bg-gradient p-[1px] rounded-button relative'>
                                        <FiSearch className='absolute top-[50%] translate-y-[-50%] left-2' />
                                        <input type="search" className='bg-background pl-8 outline-none text-white' placeholder='Search Here' />
                                    </div>

                                    <div className='flex justify-center gap-4'>
                                        <Link to='/client/messages'>
                                            <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                <img src={sms} alt="img" />
                                                <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                                <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                            </button>
                                        </Link>

                                        <Link to='/user/messages'>
                                            <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                <img src={notification} alt="img" />
                                                <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                                <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                            </button>
                                        </Link>

                                        <Popover className='relative'>
                                            {({ open, close }) => (
                                                <>
                                                    <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center`} style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                        <img src={userImg} alt="img" />
                                                    </Popover.Button>
                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                <div className="relative bg-accent2 p-2">
                                                                    {
                                                                        client.map((item, index) => (
                                                                            <Link key={index} to={item.link} onClick={item.name === 'Log Out' ? handleLogOut : close}>
                                                                                <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                    {item.name}
                                                                                </div>
                                                                            </Link>
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    </div>
                                </div>
                            </>
                        ) : userType === 'freelancer' ? (
                            <>
                                    <ul className='grid space-y-2 justify-items-center'>
                                        {
                                            freelancerLinks.map((item, index) => (
                                                item.dropdown
                                                    ? <Popover key={index} className="relative">
                                                        {({ open, close }) => (
                                                            <>
                                                                <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} flex items-center text-lg font-medium transition-all ease-in-out duration-150 focus:outline-none group py-2 xl:py-0 hover:scale-100 outline-none`}>
                                                                    <p className='text-xl'>{item.label}</p>
                                                                    <BiChevronDown
                                                                        className={`${open ? 'rotate-180 text-[#A334FF]' : 'text-white group-hover:!text-[#A334FF]'} text-xl mx-1 transition duration-150 ease-in-out`}
                                                                        aria-hidden="true"
                                                                    />
                                                                </Popover.Button>
                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-200"
                                                                    enterFrom="opacity-0 translate-y-1"
                                                                    enterTo="opacity-100 translate-y-0"
                                                                    leave="transition ease-in duration-150"
                                                                    leaveFrom="opacity-100 translate-y-0"
                                                                    leaveTo="opacity-0 translate-y-1"
                                                                >
                                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                            <div className="relative bg-accent2 p-2">
                                                                                {
                                                                                    item.dropdown.map((dropdownItem, dropdownindex) => (
                                                                                        <Link key={dropdownindex} to={dropdownItem.link} onClick={close}>
                                                                                            <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                                {dropdownItem.name}
                                                                                            </div>
                                                                                        </Link>
                                                                                    ))
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Popover>
                                                    : <Link key={index} to={item.link}>
                                                        <div className='text-white hover:!text-[#A334FF] text-base font-semibold transition-all ease-in-out duration-150 py-2 xl:py-0 xl:px-4'>{item.label}</div>
                                                    </Link>
                                            ))
                                        }
                                    </ul>

                                    <div className='grid space-y-6'>
                                        <div className='bg-gradient p-[1px] rounded-button relative'>
                                            <FiSearch className='absolute top-[50%] translate-y-[-50%] left-2' />
                                            <input type="search" className='bg-background pl-8 outline-none text-white' placeholder='Search Here' />
                                        </div>

                                        <div className='flex justify-center gap-4'>
                                            <Link to='/freelancer/messages'>
                                                <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                    <img src={sms} alt="img" />
                                                    <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                                    <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                                </button>
                                            </Link>

                                            <Link to='/user/messages'>
                                                <button className='w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center relative' style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                    <img src={notification} alt="img" />
                                                    <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5'></div>
                                                    <div className='bg-green-400 w-3 h-3 rounded-full absolute -top-0.5 -right-0.5 animate-ping'></div>
                                                </button>
                                            </Link>

                                            <Popover className='relative'>
                                                {({ open, close }) => (
                                                    <>
                                                        <Popover.Button className={`${open ? 'text-[#A334FF]' : 'text-white hover:!text-[#A334FF]'} w-10 h-10 hover:scale-105 transition-all ease-in-out rounded-full text-xl leading-normal flex justify-center items-center`} style={{ background: 'linear-gradient(#0A0A0A, #0A0A0A) padding-box, linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%) border-box', borderWidth: '2px', borderStyle: 'solid', borderColor: 'transparent' }}>
                                                            <img src={userImg} alt="img" />
                                                        </Popover.Button>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-200"
                                                            enterFrom="opacity-0 translate-y-1"
                                                            enterTo="opacity-100 translate-y-0"
                                                            leave="transition ease-in duration-150"
                                                            leaveFrom="opacity-100 translate-y-0"
                                                            leaveTo="opacity-0 translate-y-1"
                                                        >
                                                            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen min-w-[200px] max-w-max -translate-x-1/2 transform">
                                                                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-20">
                                                                    <div className="relative bg-accent2 p-2">
                                                                        {
                                                                            freelancers.map((item, index) => (
                                                                                <Link key={index} to={item.link} onClick={item.name === 'Log Out' ? handleLogOut : close}>
                                                                                    <div className='text-base font-medium text-white hover:bg-[#575757] rounded-md p-2 transition-all ease-in-out duration-150'>
                                                                                        {item.name}
                                                                                    </div>
                                                                                </Link>
                                                                            ))
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        </div>
                                    </div>
                            </>
                        ) : (
                            <>
                                <ul className='grid justify-items-center space-y-6'>
                                    {preLoginLinks.map((item, index) => {
                                        return (
                                            <a onClick={handleButtonClick} key={index} href={item.link}>{item.title}</a>
                                        )
                                    })}
                                </ul>
                                <div className='space-x-4'>
                                    <Link to='/signup'><button onClick={handleButtonClick} className='primary w-32 h-11'>Sign Up</button></Link>
                                    <Link to='/login'><button onClick={handleButtonClick} className='secondary before:content-["Log_In"] w-32 h-11'>Log In</button></Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header