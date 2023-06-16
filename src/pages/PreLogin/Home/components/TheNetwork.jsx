import React from 'react'
import KarnImg from '../../../../assets/images/pages/KarnImg.jpg'
import SwatanshuImg from '../../../../assets/images/pages/SwatanshuImg.jpg'
import TopobarImg from '../../../../assets/images/pages/TopobarImg.jpg'
import AmitImg from '../../../../assets/images/pages/AmitImg.jpg'
import LavishImg from '../../../../assets/images/pages/LavishImg.jpg'
import SayanImg from'../../../../assets/images/pages/SayanImg.jfif'

const TheNetwork = () => {

    const team = [
        {
            img: KarnImg,
            name: 'Karn Chakerverty',
            desc: 'CEO'
        },
        {
            img: LavishImg,
            name: 'Lavish Pratap Singh',
            desc: 'Full-Stack Developer'
        },
        {
            img: TopobarImg,
            name: 'Topobar Layek',
            desc: 'Product Designer'
        },
        {
            img: SayanImg,
            name: 'Sayan Dey',
            desc: 'Frontend Developer'
        },
        {
            img: SwatanshuImg,
            name: 'Swatanshu Dey',
            desc: 'Graphics'
        },
        {
            img: AmitImg,
            name: 'Amit Gorai',
            desc: 'UI/UX'
        },
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container bg-accent rounded-card flex flex-col justify-center items-center gap-4 py-14'>
                <p className='textGrad text-xl uppercase font-semibold'>the network</p>
                <h2>Meet our Team</h2>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                {/* grid */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 gap-y-40 mt-4'>
                    {team.map((item, index) => {
                        return (
                            <div key={index} className='w-full flex flex-col items-center gap-2'>
                                <div className='bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-[1px]'>
                                    <img src={item.img} alt="img" className='inline-block w-28 h-28 rounded-full object-cover' />
                                </div>
                                <h3 className='text-white text-2xl font-semibold'>{item.name}</h3>
                                <p className='text-white text-lg font-medium'>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TheNetwork