import React from 'react'
import { ExploreProjects, FAQ, FindWork, ForEveryone, GettingStarted, Hero, HireTalent, KeyFreatures, TheFuture, TheJourney, TheNetwork } from './components'

const Home = () => {
    return (
        <div className='space-y-16 3xl:space-y-32'>
            <Hero />
            <ExploreProjects />
            <TheFuture />
            <FindWork />
            <KeyFreatures />
            <TheJourney />
            <TheNetwork />
            <ForEveryone />
            <GettingStarted />
            <HireTalent />
            <FAQ />
        </div>
    )
}

export default Home