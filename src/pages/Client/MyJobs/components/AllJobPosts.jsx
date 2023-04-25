import React from 'react'
import Filter from '../../../../assets/images/svg/filter.svg'
import { FiSearch } from 'react-icons/fi'

const AllJobPosts = () => {

    const posts = [
        {
            title: 'Build responsive WordPress site...',
            posted: 'Mar 29, 2023',
            proposals: '15(11 new)',
            messaged: '0',
            hired: '0'
        },
        {
            title: 'Build responsive WordPress site...',
            posted: 'Mar 29, 2023',
            proposals: '15(11 new)',
            messaged: '0',
            hired: '0'
        },
        {
            title: 'Build responsive WordPress site...',
            posted: 'Mar 29, 2023',
            proposals: '15(11 new)',
            messaged: '0',
            hired: '0'
        },
        {
            title: 'Build responsive WordPress site...',
            posted: 'Mar 29, 2023',
            proposals: '15(11 new)',
            messaged: '0',
            hired: '0'
        },
    ]

    return (
        <div className='py-8 px-4'>
            <div className='w-full flex justify-between items-center gap-4 py-4'>
                <div className='w-full bg-gradient p-[1px] rounded-button relative'>
                    <input type="search" className='bg-accent w-full rounded-button outline-none text-white' placeholder='Search here'/>
                    <FiSearch className='absolute right-3 top-[50%] translate-y-[-50%] text-xl'/>
                </div>

                <div className='w-32 h-9 bg-gradient p-[1px] rounded-button flex'>
                    <button className='bg-accent w-full h-full rounded-button flex items-center justify-center gap-1'>
                        <img src={Filter} alt="img" />
                        Filter
                    </button>
                </div>
            </div>

            <div className='w-full flex justify-end py-4'>
                <button className='secondary w-32 h-9 before:content-["Post_a_Job"]'></button>
            </div>

            <div className='grid divide-y divide-divide space-y-4'>
                {posts.map((item, index) => {
                    return (
                        <div key={index} className='flex items-center justify-between py-6'>
                            <div>
                                <h6>{item.title}</h6>
                                <p className='text-textGray text-base'>Posted - Saved {item.posted}</p>
                            </div>
                            <div>
                                <h6>Proposals</h6>
                                <p className='text-textGray text-base'>{item.proposals}</p>
                            </div>
                            <div>
                                <h6>Messaged</h6>
                                <p className='text-textGray text-base'>{item.proposals}</p>
                            </div>
                            <div>
                                <h6>Hired</h6>
                                <p className='text-textGray text-base'>{item.hired}</p>
                            </div>
                            <button className='primary w-36 h-9'>View Proposals</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllJobPosts