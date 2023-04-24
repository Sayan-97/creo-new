import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Apply, FindWork, MyProposals, SubmitProposal } from '../pages/Freelancer'

const Freelancer = () => {
    return (
        <Routes>
            {/* Findwork Page */}
            <Route path='/freelancer/findwork' element={<FindWork />}/>
            <Route path='/freelancer/findwork/apply' element={<Apply />}/>
            <Route path='/freelancer/findwork/submit-proposal' element={<SubmitProposal />}/>

            {/* My Proposals */}
            <Route path='/freelancer/my-proposals' element={<MyProposals />}/>
        </Routes>
    )
}

export default Freelancer