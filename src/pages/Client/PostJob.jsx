import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import Doller from '../../assets/images/svg/dollar-circle.svg'
import Clock from '../../assets/images/svg/clock.svg'
import { RxCrossCircled } from 'react-icons/rx'
import USDT from '../../assets/images/svg/USDT.svg'
import Conversation from '../../assets/images/svg/book.svg'

const PostJob = () => {

    const [hourlyRate, setHourlyRate] = useState('')

    const handleChange = () => {
        event.preventDefault()
        setHourlyRate(!hourlyRate)
    }

    const skills = ['UI/UX Designing', 'Web Design', ' Graphic Design', 'Mobile App Design', 'UX Designing', 'Figma'];

    return (
        <form action="" className='space-y-6'>

            <div className='grid'>
                <h4>Create a new <span className='textGrad'>Job post</span></h4>
                <p>Lets get started by adding few important details and information.</p>
            </div>

            {/* Project Name */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent p-4 rounded-card space-y-6'>
                    <div className='flex items-end gap-2'>
                        <h6>Project Name</h6>
                        <span className='required'>Required</span>
                    </div>

                    {/* Title */}
                    <div className='grid gap-1'>
                        <label htmlFor="title">Write a title for your job post</label>
                        <input type="text" id='title' placeholder='Enter your title' />
                    </div>

                    <div>
                        <p>Example titles</p>
                        <ul className='list-disc pl-5'>
                            <li>Build responsive WordPress site with booking/payment functionality</li>
                            <li>Graphic designer needed to design ad creative for multiple campaigns</li>
                            <li>Facebook ad specialist needed for product launch</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Project Category */}
            <div className='bg-gradient p-[1px] rounded-card'>
                <div className='bg-accent p-4 rounded-card space-y-6'>
                    <div className='flex items-end gap-2'>
                        <h6>Project Category</h6>
                        <span className='required'>Required</span>
                    </div>

                    {/* Category */}
                    <div className='grid gap-1'>
                        <label htmlFor="category">Write a category for your job post</label>
                        <input type="text" id='category' placeholder='Enter your category' />
                    </div>
                </div>
            </div>

            {/* Skills */}
            <div className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-xl'>
                <div className='bg-[#171717] w-full h-full rounded-xl p-5 space-y-4'>

                    <div className='flex gap-1 items-end'>
                        <h3 className='text-xl font-semibold'>Skills</h3>
                        <span className='text-sm italic text-[#646464]'>Required</span>
                    </div>

                    <div class="w-full mb-2">
                        <label class="block text-white text-md font-medium mb-2" for="skills">
                            The main skills required for your project.
                        </label>
                        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="skills" type="text" placeholder="Enter Skills required" />
                        <p class="text-red-500 text-xs italic">Enter the skills required</p>
                    </div>

                    <div className='space-y-3'>
                        <p className='text-lg font-semibold'>Suggestions</p>
                        <div className='w-full flex flex-wrap gap-4'>

                            {
                                skills.map((items, index) => (
                                    <button key={index} className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                                        <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                            <AiOutlinePlus />{items}
                                        </div>
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>

            {/* Scope */}
            <div className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-xl'>
                <div className='bg-[#171717] w-full h-full rounded-xl p-5 space-y-4'>

                    <div className='flex gap-1 items-end'>
                        <h3 className='text-xl font-semibold'>Scope</h3>
                        <span className='text-sm italic text-[#646464]'>Required</span>
                    </div>

                    <p>Estimate the scope of your project</p>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" id='large' />
                                <label for='large' className='text-lg font-semibold'>Large</label>
                            </div>
                            <span className='ml-5 text-sm italic text-[#646464]'>Design and build full project.</span>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" id='medium' />
                                <label for='medium' className='text-lg font-semibold'>Medium</label>
                            </div>
                            <span className='ml-5 text-sm italic text-[#646464]'>Well-defined project.</span>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex items-center gap-1'>
                                <input type="checkbox" id='small' />
                                <label for='small' className='text-lg font-semibold'>Small</label>
                            </div>
                            <span className='ml-5 text-sm italic text-[#646464]'>Quick tasks.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Budget */}
            <div className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-xl'>
                <div className='bg-[#171717] w-full h-full rounded-xl p-5 space-y-4'>
                    <div className='flex gap-1 items-end'>
                        <img src={Doller} alt="img" />
                        <h3 className='text-xl font-semibold'>Tell us about your budget</h3>
                        <span className='text-sm italic text-[#646464]'>Required</span>
                    </div>

                    <p>This will help us match you to talent within your range.</p>

                    <div className='flex max-md:flex-col items-center gap-5'>

                        <button onClick={handleChange} className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                            <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                <AiOutlinePlus />Add Hourly rate
                            </div>
                        </button>

                        <p>Or</p>

                        <button className='bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-lg'>
                            <div className='bg-[#171717] flex items-center justify-center px-5 py-2 rounded-lg uppercase'>
                                <AiOutlinePlus />Add Project Budget
                            </div>
                        </button>

                    </div>
                </div>
            </div>

            {/* Max project budget */}
            <div className={`w-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-xl ${hourlyRate === true ? '' : 'hidden absolute'}`}>
                <div className='bg-[#171717] w-full h-full rounded-xl p-5 space-y-4'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex gap-1 items-end'>
                            <img src={Clock} alt="img" />
                            <h3 className='text-xl font-semibold'>Scope</h3>
                        </div>
                        <RxCrossCircled className='text-xl cursor-pointer' onClick={handleChange} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-end gap-4'>
                            <p>From:</p>
                            <div className='relative'>
                                <input type="number" className='w-44 rounded-lg pl-24 text-black' placeholder='0.00' />
                                <div className='absolute top-[50%] translate-y-[-50%] left-2 bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center gap-1 px-2 py-1 rounded-lg'>
                                    <img src={USDT} alt="img" />
                                    <p>USDT</p>
                                </div>
                            </div>
                            <p className='text-lg'>/ hr</p>
                        </div>
                        <div className='flex items-end gap-4'>
                            <p>To:</p>
                            <div className='relative'>
                                <input type="number" className='w-44 rounded-lg pl-24 text-black' placeholder='0.00' />
                                <div className='absolute top-[50%] translate-y-[-50%] left-2 bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center gap-1 px-2 py-1 rounded-lg'>
                                    <img src={USDT} alt="img" />
                                    <p>USDT</p>
                                </div>
                            </div>
                            <p className='text-lg'>/ hr</p>
                        </div>
                    </div>
                    <button className='bg-gradient-to-r from-cyan-400 to-violet-500 px-8 py-2 rounded-lg'>Save</button>
                </div>
            </div>

            {/* Conversation */}
            <div className='w-full bg-gradient-to-r from-cyan-400 to-violet-500 p-[1px] rounded-xl'>
                <div className='bg-[#171717] w-full h-full rounded-xl p-5 space-y-4'>
                    <div className='flex gap-1 items-end'>
                        <img src={Conversation} alt="img" />
                        <h3 className='text-xl font-semibold'>Conversation</h3>
                        <span className='text-sm italic text-[#646464]'>Required</span>
                    </div>

                    <div class="w-full mb-2">
                        <label class="block text-white text-md font-medium mb-2" for="summery">
                            Talent are looking for
                        </label>
                        <textarea class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-28" id="summery" type="text" placeholder="Enter Skills required" />
                        <p class="text-red-500 text-xs italic">Add your Summery</p>
                    </div>
                </div>
            </div>

            {/* Checkbox's */}
            <div className='grid'>
                <div className='space-x-2 flex items-start'>
                    <input type="checkbox" id='mail' className='h-6' />
                    <label htmlFor="mail" className='text-base'>Send me emails and announcements made on Creo Network</label>
                </div>

                <div className='space-x-2 flex items-start'>
                    <input type="checkbox" id='tnc' className='h-6' />
                    <label htmlFor="tnc" className='text-base'>Yes, I understand and agree to the Creo Network Terms of Service, including the User Agreement and Privacy Policy.</label>
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/client/jobs/job-details'>
                    <button className='primary px-5 py-2'>Post Job</button>
                </Link>
            </div>

        </form>
    )
}

export default PostJob