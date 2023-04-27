import React from 'react'
import USDT from '../../assets/images/svg/USDT.svg'

const TransactionHistory = () => {
    return (
        <div className='container-small'>
            <div className='w-full grid gap-2'>
                <h2 className='text-3xl font-semibold'>Transaction History</h2>
                <p className='flex gap-2'>Balance: <img src={USDT} alt="img" />USDT 300</p>
            </div>

            <div className='w-full bg-[#171717] rounded-xl py-16 grid px-10 gap-5'>
                <h2 className='text-2xl text-semibold'>Statement Period</h2>

                <table className='w-full space-y-4'>
                    <tr className='grid grid-cols-6 text-left font-bold'>
                        <th className=''>Date</th>
                        <th className=''>Type</th>
                        <th className=''>Wallet</th>
                        <th className=''>Client</th>
                        <th className=''>Amount</th>
                        <th className=''>Referral ID</th>
                    </tr>
                    <tr className='grid grid-cols-6'>
                        <td className=''>June 10, 2023</td>
                        <td className=''>Withdraw Fees</td>
                        <td className=''>Metamask (ID f435jff35)</td>
                        <td className=''>Mindtree</td>
                        <td className=''>USDT 200</td>
                        <td className=''>34533</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default TransactionHistory