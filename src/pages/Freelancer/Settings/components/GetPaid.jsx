import React, {useState} from 'react'
import Metamask from '../../../../assets/images/logos/metamask-icon.png'
import USDT from '../../../../assets/images/svg/USDT.svg'

const GetPaid = () => {

  const [showSchModal, setShowSchModal] = useState(false)

  const setSchModal = () => {
    setShowSchModal(!showSchModal)
  }

  return (
    <div className='divide-y divide-[#474747] space-y-10'>
      {/* balance */}
      <div className='p-[32px] md:p-14 space-y-8'>
        <h2 className='text-white text-2xl font-bold'>Balance</h2>

        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex flex-wrap items-center text-white text-base md:text-xl space-x-2'>
            <div>Your balance is:</div>
            <div className=' bg-gradient-to-r from-cyan-400 to-violet-500 text-base flex items-center p-2 rounded-lg uppercase'>
              <img className='w-7 h-auto mr-1' src={USDT} alt='usdt icon' />
              USDT
            </div>
            <div>0.07</div>
          </div>
          <button className='flex items-center  bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
            Get paid now
          </button>
        </div>
      </div>

      {/* Payment details */}
      <div className='divide-y divide-[#474747] rounded-2xl'>
        {/* last payment */}
        <div className='p-[32px] md:p-14 space-y-8'>
          <h2 className='text-white text-2xl font-bold'>Payment details</h2>

          <h3 className='text-white text-xl font-bold'>Last Payment</h3>

          <p className='text-white'>You have not made any withdrawals yet.</p>
        </div>

        {/* schedule */}
        <div className='flex flex-col md:flex-row items-center p-[32px] md:p-14 gap-4'>
          <div className='flex-1 space-y-8'>
            <h3 className='text-white text-xl font-bold'>Schedule</h3>
            <p className='text-white'>Quarterly (next on <span>Mar 27</span>) to Metamask  ID- <span>2329UR49823RHJKI</span></p>
          </div>
          <button onClick={() => setSchModal()} className='flex items-center  bg-gradient-to-r from-cyan-400 to-violet-500 text-white text-sm lg:text-base font-semibold capitalize px-4 py-2 rounded-lg shadow hover:scale-105 transition-all ease-in-out duration-200'>
            Edit schedule
          </button>
          {/* <EditScheduleModal
            show={showSchModal}
            setSchModal={setSchModal}
          /> */}
        </div>

        {/* payment method */}
        <div className='p-[32px] md:p-14 space-y-8'>
          <h3 className='text-white text-xl font-bold'>Payment method</h3>

          <div className='flex flex-col md:flex-row items-center gap-4'>
            <img src={Metamask} alt='metamask icon' className='w-48 h-auto' />
            <p className='text-white font-semibold'>ID - <span>2329UR49823RHJKI</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetPaid