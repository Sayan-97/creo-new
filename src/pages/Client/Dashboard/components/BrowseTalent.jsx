import React from 'react'

import { HiStar } from "react-icons/hi2";

import UIUX from '../../../../assets/images/pages/category1.png'
import Graphics from '../../../../assets/images/pages/category2.png'
import Content from '../../../../assets/images/pages/category3.png'
import Development from '../../../../assets/images/pages/category4.png'
import Blockchain from '../../../../assets/images/pages/category5.png'
import App from '../../../../assets/images/pages/category6.png'

const BrowseTalent = () => {

    const TalentArray = [
        { title: 'UI/UX Designing', image: UIUX, skills: '4.5k', rating: '5.0' },
        { title: 'Graphics Designing', image: Graphics, skills: '4.5k', rating: '5.0' },
        { title: 'Content Writing', image: Content, skills: '4.5k', rating: '5.0' },
        { title: 'Development', image: Development, skills: '4.5k', rating: '5.0' },
        { title: 'Blockchain Development', image: Blockchain, skills: '4.5k', rating: '5.0' },
        { title: 'App Development', image: App, skills: '4.5k', rating: '5.0' }
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col gap-12 items-center'>
                <h3>Browse Talent by Categories</h3>

                {/* grid */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {
                        TalentArray.map((item, index) => (
                            <div key={index} className='relative w-full h-64 sm:h-72 bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${item.image})` }}>
                                <div className='absolute bottom-0 w-full bg-white/20 backdrop-blur-lg drop-shadow-lg p-[20px] space-y-1'>
                                    <h3 className='text-white text-lg sm:text-xl font-bold m-0'>{item.title}</h3>
                                    <div className='flex items-center space-x-4 text-white text-sm'>
                                        <div className='flex items-center space-x-2'>
                                            <HiStar />
                                            <p>{item.rating}</p>
                                        </div>
                                        <p>{item.skills} Skills</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default BrowseTalent