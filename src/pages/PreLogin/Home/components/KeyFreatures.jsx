import React from 'react'

import Blockchain from '../../../../assets/images/pages/BlockchainImg.png'
import AiImg from '../../../../assets/images/pages/AIImage.png'
import Gamified from '../../../../assets/images/pages/Gamified.png'

import KeyFeaturesGrad1 from '../../../../assets/images/pages/KeyFeaturesGrad1.png'
import KeyFeaturesGrad2 from '../../../../assets/images/pages/KeyFeaturesGrad5.png'
import KeyFeaturesGrad3 from '../../../../assets/images/pages/KeyFeaturesGrad3.png'

const KeyFreatures = () => {

    const CardsArray = [
        { grad: KeyFeaturesGrad1, image: Blockchain, tag: 'SECURED', title: 'Backed up by Blockchain.', desc: 'Blockchain technology, known for its transparency, security, and decentralized nature, is revolutionizing industries by providing unprecedented opportunities for innovation, trust, and efficiency, paving the way for a more decentralized and interconnected future.' },
        { grad: KeyFeaturesGrad2, image: AiImg, tag: 'SMART', title: 'Powered by AI Technology.', desc: 'Creo Network, powered by advanced artificial intelligence (AI) technology, empowers users with intelligent algorithms, data-driven insights, and automated processes, enabling them to unlock new levels of productivity, creativity, and success in their endeavors.' },
        { grad: KeyFeaturesGrad3, image: Gamified, tag: 'FOR GAMERS', title: 'Gamified Experience.', desc: 'Creo Network offers a gamified experience, engaging users with interactive challenges, rewards, and achievements, creating an immersive and enjoyable environment that motivates and inspires them to excel in their pursuits.' }
    ]

    return (
        <div className='md:py-2 lg:py-6 relative'>
            <div className='container flex flex-col items-center gap-4'>

                <span className='textGrad text-xl uppercase font-semibold'>key features</span>
                <h2 className='text-center'>Meet the Most Powerful <br /> Web 3 Marketplace </h2>
                <div className='w-[100px] h-[5px] bg-gradient-to-r from-cyan-400 to-purple-500'></div>

                {/* grid */}
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                    {
                        CardsArray.map((item, index) => (
                            <div key={index} className='relative overflow-hidden'>

                                <div className='relative w-full h-full rounded-xl z-10 text-start pb-5 bg-[#171717] grid justify-items-center p-4'>

                                    <img className='absolute z-[-2] bottom-28 w-[100%] h-[100%] object-cover' src={item.grad} alt="img" />
                                    <img className='block w-[70%] h-[100%] mb-5' src={item.image} alt="img" />
                                    <div className='flex flex-col items-start justify-start gap-4'>
                                        <p className='text-[#B1B1B1] w-[90%] font-medium'>{item.tag}</p>
                                        <h2 className='text-white text-3xl font-bold text-left w-[70%]'>{item.title}</h2>
                                        <p className='text-[#B1B1B1]'>{item.desc}</p>
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

export default KeyFreatures