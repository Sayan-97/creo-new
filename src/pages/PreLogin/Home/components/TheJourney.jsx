import React from 'react'

import BgGrad from '../../../../assets/images/pages/roadmap-grad.png'
import Sphere from '../../../../assets/images/pages/sphere.png'
import Line from '../../../../assets/images/pages/roadmap-line.png'

const TheJourney = () => {

    const roadmap = [
        {
            tag: 'Igniting the Spark (Months 1-3)',
            listItems: [
                "Lay the foundation for Creo Network by building a robust blockchain-powered freelance marketplace exclusively for gamers.",
                "Engage passionate gamers and freelancers, onboard them onto the platform, and foster a vibrant community that thrives on collaboration and opportunity.",
                "Conduct rigorous testing and optimization to ensure a seamless user experience, while implementing top-notch security measures to safeguard user data and transactions.",
            ]
        },
        {
            tag: 'Expanding Horizons (Months 4-6)',
            listItems: [
                "Propel Creo Network to new heights by implementing targeted marketing strategies and partnerships to attract a diverse range of gamers and clients.",
                "Forge strategic alliances with game development studios, industry influencers, and esports organizations to amplify Creo Network's presence and credibility.",
                "Continuously innovate by introducing exciting features and services, tailored to the evolving needs of our dynamic community.",
            ]
        },
        {
            tag: 'Cultivating Growth (Months 7-9)',
            listItems: [
                "Cultivate rapid growth by establishing strong collaborations with renowned game publishers, tapping into exclusive freelance opportunities and prestigious projects.",
                "Embrace the power of AI algorithms and machine learning to create a smarter, more efficient matching process, connecting gamers with the perfect clients and projects.",
                "Launch a captivating referral program, empowering our community to become ambassadors and fuel our organic expansion.",
            ]
        },
        {
            tag: 'Ecosystem Flourishing (Months 10-12)',
            listItems: [
                "Empower our community further by introducing a decentralized governance model, allowing users to actively participate in shaping the future of Creo Network.",
                "Collaborate with like-minded blockchain projects to unlock cross-platform functionality, expanding the ecosystem and fostering interoperability.",
                "Continuously evolve and enhance the platform based on user feedback, industry trends, and cutting-edge technologies, ensuring Creo Network remains the pinnacle of the freelance gaming revolution.",
            ]
        },
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='relative w-full flex flex-col items-center z-10'>

                {/* Background Pics */}
                <img src={BgGrad} alt="img" className='absolute max-md:hidden max-lg:top-[30%] top-[10%]' />
                <img src={Sphere} alt="img" className='absolute w-[6%] z-[-1] bottom-[15%] right-0' />

                {/* Background Gradients Left */}
                <div className='absolute w-[10%] h-[20%] top-[25%] left-[10%]' style={{ background: 'linear-gradient(180deg, rgba(24, 255, 158, 0) 0%, #17FFE3 100%)', filter: 'blur(116.227px)', transform: 'matrix(0.01, 1, 1, -0.01, 0, 0)' }}></div>
                <div className='absolute w-[20%] h-[20%] top-[23%] left-[-5%]' style={{ background: 'linear-gradient(180deg, #173B80 0%, #11573E 100%)', filter: 'blur(100px)', transform: 'matrix(0.01, 1, 1, -0.01, 0, 0)' }}></div>

                {/* Background Gradients Right */}
                <div className='absolute w-[11%] h-[50%] right-[-5%] bottom-[22%]' style={{ background: 'linear-gradient(180deg, rgba(24, 75, 255, 0) 0%, #174AFF 100%)', filter: 'blur(114.842px)' }}></div>
                <div className='absolute w-[20%] h-[20%] right-[-10%] bottom-[35%] ' style={{ background: 'linear-gradient(180deg, rgba(0, 194, 255, 0) 0%, #FF29C3 100%)', filter: 'blur(114.842px)' }}></div>

                <div className='w-11/12 lg:w-[80%] 3xl:w-[70%] flex flex-col items-center rounded-md gap-2'>
                    <span className='textGrad text-xl uppercase font-semibold'>The JOURNEY</span>
                    <h2>Our Roadmap</h2>
                    <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                    {/* For PC */}
                    <div className='relative w-full max-lg:hidden lg:flex flex-col justify-center mt-20 gap-24'>
                        <div className='absolute w-[2px] lg:h-[1300px] 3xl:h-[1600px] bg-gradient-to-b from-cyan-400 to-purple-500 top-0 left-0 lg:left-[50%] lg:transform lg:translate-x-[-50%]'></div>

                        <div className='grid 3xl:gap-16 3xl:mt-10'>
                            {roadmap.map((items, index) => {
                                return (
                                    <div className={`w-full relative flex items-center justify-between gap-40 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                                        <div className={`w-[30%] bg-[#171717] rounded-xl px-2 py-4 ${index % 2 === 0 ? 'ml-28' : 'mr-28'}`}>
                                            <p className='mb-2'>{items.tag}</p>
                                            <ul className='w-full text-white grid gap-2'>
                                                {
                                                    items.listItems.map((list) => {
                                                        return (
                                                            <li className='list-disc text-base ml-5'>{list}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        <div className='absolute w-[15px] h-[15px] p-[2px] bg-white rounded-full flex items-center justify-center left-[50%] translate-x-[-50%] top-[30%]'>
                                            <div className='w-full h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full'></div>
                                        </div>
                                        <img src={Line} alt="img" className={`absolute ${index % 2 === 0 ? 'left-[50%]' : 'right-[50%]'} w-1/5 ${index % 2 === 0 ? '' : 'transform scale-x-[-1]'} top-[33%] z-[-4]`} />
                                        <p className={`absolute text-white text-xl ${index % 2 === 0 ? 'right-[33%]' : 'left-[33%]'} top-[35%]`}>Phase {index + 1}</p>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    {/* For tablet and mobile */}
                    <div className='relative w-full max-lg:flex hidden flex-col pt-5'>
                        <div className='absolute w-[2px] max-md:h-[1400px] h-[1100px] bg-gradient-to-b from-cyan-400 to-purple-500 top-10 left-0 '></div>

                        <ul className='w-full pl-0 relative grid gap-4 mt-10'>
                            {roadmap.map((item, index) => {
                                return (
                                    <li key={index} className='relative grid pl-0'>
                                        <div className='relative max-md:left-[-2%] left-[-1%] flex align-items-start'>
                                            <div className='bg-white rounded-full p-1 h-fit'>
                                                <div className='bg-gradient-to-r from-cyan-400 to-violet-500 w-[12px] h-[12px] rounded-full'></div>
                                            </div>
                                            <img src={Line} alt="img" className='w-48 mt-2' />
                                        </div>
                                        <div>
                                            <ul className='bg-[#171717] max-md:ml-4 ml-14 mt-2 p-4 inline-block rounded-md'>
                                                {item.listItems.map((list) => {
                                                    return (
                                                        <li className='list-disc text-white max-md:text-md text-lg ml-2 py-1'>{list}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TheJourney