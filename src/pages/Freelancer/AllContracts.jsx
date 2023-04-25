import React from 'react'
import { Link } from 'react-router-dom'

import USDT from '../../assets/images/svg/USDT.svg'
import Filter from '../../assets/images/svg/filter.svg'

const AllContracts = () => {

    const contracts = [
        {
            title: 'Game Tester for a TPP Shooting Multiplayer',
            hiredBy: 'Michel Jones',
            companyName: 'Activison',
            deadline: 'July 05-August 31',
            status: 'ACTIVE',
            budget: 'USDT 200',
            escrow: 'USDT 200',
            messageLink: '/user/messages'
        },
        {
            title: 'Game Tester for a TPP Shooting Multiplayer',
            hiredBy: 'Michel Jones',
            companyName: 'Activison',
            deadline: 'July 05-August 31',
            status: 'COMPLETED',
            budget: 'USDT 200',
            escrow: 'USDT 200',
            messageLink: '/user/messages'
        },
        {
            title: 'Game Tester for a TPP Shooting Multiplayer',
            hiredBy: 'Michel Jones',
            companyName: 'Activison',
            deadline: 'July 05-August 31',
            status: 'ACTIVE',
            budget: 'USDT 200',
            escrow: 'USDT 200',
            messageLink: '/user/messages'
        },
    ]

    return (
        <div className='container-small'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>All Contracts</h2>
            </div>

            <div className='w-full bg-[#171717] py-10 rounded-xl divide-y divide-[#474747]'>

                <div className='px-5 py-6 w-full flex items-center justify-center gap-4'>
                    <div className='w-full bg-gradient p-[1px] rounded-button'>
                        <input type="search" className='w-full h-9 rounded-button bg-[#171717] outline-none text-white' />
                    </div>
                    <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg '>
                        <p className='flex items-center gap-1 text-lg bg-[#171717] w-full rounded-lg px-4 py-1'><img src={Filter} alt="img" className='w-5' /> Filter</p>
                    </button>
                </div>

                {
                    contracts.map((item, index) => {
                        return (
                            <div key={index} className='px-5 py-6 flex flex-col md:flex-row items-start space-y-5 md:space-y-0 md:justify-between'>
                                <div className='space-y-2'>
                                    <h2 className='text-xl font-bold'>{item.title}</h2>
                                    <p className='text-[#9E9E9E]'>Hired By : {item.hiredBy}</p>
                                    <p className='text-[#9E9E9E]'>Company Name : {item.companyName}</p>
                                    <p className='text-[#9E9E9E]'>Deadline: {item.deadline}</p>
                                </div>
                                <div className='space-y-2'>
                                    <h3 className={`text-lg font-medium ${item.status === 'ACTIVE' ? 'text-[#04FF33]' : 'text-[#E3BF00]'}`}>{item.status}</h3>
                                    <p className='flex gap-2'>Budget: <img src={USDT} alt="img" /> {item.budget}</p>
                                    <p className='flex gap-2'>Escrow: <img src={USDT} alt="img" /> {item.escrow}</p>
                                </div>
                                <div>
                                    <Link to={item.messageLink}>
                                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-1 rounded-lg '>
                                            Message
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default AllContracts