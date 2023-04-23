import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Client'

const Client = () => {
    return (
        <Routes>
            {/* Dashboard */}
            <Route path='/client/dashboard' element={<Dashboard />}/>
        </Routes>
    )
}

export default Client