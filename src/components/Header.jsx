import React, {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'

import CreoLogo from '../assets/images/logos/creo-logo.svg'
import { FiMenu } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'

const Header = () => {

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
        { link: '#findtalent', title: 'Find Talent'},
        { link: '#findwork', title: 'Find Work'},
        { link: '#whycreo', title: 'Why Creo?'},
    ]

    return (
        <header className='py-6 3xl:py-12 relative z-50'>
            <nav className='container flex items-center max-lg:justify-between'>
                <Link to='/'>
                    <img src={CreoLogo} alt="img" className='w-20 md:w-28 inline-block' />
                </Link>
                <div className='hidden lg:flex items-center justify-between w-full'>
                    <ul className='pl-10 space-x-6'>
                        {preLoginLinks.map((item,index) => {
                            return(
                                <a key={index} href={item.link}>{item.title}</a>
                            )
                        })}
                    </ul>
                    <div className='space-x-4'>
                        <Link to='/signup'><button className='primary w-32 h-11'>Sign Up</button></Link>
                        <Link to='/login'><button className='secondary before:content-["Log_In"] w-32 h-11'>Log In</button></Link>
                    </div>
                </div>

                <FiMenu onClick={handleNav} className='max-lg:block hidden text-3xl'/>
            </nav>

            {/* Resounsive View */}
            <div ref={ref} className={`absolute left-0 w-full h-[50vh] shadow-2xl ${showNav === true ? 'top-0' : 'top-[-50vh]'} transition-all duration-300`} style={{ backgroundColor: 'rgba(165, 20, 252, 0.2)', backdropFilter: 'blur(18px)' }}>
                <div className='py-6 container'>
                    <div className='w-full flex items-center justify-between'>
                        <img src={CreoLogo} alt="img" className='w-20 md:w-28 inline-block' />
                        <IoClose className='text-3xl' onClick={handleNav}/>
                    </div>

                    <div className='grid justify-items-center gap-6 mt-12'>
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
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header