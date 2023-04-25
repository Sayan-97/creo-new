import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Apply, ConnectHistory, FindWork, MyJobs, MyProposals, Overview, Profile, Reports, SubmitProposal, TransactionHistory, WorkDiary } from '../pages/Freelancer'

const Freelancer = () => {
    return (
        <Routes>
            {/* Findwork Page */}
            <Route path='/freelancer/findwork' element={<FindWork />}/>
            <Route path='/freelancer/findwork/apply' element={<Apply />}/>
            <Route path='/freelancer/findwork/submit-proposal' element={<SubmitProposal />}/>

            {/* My Proposals */}
            <Route path='/freelancer/my-proposals' element={<MyProposals />}/>

            {/* My Jobs */}
            <Route path='/freelancer/my-jobs' element={<MyJobs />}/>

            {/* Overview */}
            <Route path='/freelancer/overview' element={<Overview />}/>

            {/* Reports */}
            <Route path='/freelancer/reports' element={<Reports />}/>

            {/* Connect History */}
            <Route path='/freelancer/connect-history' element={<ConnectHistory />}/>

            {/* Transaction History */}
            <Route path='/freelancer/transaction-history' element={<TransactionHistory />}/>

            {/* Work Diary */}
            <Route path='/freelancer/work-diary' element={<WorkDiary />}/> 

            {/* Profile Page */}
            <Route path='/freelancer/profile' element={<Profile />}/>
        </Routes>
    )
}

export default Freelancer