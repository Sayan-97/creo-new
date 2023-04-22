import React from 'react'

import Card2Img from '../../../../assets/images/pages/Card2Img.png'
import Card3Img from '../../../../assets/images/pages/Card3Img.png'
import Card4Img from '../../../../assets/images/pages/Card5Img.png'

import { BsArrowRight } from 'react-icons/bs'

const GettingStarted = () => {
    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col items-center gap-4'>
                <p className='textGrad text-xl uppercase font-semibold'>GETING STARTED</p>
                <h2>How it Works</h2>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>

                    <div className='relative bg-[#171717] rounded-xl p-[2rem] grid gap-20 overflow-hidden z-10'>
                        <p className='text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase lg:text-lg font-extrabold sm:text-base' style={{ backgroundSize: '30% 100%' }}>connect</p>
                        <div className='grid gap-3'>
                            <h2 className='text-white text-2xl font-semibold'>Connect Wallet</h2>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis. Nisl malesuada scelerisque orci sed nunc pellentesque urna enim.</p>
                            <a href="/" className='no-underline'><h5 className='flex items-center gap-2'>Get Started <BsArrowRight /></h5></a>
                        </div>
                        <img src={Card2Img} alt="img" className='absolute right-0 bottom-0 z-[-3] w-full' />
                        <div className='absolute w-[50%] h-[50%] z-[-2] right-5 bottom-[30%]' style={{ background: 'linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)', filter: 'blur(87.7069px)', transform: 'matrix(0.01, 1, 1, -0.01, 0, 0)' }}></div>
                        <div className='absolute w-[50%] h-[50%] z-[-1] left-[20%] bottom-[30%]' style={{ background: 'linear-gradient(180deg, #173B80 0%, #11573E 100%)', filter: 'blur(75.4616px)', transform: 'matrix(0.01, 1, 1, -0.01, 0, 0)' }}></div>
                    </div>

                    <div className='relative bg-[#171717] rounded-xl p-[2rem] grid gap-20 z-10 overflow-hidden'>
                        <p className='text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase lg:text-lg font-extrabold sm:text-base' style={{ backgroundSize: '20% 100%' }}>create</p>
                        <div className='grid gap-3'>
                            <h2 className='text-white text-2xl font-semibold'>Create Your Profile</h2>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis. Nisl malesuada scelerisque orci sed nunc pellentesque urna enim.</p>
                            <a href="/" className='no-underline'><h5 className='flex items-center gap-2'>Get Started <BsArrowRight /></h5></a>
                        </div>
                        <img src={Card3Img} alt="img" className='absolute right-0 bottom-0 z-[-3] w-full' />
                        <div className='absolute w-[50%] h-[50%] z-[-1] right-5 bottom-0' style={{ background: 'rgba(62, 210, 248, 0.33)', filter: 'blur(87px)' }}></div>
                        <div className='absolute w-[50%] h-[50%] z-[-2] left-[20%] bottom-[30%]' style={{ background: 'rgba(51, 94, 187, 0.39)', filter: 'blur(87px)' }}></div>
                    </div>

                    <div className='relative bg-[#171717] rounded-xl p-[2rem] grid gap-20 z-10 overflow-hidden'>
                        <p className='text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text uppercase lg:text-lg font-extrabold sm:text-base' style={{ backgroundSize: '15% 100%' }}>earn</p>
                        <div className='grid gap-3'>
                            <h4>Go to Work</h4>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis. Nisl malesuada scelerisque orci sed nunc pellentesque urna enim.</p>
                            <a href="/" className='no-underline'><h5 className='flex items-center gap-2'>Get Started <BsArrowRight /></h5></a>
                        </div>
                        <img src={Card4Img} alt="img" className='absolute right-0 bottom-0 z-[-3]' />
                        <div className='absolute w-[30%] h-[30%] right-5 bottom-[30%] z-[-2]' style={{ background: 'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)', filter: 'blur(63.1117px)' }}></div>
                        <div className='absolute w-[30%] h-[30%] right-[15%] bottom-[15%] z-[-2]' style={{ background: 'linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)', filter: 'blur(100px)' }}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GettingStarted