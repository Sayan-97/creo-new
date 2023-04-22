import React from 'react'

const TheNetwork = () => {

    const team = [
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
        {
            img: 'https://media.istockphoto.com/id/1297067457/photo/confident-african-man-on-black-background.jpg?s=170667a&w=0&k=20&c=uJrYSmKJHsnhmuMhBaX-yc7ub_BLXW_wCWXSBCbi_DM=',
            name: 'Sayan Dey',
            desc: 'CEO'
        },
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col justify-center items-center gap-4'>
                <p className='textGrad text-xl uppercase font-semibold'>the network</p>
                <h2>Meet our Team</h2>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                {/* grid */}
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center py-20 gap-y-40 bg-accent mt-4 rounded-card'>
                    {team.map((item, index) => {
                        return (
                            <div key={index} className='w-full flex flex-col items-center gap-2'>
                                <div className='bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full p-[1px]'>
                                    <img src={item.img} alt="img" className='inline-block w-24 h-24 rounded-full object-cover' />
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