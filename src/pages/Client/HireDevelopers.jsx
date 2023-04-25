import React from 'react'
import HireDev from '../../assets/images/pages/hiredev.png'

import Image from '../../assets/images/pages/category7.png'
import profileImg from '../../assets/images/forms/profile1.png'
import USDT from '../../assets/images/svg/USDT.svg'

const HireDevelopers = () => {

    const topdev = [
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
        {
            imgSrc: Image,
            proImg: profileImg,
            name: 'Michael James',
            des: 'Game Designer',
        },
    ]

    return (
        <div className='container space-y-16'>
            <div className='bg-accent py-12 rounded-card relative'>
                <div className='grid gap-4 pl-8'>
                    <h4>World Class Game Developers</h4>
                    <p>Hire world class game designers, 3D artist and more</p>
                </div>
                <img src={HireDev} alt="img" className='absolute rounded-r-card top-0 right-0 h-full w-[40%]' />
                <div className='absolute w-[40%] h-full top-0 right-0' style={{ background: 'linear-gradient(89.73deg, #171717 0.23%, rgba(23, 23, 23, 0) 100.39%)' }}></div>
            </div>

            <div className='space-y-8'>
                <h4>Top Rated Game Designers</h4>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {topdev.map((item, index) => {
                        return (
                            <div key={index} className='flex flex-col'>
                                <img src={item.imgSrc} alt="img" className='rounded-t-card' />
                                <div className='bg-accent py-4 px-4 rounded-b-card space-y-4'>
                                    <div className='flex justify-between items-start'>
                                        <div className='flex items-center gap-2'>
                                            <img src={item.proImg} alt="img" className='w-12 h-12' />
                                            <div className='grid'>
                                                <h6>{item.name}</h6>
                                                <p className='text-textGray'>{item.des}</p>
                                            </div>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <div className='w-3 h-3 rounded-full bg-green-500'></div>
                                            <p className='text-base'>Available</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='grid justify-items-center'>
                                            <p className='flex gap-1'><img src={USDT} alt="img" />USDT 200</p>
                                            <p className='text-base text-textGray'>Rate</p>
                                        </div>

                                        <div className='grid justify-items-center'>
                                            <p className='flex gap-2'>95%</p>
                                            <p className='text-base text-textGray'>Job Success</p>
                                        </div>

                                        <div className='grid justify-items-center'>
                                            <p className='flex gap-2'>200</p>
                                            <p className='text-base text-textGray'>Jobs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default HireDevelopers