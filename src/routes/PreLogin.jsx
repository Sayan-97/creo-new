import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/PreLogin'

const PreLogin = () => {
    return (
        <Routes>
            {/* Landing Page */}
            <Route path='/' element={<Home />}/>
        </Routes>
    )
}

export default PreLogin