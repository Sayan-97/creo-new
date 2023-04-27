import React from 'react'
import { useNavigate } from 'react-router-dom'
import SuccessImg from '../../assets/images/forms/Yellow party popper.png'
const Success = () => {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/client/dashboard')
    }, 1000)

    return (
        <div className='w-full'>
            <div className='container'>
                <form className='rounded-xl text-white grid justify-items-center'>

                    <img src={SuccessImg} alt="img" />

                    <p className='text-2xl'>Congratulations! Your job post is now live.</p>

                </form>
            </div>
        </div>
    )
}

export default Success