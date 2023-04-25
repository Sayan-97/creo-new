import React from 'react'

import Calender from '../../assets/images/svg/calendar.svg'

const WorkDiary = () => {
    return (
        <div className='container-small space-y-3'>
            <div className='w-full flex items-center justify-between'>
                <h2 className='text-3xl font-semibold'>Work Diary</h2>
                <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 rounded-lg'>Add Time</button>
            </div>

            <div className='w-full bg-[#171717] rounded-xl py-16 grid justify-center'>
                <img src={Calender} alt="img" />
                <p className='text-[#9E9E9E] text-lg font-medium'>No time Logged on yet</p>
            </div>
        </div>
    )
}

export default WorkDiary