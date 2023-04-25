import React from 'react'

import USDT from '../../assets/images/svg/USDT.svg'

const Overview = () => {

    const overviews = [
        {
            title: 'Work in Progress',
            value: 'USDT 300'
        },
        {
            title: 'In Review',
            value: 'USDT 300'
        },
        {
            title: 'Pending',
            value: 'USDT 300'
        },
        {
            title: 'Available',
            value: 'USDT 300'
        },
    ]

    return (
        <div className='container-small'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>Overview</h2>
            </div>

            <div className='w-full bg-[#171717] rounded-xl py-16 px-10 flex flex-col justify-center gap-16'>
                <div className='w-full grid grid-cols-4'>
                    {
                        overviews.map((item, index) => {
                            return (
                                <div key={index} className='grid gap-4'>
                                    <p className='text-xl font-medium'>{item.title}</p>
                                    <p className='flex gap-2 text-lg'><img src={USDT} alt="img" />{item.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <p className='text-lg'>You Don't Have Any Active Work In Progress</p>
            </div>
        </div>
    )
}

export default Overview