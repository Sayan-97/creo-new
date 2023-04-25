import React from 'react'

import { RxCalendar } from 'react-icons/rx'

const Reports = () => {
    return (
        <div className='container-small'>
            <div className='w-full grid'>
                <h2 className='text-3xl font-semibold'>My Reports</h2>
            </div>

            <div className='space-y-4'>
                <div className='w-full bg-[#171717] rounded-xl py-8 grid px-10 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Weekly Summery</h3>
                    <p className='flex gap-2'><RxCalendar className='text-xl' />Current Week</p>
                    <p className='text-sm'>No Entries Found</p>
                </div>

                <div className='w-full bg-[#171717] rounded-xl py-8 grid px-10 space-y-2'>
                    <h3 className='text-2xl font-semibold'>Weekly Summery By Client</h3>
                    <p className='flex gap-2'><RxCalendar className='text-xl' />Current Week</p>
                    <p className='text-sm'>No Entries Found</p>
                </div>
            </div>
        </div>
    )
}

export default Reports