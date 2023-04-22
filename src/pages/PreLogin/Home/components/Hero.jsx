import React from 'react'

import HeroImg from '../../../../assets/images/pages/HeroImg2.png'
import Binance from '../../../../assets/images/logos/binance.png'
import Dropbox from '../../../../assets/images/logos/dropbox.png'
import Microsoft from '../../../../assets/images/logos/microsoft2.png'
import Tesla from '../../../../assets/images/logos/tesla.png'
import Upwork from '../../../../assets/images/logos/upwork.png'

const Hero = () => {

    const TrustedArray = [Microsoft, Binance, Tesla, Upwork, Dropbox];

    return (
        <div className='md:py-2 lg:py-6 relative'>
            {/* Gradient left */}
            <div className='absolute w-[35%] h-[35%] bg-[#1CBBF6] opacity-[0.5] filter blur-[267px] top-[15%] left-[-15%] rounded-full '></div>

            {/* Gradient right */}
            <div className='w-[20%] h-[40%] absolute bg-gradient-to-r from-[#15DBFF] to-[#A514FC] opacity-[0.8] filter blur-[142px] rounded-full bottom-[8%] lg:right-60 lg:bottom-[40%] '></div>
            <div className='container flex flex-col items-center lg:flex-row gap-8 relative'>
                <div className='w-full space-y-6 flex flex-col justify-center'>

                    <h1>AI Powered Marketplace for Gamers.</h1>

                    <p>
                        Welcome to the future of game development with our cutting-edge gamelancer marketplace that leverages the power of artificial intelligence (AI) and blockchain technology! Our platform brings together talented game developers from around the world, providing a seamless and secure environment for them to connect, collaborate, and create the next generation of games.
                    </p>

                    <div className='flex gap-5'>
                        <button className='primary w-36 h-14'>Find Work</button>
                        <button className='secondary w-36 h-14 before:content-["Find_Talent"]'>Find Talent</button>
                    </div>

                    <div className='grid gap-6'>
                        <h6 className='font-medium'>Trusted By</h6>
                        <div className='w-full flex flex-wrap gap-4'>
                            <div className='flex flex-wrap items-center'>
                                {
                                    TrustedArray.map((item, index) => (
                                        <div key={index} className='w-20 sm:w-24 mr-6 mb-6'>
                                            <img src={item} alt='Trusted' className='w-full h-auto' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <img src={HeroImg} alt="img" className='w-full md:w-[70%] lg:w-[42%]' />

            </div>
        </div>
    )
}

export default Hero