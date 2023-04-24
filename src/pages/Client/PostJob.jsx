import React from 'react'

const PostJob = () => {
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

        </form>
    )
}

export default PostJob