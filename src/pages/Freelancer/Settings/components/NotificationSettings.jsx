import React from 'react'

const NotificationSettings = () => {
  return (
    <div className='space-y-10'>
      {/* messages */}
      <form className='w-full'>
        <div className='divide-y divide-[#474747]'>
          {/* messages */}
          <div>
            <div className='p-[28px] md:p-14 !pb-0'>
              <h2 className='text-white text-2xl font-bold m-0'>Messages</h2>
            </div>
            <div className='divide-y divide-[#474747]'>
              {/* Desktop */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Desktop</h3>
                {/* Show notifications for */}
                <div className='space-y-2'>
                  <label className='text-white text-sm lg:text-base font-medium'>Show notifications for :</label>
                  <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6'>
                    <div className='w-full md:w-max'>
                      <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">All activity</option>
                        {
                          [...Array(5)].map((index) => (
                            <option key={index} value="question">Option</option>
                          ))
                        }
                      </select>
                    </div>
                    {/* checkboxe */}
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Play a sound</p>
                    </div>
                  </div>
                </div>
                {/* Increment message counter for */}
                <div className='space-y-2'>
                  <label className='text-white text-sm lg:text-base font-medium'>Increment message counter for :</label>
                  <div>
                    <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                      <option value="">All activity</option>
                      {
                        [...Array(5)].map((index) => (
                          <option key={index} value="question">Option</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
              {/* Mobile */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Mobile</h3>
                {/* Show notifications for */}
                <div className='space-y-2'>
                  <label className='text-white text-sm lg:text-base font-medium'>Show notifications for :</label>
                  <div>
                    <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                      <option value="">All activity</option>
                      {
                        [...Array(5)].map((index) => (
                          <option key={index} value="question">Option</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                {/* Increment message counter for */}
                <div className='space-y-2'>
                  <label className='text-white text-sm lg:text-base font-medium'>Increment message counter for :</label>
                  <div>
                    <select className='w-full md:w-[400px] lg:w-[500px] bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                      <option value="">All activity</option>
                      {
                        [...Array(5)].map((index) => (
                          <option key={index} value="question">Option</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>
              {/* Email */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Email</h3>
                <p className='text-white text-sm md:text-base'>(sending to xyz@email.com)</p>
                {/* Send an email with unread activity for: */}
                <div className='space-y-2'>
                  <label className='text-white text-sm lg:text-base font-medium'>Send an email with unread activity for :</label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                      <select className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">All activity</option>
                        {
                          [...Array(5)].map((index) => (
                            <option key={index} value="question">Option</option>
                          ))
                        }
                      </select>
                    </div>
                    <div>
                      <select className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">All activity</option>
                        {
                          [...Array(5)].map((index) => (
                            <option key={index} value="question">Option</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                </div>
                {/* checkboxe */}
                <div className='flex !items-start space-x-2'>
                  <div>
                    <input
                      type='checkbox'
                      className='lg:w-5 lg:h-5'
                    />
                  </div>
                  <p className='text-white text-sm lg:text-base'>Only send when offline or idle</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Upwork Email Updates */}
          <div>
            <div className='p-[28px] md:p-14'>
              <h2 className='text-white text-2xl font-bold'>Other Upwork Email Updates</h2>
              <p className='text-white text-sm md:text-base'>(Sending email notification to xyz@email.com)</p>
            </div>
            <div className='divide-y divide-[#474747]'>
              {/* Recruting */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Recruting</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6'>
                  {/* checkboxes */}
                  <div className='space-y-3'>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A job is posted or modified</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A proposal is received</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>An interview is accepted or offer terms are modified</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>An interview or offer is declined or withdrawn</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>An offer is accepted</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A job posting will expire soon</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A job posting expired</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>No interviews have been initiated</p>
                    </div>
                  </div>
                  {/* dropdown */}
                  <div className='space-y-2'>
                    <label className='text-white text-sm lg:text-base font-medium'>Receive recruiting emails for :</label>
                    <div>
                      <select className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">Only job I post</option>
                        {
                          [...Array(50)].map((index) => (
                            <option key={index} value="option">option</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* Freelancer and Agency Proposals */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Freelancer and Agency Proposals</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>An interview is initiated</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>An offer or interview invitation is received</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>An offer or interview invitation is withdrawn</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>A Proposal is rejected</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>A job I applied to has been cancelled or closed</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>A proposal is withdrawn</p>
                  </div>
                </div>
              </div>
              {/* Contracts */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Contracts</h3>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-y-6'>
                  {/* checkboxes */}
                  <div className='space-y-3'>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A hire is made or a contract begins</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Time logging begins</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Contract terms are modified</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A contract ends</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>A timelog is ready for review</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Feedback changes are made</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Daily snapshot of time recorded by your freelancers</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Weekly billing digest</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Other contract related messages</p>
                    </div>
                    <div className='flex !items-start space-x-2'>
                      <div>
                        <input
                          type='checkbox'
                          className='lg:w-5 lg:h-5'
                        />
                      </div>
                      <p className='text-white text-sm lg:text-base'>Payment receipts and other financial related emails</p>
                    </div>
                  </div>
                  {/* dropdown */}
                  <div className='space-y-2'>
                    <label className='text-white text-sm lg:text-base font-medium'>Receive contract emails for :</label>
                    <div>
                      <select className='w-full bg-white text-sm lg:text-base placeholder:text-gray-400 px-3 py-2 rounded-lg focus:outline-none border-2 border-transparent focus:border-[#9359d5] mt-1'>
                        <option value="">Only freelancers I hire</option>
                        {
                          [...Array(50)].map((index) => (
                            <option key={index} value="option">option</option>
                          ))
                        }
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* Groups & Invitations */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Groups & Invitations</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Group membership events occur</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Someone forwards me a freelancer's profile</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Someone sends me an invitation</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Team access is revoked</p>
                  </div>
                </div>
              </div>
              {/* Membership */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Membership</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Group membership events occur</p>
                  </div>
                </div>
              </div>
              {/* Miscellaneous */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Miscellaneous</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Upwork has a tip to help me start</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Notify me of Upwork events happening in my local area</p>
                  </div>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Notify me of Upwork events happening in my local area</p>
                  </div>
                </div>
              </div>
              {/* Project Recommendations For Our Top Talent */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Project Recommendations For Our Top Talent</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Send recommendations if I qualify as top Upwork talent</p>
                  </div>
                </div>
              </div>
              {/* Communications from Upwork */}
              <div className='p-[28px] md:px-14 md:py-10 space-y-6'>
                <h3 className='text-white text-xl font-bold'>Communications from Upwork</h3>
                {/* checkboxes */}
                <div className='space-y-3'>
                  <div className='flex !items-start space-x-2'>
                    <div>
                      <input
                        type='checkbox'
                        className='lg:w-5 lg:h-5'
                      />
                    </div>
                    <p className='text-white text-sm lg:text-base'>Send me genuinely useful emails every now and then to help me get the most out of Upwork</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NotificationSettings