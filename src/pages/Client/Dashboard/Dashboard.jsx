import React from 'react'
import { BrowseTalent, DiscoverTalent, GetStarted, Hero } from './components'

const Dashboard = () => {
    return (
        <div className='space-y-16 3xl:space-y-32'>
            <Hero />
            <BrowseTalent />
            <GetStarted />
            <DiscoverTalent />
        </div>
    )
}

export default Dashboard