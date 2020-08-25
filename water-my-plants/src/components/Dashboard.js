import React, { useState, useEffect } from 'react'
import Navigation from './Navigation'
import {fetchUserInfo} from '../api/fetchApi'

const Dashboard = () => {
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        fetchUserInfo()
            .then(res => {
                console.log(res)
                setUserInfo(res)
            })
    }, [])
    
    return (
        <div>
            <Navigation />
            <div className="user-container">
                <h2>Greetings {userInfo}</h2>
            </div>
        </div>
    )
}

export default Dashboard