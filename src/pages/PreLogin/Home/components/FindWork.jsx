import React from 'react'

import EnterpriseImage from '../../../../assets/images/pages/EnterpriseImage.png'

const FindWork = () => {

    const BlockchainSvg = () => (
        
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.18 21.5C11.18 23.3999 9.63991 24.94 7.74005 24.94C5.84019 24.94 4.30005 23.3999 4.30005 21.5C4.30005 19.6002 5.84019 18.06 7.74005 18.06C9.63991 18.06 11.18 19.6002 11.18 21.5ZM11.18 21.5H31.82M31.82 21.5C31.82 23.3999 33.3602 24.94 35.26 24.94C37.1599 24.94 38.7 23.3999 38.7 21.5C38.7 19.6002 37.1599 18.06 35.26 18.06C33.3602 18.06 31.82 19.6002 31.82 21.5ZM31.82 7.74005C31.82 9.63991 33.3602 11.18 35.26 11.18C37.1599 11.18 38.7 9.63991 38.7 7.74005C38.7 5.84019 37.1599 4.30005 35.26 4.30005C33.3602 4.30005 31.82 5.84019 31.82 7.74005ZM31.82 7.74005H21.93C20.9801 7.74005 20.21 8.51012 20.21 9.46005V33.54C20.21 34.49 20.9801 35.26 21.93 35.26H31.82M31.82 35.26C31.82 37.1599 33.3602 38.7 35.26 38.7C37.1599 38.7 38.7 37.1599 38.7 35.26C38.7 33.3602 37.1599 31.82 35.26 31.82C33.3602 31.82 31.82 33.3602 31.82 35.26Z" stroke="white" stroke-width="3" stroke-linecap="round" />
        </svg>
    )
    const AiSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.05 32.425L24.35 12M11.45 29.2L5 22.75L11.45 16.3M32.95 16.3L39.4 22.75L32.95 29.2" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

    const TetherSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7506 17.6915C6.3892 19.0614 3.22559 23.1359 3.22559 27.9494C3.22559 33.8865 8.03852 38.6994 13.9756 38.6994C16.9828 38.6994 19.7016 37.4646 21.6526 35.4744C23.5535 33.5354 24.7256 30.8793 24.7256 27.9494M32.2506 17.6915C36.6124 19.0611 39.7765 23.1359 39.7765 27.9497C39.7765 33.8867 34.9635 38.6997 29.0265 38.6997C26.606 38.6997 24.3724 37.8997 22.5756 36.5498M32.2506 15.0492C32.2506 20.9862 27.4376 25.7992 21.5006 25.7992C15.5635 25.7992 10.7506 20.9862 10.7506 15.0492C10.7506 9.11213 15.5635 4.29919 21.5006 4.29919C27.4376 4.29919 32.2506 9.11213 32.2506 15.0492Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

    const BreifcaseSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.30005 4.30005V38.7H38.7M12.9 25.8003L20.425 18.2753L25.8 23.6503L35.4753 13.975" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

    const Array = [
        { title: 'Blockchain Developer', icon: BlockchainSvg, desc: 'Join our Creo Network and unleash your blockchain expertise to revolutionize the future of game development, with exciting opportunities to showcase your skills, connect with industry leaders, and shape the gaming landscape like never before!' },
        { title: 'Game Developer', icon: AiSvg, desc: 'Unlock New Horizons: Join our Game Developer Web App and Harness the Power of Blockchain, AI, and other Cutting-Edge Technologies to Collaborate, Create, and Thrive in the Dynamic World of Game Development!' },
        { title: 'Game Designer', icon: TetherSvg, desc: 'Unleash Your Creativity: Join our Web App for Game Designers and Harness the Power of Blockchain, AI, and Cutting-Edge Technologies to Bring Your Vision to Life, Collaborate with Fellow Designers, and Shape the Future of Gaming' },
        { title: 'Game Strategist', icon: BreifcaseSvg, desc: 'Strategize the Future of Gaming: Join our Web App for Game Strategists and Utilize the Power of Blockchain, AI, and other Cutting-Edge Technologies to Plan, Optimize, and Innovate the Next Generation of Games, Collaborate with Industry Experts, and Make Your Mark in the Gaming Industry!' }
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            {/* grid */}
            <div className='container lg:grid grid-cols-12 gap-[0px] lg:gap-[80px] space-y-10 lg:space-y-0'>
                <div className='relative col-span-12 lg:col-span-6 z-10'>
                    <div className='absolute top-[10%] left-[2%] w-[90%] h-[90%] z-[-1] rounded-full' style={{ background: 'linear-gradient(270.35deg, #4031F5 0.26%, #C053B0 99.68%)', opacity: 0.55, filter: 'blur(247px)', mixBlendMode: 'screen' }}></div>
                    <img src={EnterpriseImage} alt='Enterprise' className='w-full sm:w-9/12 lg:w-full h-auto mx-auto lg:mt-32' />
                </div>

                <div className='col-span-12 lg:col-span-6 space-y-4'>
                    <span className='textGrad text-xl uppercase font-semibold'>FIND WORK AND tALENTS</span>
                    <h2>Find Your Perfect <br /> Match!</h2>
                    <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-tr-[500px] rounded-br-[500px]' ></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 pb-[20px]'>
                        {
                            Array.map((item, index) => (
                                <div key={index} className='pt-4 rounded-2xl space-y-4'>
                                    <div className="p-0.5 mx-auto max-w-sm rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 inline-block">
                                        <div className="bg-[#0E1013] p-2 rounded-full">
                                            <item.icon className='w-8 h-auto' />
                                        </div>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p className='text-base'>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FindWork