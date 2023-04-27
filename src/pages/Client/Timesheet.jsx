import React from 'react'

// import { WeeklyCalendar } from 'react-week-picker';
// import 'react-week-picker/src/lib/calendar.css';
import { FcFilledFilter, FcSearch } from 'react-icons/fc';

const Timesheet = () => {

    const handleJumpToCurrentWeek = (currenDate) => {
        console.log(`current date: ${currenDate}`);
    }

    const handleWeekPick = (startDate, endDate) => {
        console.log(`${startDate} to ${endDate}`);
    }

    return (
        <div className='w-full mx-auto flex justify-center items-center py-16'>
            <div className='bg-[#171717] rounded md:w-3/4 w-5/6 px-5 py-10 space-y-12 z-10'>
                <div className='p-3 flex justify-between items-center'>
                    <h1 className='text-3xl'>Timesheet</h1>
                    <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-2 text-white rounded-lg flex items-center'>
                        <FcFilledFilter className='text-xl' /> Filters
                    </button>
                </div>
                <div className='p-3'>
                    <div className='bg-white rounded text-black p-2 w-[250px] py-2'>
                        <WeeklyCalendar onWeekPick={handleWeekPick} jumpToCurrentWeekRequired={true} onJumpToCurrentWeek={handleJumpToCurrentWeek} />
                    </div>
                    <div className='flex flex-col justify-center items-center gap-5 py-2'>
                        <FcSearch className='md:text-9xl text-8xl' />
                        <p>No records available to display</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timesheet