import React from 'react'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import avatar from '../../../../assets/images/forms/profile1.png';

import { HiOutlineEye, HiOutlineThumbUp } from "react-icons/hi";
import UIUX from '../../../../assets/images/pages/category1.png';
import Graphics from '../../../../assets/images/pages/category2.png';
import Content from '../../../../assets/images/pages/category3.png';
import Development from '../../../../assets/images/pages/category4.png';
import Blockchain from '../../../../assets/images/pages/category5.png';
import App from '../../../../assets/images/pages/category6.png';

const HireTalent = () => {

    const TeamArray = [
        { name: 'Topobar Layek', title: 'UI/UX Designing', avatar: 'https://i.insider.com/5899ffcf6e09a897008b5c04?width=1000&format=jpeg&auto=webp', image: UIUX, likes: '5k', views: '48' },
        { name: 'Mason Jane', title: 'Graphics Designing', avatar: 'https://qph.cf2.quoracdn.net/main-thumb-3480496-200-BIsjU5IOTadRDrAft68o8zAKNaVvy2aJ.jpeg', image: Graphics, likes: '2.9k', views: '84' },
        { name: 'Jason Roy', title: 'Content Writing', avatar: 'https://media.licdn.com/dms/image/D5603AQGhcsnpTwI1xA/profile-displayphoto-shrink_400_400/0/1678074582126?e=1692230400&v=beta&t=FLD-3eTptRyxyOf60yrO6pyvIlJjh-XOGPtPOAEgBcU', image: Content, likes: '2.2k', views: '19' },
        { name: 'Topobar Layek', title: 'Development', avatar: 'data:image/jpeg;base64,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', image: Development, likes: '4.5k', views: '109' },
        { name: 'Mason Jane', title: 'Blockchain', avatar: 'https://images.squarespace-cdn.com/content/v1/5aee389b3c3a531e6245ae76/1527417334547-B9VIPPG61XQYM2RZ08U2/DBS_George_Sampford.jpg?format=1000w', image: Blockchain, likes: '3.1k', views: '92' },
        { name: 'Pat Stewert', title: 'App Development', avatar: avatar, image: App, likes: '1.5k', views: '99' }
    ]

    return (
        <div id='findtalent' className='w-full flex flex-col items-center relative'>
            <div className='w-full flex flex-col items-center gap-4'>
                <span className='textGrad text-xl uppercase font-semibold'>HIRE CREATIVE TALENTS</span>
                <h2 className='text-center'>Meet our Creative Designers</h2>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                <div className='w-full mt-10'>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        freeMode={true}
                        // centeredSlides={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={{ nextEl: "#swiper1-next", prevEl: "#swiper1-prev" }}
                        pagination={{ clickable: true }}
                    >
                        {
                            TeamArray.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='relative w-full h-64 sm:h-72 bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${item.image})` }}>
                                        <div className='absolute bottom-0 w-full bg-white/20 backdrop-blur-lg drop-shadow-lg p-[20px] space-y-1'>
                                            {/* avatar image */}
                                            <div className='inline-block w-20 -mt-16 p-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-violet-500'>
                                                <img src={item.avatar} alt="img" className='rounded-full object-cover' />
                                            </div>

                                            {/* info with name */}
                                            <h3 className='text-white text-lg sm:text-xl font-bold'>{item.name}</h3>
                                            <div className='flex items-center justify-between'>
                                                <p className='text-white'>{item.title}</p>

                                                <div className='flex items-center space-x-4 text-white text-sm'>
                                                    <div className='flex items-center space-x-2'>
                                                        <HiOutlineThumbUp className='w-6 h-auto' />
                                                        <p>{item.likes}</p>
                                                    </div>
                                                    <div className='flex items-center space-x-2'>
                                                        <HiOutlineEye className='w-6 h-auto' />
                                                        <p>{item.views}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

                {/* button */}
                <button className='primary w-32 h-11 mt-5'>View More</button>

            </div>
        </div>
    )
}

export default HireTalent