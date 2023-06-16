import React from 'react'

const TheNetwork = () => {

    const team = [
        {
            img: 'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1527417334547-B9VIPPG61XQYM2RZ08U2/DBS_George_Sampford.jpg?format=1000w',
            name: 'Karn Chakravarty',
            desc: 'CEO'
        },
        {
            img: 'https://www.corporatephotographerslondon.com/wp-content/uploads/2016/07/approachable-professional-headshots-London.jpg',
            name: 'Lavish Pratap Singh',
            desc: 'Full-Stack Developer'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiM0o_5tIn0DAmbB2wKS4GvurHctTwxD5om2vi4NOsj1ODDSGULrviZ-QV3ul8JYEMfO0&usqp=CAU',
            name: 'Topobar Layek',
            desc: 'Product Designer'
        },
        {
            img: 'https://t3.ftcdn.net/jpg/04/23/59/74/360_F_423597477_AKCjGMtevfCi9XJG0M8jter97kG466y7.jpg',
            name: 'Sayan Dey',
            desc: 'Frontend Developer'
        },
        {
            img: 'https://i.pinimg.com/236x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg',
            name: 'Swatanshu Dey',
            desc: 'Graphics'
        },
        {
            img: 'https://i.pinimg.com/736x/e5/13/33/e513339a410a97dd979c4c86c22a164b.jpg',
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