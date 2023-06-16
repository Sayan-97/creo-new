import React, {useState} from 'react'

import Card1Img from '../../../../assets/images/pages/explorePic1.png'
import Card2Img from '../../../../assets/images/pages/explorePic2.png'
import Card3Img from '../../../../assets/images/pages/explorePic3.png'
import Card4Img from '../../../../assets/images/pages/explorePic4.png'
import Card5Img from '../../../../assets/images/pages/explorePic5.png'
import Card6Img from '../../../../assets/images/pages/explorePic6.png'
import avatar from '../../../../assets/images/forms/profile1.png'

const ExploreProjects = () => {

    const [activeList, setActiveList] = useState('DEVELOPERS')

    const items = [
        {
            imgSrc: Card1Img,
            title: 'Game Tester',
            des: 'Meticulous and experienced game tester with a keen eye for detail and a passion for ensuring flawless gaming experiences. Skilled in executing comprehensive test plans, identifying bugs, and providing valuable insights to enhance game performance and user satisfaction.',
            avatar: avatar,
            name: 'Larry Steve',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card2Img,
            title: 'Video Editor',
            des: 'Highly skilled video editor proficient in crafting visually compelling and engaging content. Experienced in utilizing industry-leading software and tools to create captivating videos, ensuring seamless transitions, and enhancing the overall storytelling.',
            avatar: avatar,
            name: 'Mia James',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card3Img,
            title: 'Game Developer',
            des: 'Innovative and versatile game developer with a passion for creating immersive gaming experiences. Proficient in various programming languages and game development frameworks, capable of bringing unique ideas to life through captivating gameplay mechanics and engaging storytelling.',
            avatar: avatar,
            name: 'Jason Roy',
            created_At: '1 Day Ago',
            category: 'DEVELOPERS'
        },
        {
            imgSrc: Card4Img,
            title: 'Game Designer',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Alex Hills',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
        {
            imgSrc: Card5Img,
            title: 'Content Writer',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Steve Smith',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
        {
            imgSrc: Card6Img,
            title: 'Copywriter',
            des: 'Lorem ipsum dolor sit amet consectetur. Est sed nunc gravida nisl tellus vulputate molestie faucibus. Massa porta mollis vitae malesuada elit dignissim pellentesque turpis.',
            avatar: avatar,
            name: 'Dave Watson',
            created_At: '1 Day Ago',
            category: 'DESIGNERS'
        },
    ]

    const filteredData = items.filter((item) => item.category === activeList)

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col items-center gap-10'>

                <div className='space-y-4 grid justify-items-center'>
                    <span className='textGrad text-xl uppercase font-semibold'>Explore Projects</span>
                    <h2 className='md:w-[80%] text-center'>{activeList === 'DEVELOPERS' ? 'Meet Our Game Dev Experts!' : 'Meet Our Game Design Experts!'}</h2>
                    <div className='bg-gradient w-20 h-[5px]'></div>
                </div>

                <div className='flex gap-4'>
                    {['DEVELOPERS', 'DESIGNERS'].map((item, index) => {
                        return (
                            <button key={index} className={`bg-gradient p-[1px] rounded-button w-36 h-10`} onClick={() => setActiveList(item)}>
                                <p className={`${activeList === item ? 'bg-gradient' : 'bg-background'} h-full rounded-button flex items-center justify-center`}>{item}</p>
                            </button>
                        )
                    })}
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {filteredData.map((item, index) => {
                        return (
                            <div key={index} className='rounded-card bg-[#171717]'>
                                <img src={item.imgSrc} alt="img" className='rounded-t-xl' />
                                <div className='p-3 flex flex-col gap-5'>
                                    <div className='grid gap-3'>
                                        <h4>{item.title}</h4>
                                        <p >{item.des}</p>
                                    </div>
                                    <div className='w-full flex justify-between'>
                                        <div className='w-1/2 flex gap-2 items-center'>
                                            <img src={item.avatar} alt="img" className='w-[20%]' />
                                            <h6>{item.name}</h6>
                                        </div>
                                        <div>
                                            <p>{item.created_At}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default ExploreProjects