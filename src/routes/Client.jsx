import React from 'react'

import { Routes, Route } from 'react-router-dom'
import { Dashboard, HireDesigners, HireDevelopers, JobDetails, Messages, MyJobs, MyProposals, PostJob, Settings, Success, Timesheet, TransactionHistory } from '../pages/Client'

const Client = () => {
    return (
        <Routes>
            {/* Dashboard */}
            <Route path='/client/dashboard' element={<Dashboard />}/>

            {/* Messages */}
            <Route path='/client/messages' element={<Messages />}/>

            {/* Job Routes */}
            <Route path='/client/jobs/post-job' element={<PostJob />}/>
            <Route path='/client/jobs/job-details' element={<JobDetails />}/>
            <Route path='/client/jobs/success' element={<Success />}/>

            <Route path='/client/jobs/my-jobs' element={<MyJobs />}/>
            <Route path='/client/jobs/my-proposals' element={<MyProposals />}/>

            {/* Hire Designers */}
            <Route path='/client/hire-designers' element={<HireDesigners />}/>

            {/* Hire Developers */}
            <Route path='/client/hire-developers' element={<HireDevelopers />}/>

            {/* Transaction History */}
            <Route path='/client/transaction-history' element={<TransactionHistory />}/>

            {/* Timesheet */}
            <Route path='/client/timesheet' element={<Timesheet />} />

            {/* Messages */}
            <Route path='/client/messages' element={<Messages />} />

            {/* Settings */}
            <Route path='/client/settings' element={<Settings />}/>
        </Routes>
    )
}

export default Client