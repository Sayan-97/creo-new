import React from 'react'

import EnterpriseImage from '../../../../assets/images/pages/EnterpriseImage.png'

const FindWork = () => {

    const BlockchainSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.6666 31.25V15.625L28.6458 8.30104M21.3541 8.30104L8.33331 15.625V31.25M11.4583 36.1333L25 43.75L33.3333 39.0625L38.5416 36.1323M25 17.7083L28.125 19.5312L31.25 21.3542V28.6458L28.125 30.4687L25 32.2917L21.875 30.4687L18.75 28.6458V21.3542L21.875 19.5312L25 17.7083ZM25 17.7083V10.4167M31.25 28.125L38.5416 32.2917M18.75 28.125L11.4583 32.2917" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25 10.4167C26.7259 10.4167 28.125 9.01755 28.125 7.29166C28.125 5.56577 26.7259 4.16666 25 4.16666C23.2741 4.16666 21.875 5.56577 21.875 7.29166C21.875 9.01755 23.2741 10.4167 25 10.4167Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.33331 37.5C10.0592 37.5 11.4583 36.1009 11.4583 34.375C11.4583 32.6491 10.0592 31.25 8.33331 31.25C6.60742 31.25 5.20831 32.6491 5.20831 34.375C5.20831 36.1009 6.60742 37.5 8.33331 37.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M41.6666 37.5C43.3925 37.5 44.7916 36.1009 44.7916 34.375C44.7916 32.6491 43.3925 31.25 41.6666 31.25C39.9407 31.25 38.5416 32.6491 38.5416 34.375C38.5416 36.1009 39.9407 37.5 41.6666 37.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
    const AiSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.75 22.9167V18.75H39.5833V14.5833C39.58 13.4793 39.14 12.4214 38.3593 11.6407C37.5786 10.86 36.5207 10.42 35.4167 10.4167H31.25V6.25H27.0833V10.4167H22.9167V6.25H18.75V10.4167H14.5833C13.4793 10.42 12.4214 10.86 11.6407 11.6407C10.86 12.4214 10.42 13.4793 10.4167 14.5833V18.75H6.25V22.9167H10.4167V27.0833H6.25V31.25H10.4167V35.4167C10.42 36.5207 10.86 37.5786 11.6407 38.3593C12.4214 39.14 13.4793 39.58 14.5833 39.5833H18.75V43.75H22.9167V39.5833H27.0833V43.75H31.25V39.5833H35.4167C36.5207 39.58 37.5786 39.14 38.3593 38.3593C39.14 37.5786 39.58 36.5207 39.5833 35.4167V31.25H43.75V27.0833H39.5833V22.9167H43.75ZM35.4167 35.4167H14.5833V14.5833H35.4167V35.4167Z" fill="white" />
            <path d="M23.6688 16.6667H20.8667L16.6792 33.3333H18.8188L19.7854 29.4271H24.6104L25.5521 33.3333H27.7646L23.6688 16.6667ZM20.0667 27.7583L22.1875 18.6458H22.2834L24.3313 27.7583H20.0667ZM29.675 16.6667H31.7584V33.3333H29.675V16.6667Z" fill="white" />
        </svg>
    )

    const BreifcaseSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 37.9167C29.6023 37.9167 33.3333 34.1857 33.3333 29.5833C33.3333 24.981 29.6023 21.25 25 21.25C20.3976 21.25 16.6666 24.981 16.6666 29.5833C16.6666 34.1857 20.3976 37.9167 25 37.9167Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21.75 29.7917L23.1042 31.1458C23.5 31.5417 24.1458 31.5417 24.5417 31.1667L28.25 27.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6666 45.8333H33.3333C41.7083 45.8333 43.2083 42.4792 43.6458 38.3958L45.2083 21.7292C45.7708 16.6458 44.3125 12.5 35.4166 12.5H14.5833C5.68746 12.5 4.22913 16.6458 4.79163 21.7292L6.35413 38.3958C6.79163 42.4792 8.29163 45.8333 16.6666 45.8333Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6666 12.5V10.8333C16.6666 7.14579 16.6666 4.16663 23.3333 4.16663H26.6666C33.3333 4.16663 33.3333 7.14579 33.3333 10.8333V12.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M45.1041 22.9166C41.5 25.5416 37.5 27.375 33.3541 28.4166" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5.45837 23.4791C8.93754 25.8541 12.7292 27.5416 16.6667 28.5" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )

    const TetherSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5625 6.97916H34.4375C36.6458 6.97916 39.25 8.58332 40.2291 10.5625L45.2291 20.6042C46.4375 23.0208 45.7708 26.4583 43.7916 28.2708L29.3541 41.375C26.9583 43.5417 23.0625 43.5417 20.6666 41.375L6.22913 28.2708C4.22913 26.4583 3.5833 23.0208 4.79163 20.6042L9.79163 10.5625C10.75 8.58332 13.3541 6.97916 15.5625 6.97916Z" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M25 30.2083V17.7083" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.6666 17.7083H33.3333" stroke="white" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
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