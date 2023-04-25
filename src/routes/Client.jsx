import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Dashboard, HireDesigners, HireDevelopers, Messages, MyJobs, MyProposals, PostJob, Settings } from '../pages/Client'

const Client = () => {
    return (
        <Routes>
            {/* Dashboard */}
            <Route path='/client/dashboard' element={<Dashboard />}/>

            {/* Messages */}
            <Route path='/client/messages' element={<Messages />}/>

            {/* Job Routes */}
            <Route path='/client/jobs/post-job' element={<PostJob />}/>

            <Route path='/client/jobs/my-jobs' element={<MyJobs />}/>
            <Route path='/client/jobs/my-proposals' element={<MyProposals />}/>

            {/* Hire Designers */}
            <Route path='/client/hire-designers' element={<HireDesigners />}/>

            {/* Hire Developers */}
            <Route path='/client/hire-developers' element={<HireDevelopers />}/>

            {/* Settings */}
            <Route path='/client/settings' element={<Settings />}/>
        </Routes>
    )
}

export default Client