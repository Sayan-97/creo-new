import React from 'react'

// Logo
import Logo from '../assets/images/logos/creo-logo.svg'

import { MdOutlineFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {

    // Prelogin Links
    const preLoginLinks = [
        { name: 'Find Work', link: '#findwork' },
        { name: 'Find Talent', link: '#findtalent' },
        { name: 'Why Creo?', link: '#whycreo' },
    ]

    return (
        <div className='space-y-8 py-6 container'>
            <hr className='border-divide' />
            <div className='md:flex items-center grid justify-items-center max-md:space-y-4'>
                <img src={Logo} alt="img" className='inline-flex w-24' />
                <div className='w-full md:flex max-md:space-y-4 items-center justify-between md:pl-12'>
                    <ul className='max-md:grid justify-items-center space-y-6 md:space-x-8'>
                        {preLoginLinks.map((item, index) => {
                            return (
                                <a key={index} href={item.link}>{item.name}</a>
                            )
                        })}
                    </ul>
                    <div className='flex max-md:justify-center gap-4'>
                        <a href="">
                            <div className='bg-gradient p-[1px] rounded-full'>
                                <div className='bg-background rounded-full p-2'>
                                    <MdOutlineFacebook />
                                </div>
                            </div>
                        </a>

                        <a href="">
                            <div className='bg-gradient p-[1px] rounded-full'>
                                <div className='bg-background rounded-full p-2'>
                                    <AiFillLinkedin />
                                </div>
                            </div>
                        </a>

                        <a href="">
                            <div className='bg-gradient p-[1px] rounded-full'>
                                <div className='bg-background rounded-full p-2'>
                                    <BsDiscord />
                                </div>
                            </div>
                        </a>

                        <a href="">
                            <div className='bg-gradient p-[1px] rounded-full'>
                                <div className='bg-background rounded-full p-2'>
                                    <BsTwitter />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <hr className='border-divide' />
                <span className='text-textGray'>2023 Creo Network all rights reserved.</span>
            </div>
        </div>
    )
}

export default Footer
