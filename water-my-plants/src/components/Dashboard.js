import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import NoPlants from './NoPlants'
import {plantListActions} from '../actions/plantListActions'
import {fetchUserInfo} from '../api/fetchApi'

const Dashboard = (props) => {
    const [userInfo, setUserInfo] = useState()
    console.log(props)

    // useEffect(() => {
    //     fetchUserInfo()
    //         .then(res => {
    //             console.log(res)
    //             setUserInfo(res)
    //         })
    // }, [])

    useEffect(() => {
        props.plantListActions()
    }, [])
    
    return (
        <div>
            <Navigation />
            <div className="user-container">
                <h2>Greetings {userInfo}</h2>
            </div>
            {props.noPlants && <NoPlants />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noPlants: state.addPlant.noPlants
    }
}

export default connect(mapStateToProps, {plantListActions})(Dashboard)