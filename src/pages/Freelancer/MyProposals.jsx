import React, { useState } from 'react'

const MyProposals = () => {

    const [select, setSelect] = useState('All')

    return (
        <div className='w-[60%] mx-auto flex flex-col gap-5 z-10'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>My Proposals</h2>
            </div>

            <div className='w-full flex items-start gap-8 border-b-[1px] border-b-[#474747] py-[1px]'>
                {
                    ['All', 'Completed'].map((item, index) => {
                        return (
                            <div key={index} onClick={() => setSelect(item)} className={`bg-gradient-to-r from-cyan-400 to-violet-500 cursor-pointer text-lg font-medium ${select === item ? 'pb-[2px]' : ''}`}>
                                <p className='bg-[#0a0a0a]'>{item}</p>
                            </div>
                        )
                    })
                }

            </div>

            <div className='w-full bg-[#171717] py-10 rounded-xl'>
                <div className='px-10'>
                    <h3 className='text-xl font-medium'>Offers (0)</h3>
                </div>
            </div>

            <div className='w-full bg-[#171717] py-10 rounded-xl'>
                <div className='px-10'>
                    <h3 className='text-xl font-medium'>Invitations to Interview (0)</h3>
                </div>
            </div>

            <div className='w-full bg-[#171717] py-10 rounded-xl'>
                <div className='px-10'>
                    <h3 className='text-xl font-medium'>Submitted Proposals (2)</h3>
                </div>

                <div className='px-10 py-6 flex flex-col md:flex-row items-start space-y-5 md:space-y-0 justify-between'>
                    <div>
                        <p className='text-lg font-semibold'>Initiated July 24 2023</p>
                        <p className='text-[#676767]'>12 Days Ago</p>
                    </div>
                    <div>
                        <p className='text-lg font-semibold'>Game Tester for a TPP Shooting Multiplayer</p>
                    </div>
                    <div>
                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg '>
                            <p className='flex items-center gap-1 text-lg bg-[#171717] w-full rounded-lg px-4 py-1'>Gaming</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProposals