import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AllContracts, Apply, BuyConnects, ConnectHistory, FindWork, MembershipPlans, Messages, MyJobs, MyProposals, Overview, Profile, Reports, Settings, SubmitProposal, TransactionHistory, WorkDiary } from '../pages/Freelancer'

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

            {/* All Contracts */}
            <Route path='/freelancer/all-contracts' element={<AllContracts />}/>

            {/* Messages */}
            <Route path='/freelancer/messages' element={<Messages />}/>

            {/* Settings */}
            <Route path='/freelancer/settings' element={<Settings />}/>

            {/* Membership Plans */}
            <Route path='/freelancer/membership-plans' element={<MembershipPlans />}/>

            {/* Buy Connects */}
            <Route path='/freelancer/buy-connects' element={<BuyConnects />}/>
        </Routes>
    )
}

export default Freelancer