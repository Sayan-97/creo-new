import React from 'react'

const ConnectHistory = () => {
    return (
        <div className='container-small space-y-3'>

            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>My Jobs</h2>
                <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 rounded-lg'>Add Time</button>
            </div>

            <div className='w-full bg-[#171717] rounded-xl py-16 grid divide-y divide-[#474747] space-y-16'>
                <div className='w-full grid justify-items-center'>
                    <h2 className='text-6xl'>123</h2>
                    <h3 className='text-xl font-medium'>Available Connects</h3>
                </div>
                <div className='w-full'>
                    <h2></h2>
                </div>
            </div>

        </div>
    )
}

export default ConnectHistory