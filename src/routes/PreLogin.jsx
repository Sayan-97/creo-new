import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AsClient, AsFreelancer, Home, SignIn, SignUp } from '../pages/PreLogin'

const PreLogin = () => {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path='/' element={<Home />}/>

            {/* SignIn Page */}
            <Route path='/login' element={<SignIn />}/>

            {/* SignUp Pages */}
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/signup/freelancer' element={<AsFreelancer />}/>
            <Route path='/signup/client' element={<AsClient />}/>
        </Routes>
    )
}

export default PreLogin