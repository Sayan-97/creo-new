import React from 'react'
import { FiVideo } from 'react-icons/fi';
import { BsRecordCircle } from 'react-icons/bs';
import { HiPaperClip, HiUser } from 'react-icons/hi';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import avatar from '../../../../assets/images/forms/profile1.png'

const RightSidebar = () => {

    const actons = [
        { label: 'Schedule a Meeting', icon: FiVideo },
        { label: 'Record with Loom', icon: BsRecordCircle },
        { label: 'People', icon: HiUser },
        { label: 'Files and Links', icon: HiPaperClip },
        { label: 'Personal Notepad', icon: HiOutlineClipboardDocumentList }
    ]

    return (
        <div className='w-[250px] xl:w-[300px] h-full p-[12px] xl:p-6 pl-[0px] xl:pl-[0px]'>
            <div className='w-full h-full bg-accent divide-y divide-[#212253] rounded-3xl overflow-auto'>
                {/* top */}
                <div className='space-y-4 p-3'>
                    <div className='flex items-center space-x-3 cursor-pointer'>
                        {/* avatar */}
                        <div className='relative w-16 h-16 bg-[#0F103E] rounded-full bg-cover bg-no-repeat bg-center overflow-hidden' style={{ backgroundImage: `url(${avatar})` }}></div>
                        {/* info */}
                        <div className='flex-1'>
                            <h3 className='text-white text-base font-bold capitalize m-0'>Eleanor Pena</h3>
                            <p className='text-gray-400 text-[11px] py-px'>UX Designer</p>
                            <p className='text-white text-xs'>4:30AM GMT+10</p>
                        </div>
                    </div>

                    <p className='text-gray-400 text-xs'>I am a UI/UX Designer Focusing on designing User Experience for Digital Products</p>
                </div>

                {/* bottom */}
                <div className='space-y-4 p-3'>
                    {
                        actons.map((item, index) => (
                            <button key={index} className='w-full flex items-center p-[1px] bg-gradient text-white text-sm rounded-xl hover:scale-105 transition-all ease-in-out duration-200 whitespace-nowrap'>
                                <p className='flex items-center bg-accent px-3 h-12 rounded-xl w-full'>
                                    <item.icon className='w-5 h-auto mr-2' />
                                    {item.label}
                                </p>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSidebar