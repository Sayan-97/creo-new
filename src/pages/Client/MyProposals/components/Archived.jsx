import React from 'react'
import Filter from '../../../../assets/images/svg/filter.svg'
import { FiSearch } from 'react-icons/fi'

import Archive from '../../../../assets/images/pages/archived.png'


const Archived = () => {
  return (
    <div className='py-8 px-4'>
      <div className='w-full flex justify-between items-center gap-4 py-4'>
        <div className='w-full bg-gradient p-[1px] rounded-button relative'>
          <input type="search" className='bg-accent w-full rounded-button outline-none text-white' placeholder='Search here' />
          <FiSearch className='absolute right-3 top-[50%] translate-y-[-50%] text-xl' />
        </div>

        <div className='w-32 h-9 bg-gradient p-[1px] rounded-button flex'>
          <button className='bg-accent w-full h-full rounded-button flex items-center justify-center gap-1'>
            <img src={Filter} alt="img" />
            Filter
          </button>
        </div>
      </div>

      <div className='grid justify-items-center py-8 space-y-8'>
        <img src={Archive} alt="img" />
        <h5>You have no messages</h5>
        <p>Get the conversation started by asking your favorite candidates a questions</p>
      </div>
    </div>
  )
}

export default Archived