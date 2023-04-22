import React from 'react'

import Image from '../../../../assets/images/pages/FindWorkImage.png'

const TheFuture = () => {

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

    const ControllerSvg = () => (
        <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7344 40.625C10.9745 40.6263 10.2179 40.5265 9.4844 40.3281C7.28269 39.7002 5.41476 38.2344 4.28138 36.2452C3.14799 34.2559 2.83943 31.9016 3.4219 29.6875L7.06252 15.875C7.34605 14.7571 7.85009 13.7072 8.54505 12.7869C9.24 11.8665 10.1119 11.0943 11.1094 10.5156C12.0807 9.95303 13.154 9.58878 14.267 9.44394C15.3801 9.29911 16.5109 9.37658 17.5938 9.67186C18.7449 9.99153 19.8171 10.5469 20.7424 11.3027C21.6676 12.0585 22.4258 12.9983 22.9688 14.0625H27.0313C27.5719 12.9966 28.3293 12.0554 29.2549 11.2993C30.1805 10.5432 31.2539 9.98888 32.4063 9.67186C33.4892 9.37658 34.6199 9.29911 35.733 9.44394C36.8461 9.58878 37.9194 9.95303 38.8906 10.5156C39.8833 11.0928 40.752 11.8608 41.4466 12.7752C42.1411 13.6897 42.6478 14.7326 42.9375 15.8437L46.5782 29.6875C47.1693 31.9081 46.8632 34.2721 45.7259 36.2689C44.5887 38.2657 42.7115 39.735 40.5 40.3594C39.4171 40.6546 38.2864 40.7321 37.1733 40.5873C36.0602 40.4424 34.9869 40.0782 34.0156 39.5156C33.0213 38.9404 32.1514 38.1731 31.4566 37.2584C30.7618 36.3436 30.2561 35.2997 29.9688 34.1875L29.6875 32.8125H20.3125L19.9532 34.1562C19.6659 35.2684 19.1601 36.3123 18.4653 37.2271C17.7705 38.1419 16.9006 38.9092 15.9063 39.4844C14.6367 40.2166 13.1999 40.6094 11.7344 40.625ZM15.3594 12.5C14.4165 12.5032 13.4905 12.7508 12.6719 13.2187C11.3889 13.9715 10.4562 15.2019 10.0781 16.6406L6.43752 30.4531C6.05657 31.8761 6.24906 33.3918 6.97364 34.6745C7.69823 35.9571 8.89706 36.9043 10.3125 37.3125C10.9961 37.499 11.7099 37.548 12.4126 37.4568C13.1153 37.3656 13.7929 37.136 14.4063 36.7812C15.0449 36.4126 15.6033 35.9199 16.0487 35.3323C16.4942 34.7446 16.8176 34.0738 17 33.3594L17.9688 29.6875H32.0313L32.9844 33.3594C33.17 34.0725 33.4948 34.7418 33.9399 35.3291C34.385 35.9163 34.9417 36.4098 35.5782 36.7812C36.1945 37.1357 36.8748 37.365 37.5799 37.4562C38.2851 37.5473 39.0013 37.4985 39.6875 37.3125C41.1047 36.9081 42.305 35.9608 43.0277 34.6764C43.7503 33.392 43.9369 31.8743 43.5469 30.4531L39.9063 16.6406C39.7249 15.9278 39.4035 15.2582 38.9609 14.6707C38.5183 14.0833 37.9633 13.5897 37.3281 13.2187C36.7118 12.8643 36.0315 12.6349 35.3264 12.5438C34.6212 12.4526 33.905 12.5015 33.2188 12.6875C32.3701 12.9294 31.5914 13.3703 30.9473 13.9736C30.3033 14.5769 29.8125 15.3252 29.5156 16.1562L29.1406 17.1875H20.8594L20.4844 16.1562C20.1849 15.3241 19.6914 14.5753 19.0446 13.972C18.3979 13.3688 17.6166 12.9284 16.7656 12.6875C16.3071 12.5638 15.8343 12.5008 15.3594 12.5Z" fill="white" />
            <path d="M15.625 25C15.0069 25 14.4027 24.8167 13.8888 24.4733C13.3749 24.13 12.9744 23.6419 12.7379 23.0709C12.5014 22.4999 12.4395 21.8715 12.56 21.2653C12.6806 20.6592 12.9783 20.1023 13.4153 19.6653C13.8523 19.2283 14.4092 18.9306 15.0153 18.81C15.6215 18.6895 16.2499 18.7514 16.8209 18.9879C17.3919 19.2244 17.88 19.6249 18.2233 20.1388C18.5667 20.6527 18.75 21.2569 18.75 21.875C18.75 22.7038 18.4208 23.4987 17.8347 24.0847C17.2487 24.6708 16.4538 25 15.625 25Z" fill="white" />
            <path d="M34.375 20.3125C35.2379 20.3125 35.9375 19.6129 35.9375 18.75C35.9375 17.8871 35.2379 17.1875 34.375 17.1875C33.5121 17.1875 32.8125 17.8871 32.8125 18.75C32.8125 19.6129 33.5121 20.3125 34.375 20.3125Z" fill="white" />
            <path d="M34.375 26.5625C35.2379 26.5625 35.9375 25.8629 35.9375 25C35.9375 24.1371 35.2379 23.4375 34.375 23.4375C33.5121 23.4375 32.8125 24.1371 32.8125 25C32.8125 25.8629 33.5121 26.5625 34.375 26.5625Z" fill="white" />
            <path d="M31.25 23.4375C32.1129 23.4375 32.8125 22.7379 32.8125 21.875C32.8125 21.0121 32.1129 20.3125 31.25 20.3125C30.3871 20.3125 29.6875 21.0121 29.6875 21.875C29.6875 22.7379 30.3871 23.4375 31.25 23.4375Z" fill="white" />
            <path d="M37.5 23.4375C38.3629 23.4375 39.0625 22.7379 39.0625 21.875C39.0625 21.0121 38.3629 20.3125 37.5 20.3125C36.6371 20.3125 35.9375 21.0121 35.9375 21.875C35.9375 22.7379 36.6371 23.4375 37.5 23.4375Z" fill="white" />
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
        { title: 'Powered by Blockchain', icon: BlockchainSvg, desc: 'Discover the revolutionary potential of blockchain technology as it powers our platform, transforming the Experience.' },
        { title: 'Unleashing Innovation', icon: AiSvg, desc: 'Experience the game-changing fusion of AI and blockchain technology to drive innovation in the gaming industry.' },
        { title: 'Gamers Paradise', icon: ControllerSvg, desc: 'Indulge in a one-of-a-kind gamelancing experience with exclusive features for game developers and designers.' },
        { title: 'Your Talents, Your Rewards', icon: TetherSvg, desc: 'Work your magic and achieve milestones , and have the chance to turn your freelancer profile into a valuable NFT, unlocking exciting opportunities for recognition and rewards.' }
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            {/* grid */}
            <div className='container flex !items-start flex-col-reverse lg:!grid grid-cols-12 gap-[0px] lg:gap-[80px] space-y-10 space-y-reverse lg:space-y-0'>
                <div className='col-span-12 lg:col-span-6 space-y-4'>
                    <span className='textGrad text-xl uppercase font-semibold'>Unlocking the Future</span>
                    <h2>Cutting-Edge Tech Stack<br /> Behind Our Web App!</h2>
                    <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-tr-[500px] rounded-br-[500px]' ></div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 pb-[20px]'>
                        {
                            Array.map((item, index) => (
                                <div key={index} className='pt-4 rounded-2xl space-y-4'>
                                    <div className="p-0.5 mx-auto max-w-sm rounded-full bg-gradient inline-block">
                                        <div className="bg-[#0E1013] p-2 rounded-full">
                                            <item.icon />
                                        </div>
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p className='text-base'>{item.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='relative col-span-12 lg:col-span-6 z-10'>
                    <div className='absolute top-[20%] right-[18%] w-[60%] h-[60%] z-[-1] rounded-full' style={{ background: 'linear-gradient(96.99deg, #15DBFF 0%, #A514FC 104.31%)', opacity: 0.8, filter: 'blur(167px)', mixBlendMode: 'screen' }}></div>
                    <img src={Image} alt='Enterprise' className='w-full sm:w-11/12 lg:w-full h-auto mt-10' />
                </div>
            </div>
        </div>
    )
}

export default TheFuture