import React from 'react'
import { useSelector } from 'react-redux'

import { PreLogin, Client, Freelancer } from '../routes'

export default function Layout() {

    const userType = useSelector((state) => state.user.userType)

    if (userType === 'client') {
        return <Client />
    } else if (userType === 'freelancer') {
        return <Freelancer />
    } else {
        return <PreLogin />
    }
}