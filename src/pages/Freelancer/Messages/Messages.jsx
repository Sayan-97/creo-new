import React, {useState} from 'react'
import { HiChevronLeft } from 'react-icons/hi';

import { MessagesArea, RightSidebar, Sidebar } from './components';

const Messages = () => {

    const [showMessagesMobile, _showMessagesMobile] = useState(false);

    const [showRightSidebar, _showRightSidebar] = useState(false);

    return (
        <div className='container'>
            <div className='h-screen bg-accent divide-y divide-[#414153] rounded-2xl overflow-hidden'>
                <div className='relative w-full h-full flex'>
                    {/* sidebar */}
                    <Sidebar />

                    {/* content */}
                    <div className={`${showMessagesMobile ? 'translate-x-0' : 'translate-x-full'} absolute md:relative z-20 md:flex-1 h-full flex bg-[#272727] md:translate-x-0 transition-all ease-in-out duration-200`}>
                        {/* messages section */}
                        <MessagesArea />

                        {/* right sidebar */}
                        <div className='h-full relative'>
                            <div className={`${showRightSidebar ? '-translate-x-full' : 'translate-x-2'} h-full flex items-center absolute lg:relative lg:translate-x-0 transition-all ease-in-out duration-200`}>
                                <div onClick={() => _showRightSidebar(!showRightSidebar)} className='lg:hidden w-8 h-8 absolute -left-10 bg-black text-white rounded-full overflow-hidden cursor-pointer'>
                                    <HiChevronLeft className={`${showRightSidebar ? 'rotate-180' : ''} w-full h-auto transition-all ease-in-out duration-200`} />
                                </div>
                                <RightSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages