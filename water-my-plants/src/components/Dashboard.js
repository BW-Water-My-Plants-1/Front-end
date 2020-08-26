import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import NoPlants from './NoPlants'
import PlantList from './PlantList'
import {plantListActions} from '../actions/plantListActions'
import {fetchUserInfo} from '../api/fetchApi'

const Dashboard = (props) => {
    
    const [userInfo, setUserInfo] = useState([])
    const [plantList, setPlantList] = useState([])
    // console.log(props)
    // console.log(props.plants)

    useEffect(() => {
        fetchUserInfo()
            .then(res => {
                // console.log(res)
                setUserInfo(res.username)
            })
    }, [])

    useEffect(() => {
        props.plantListActions()
      
    }, [])
    
    return (
        <div>
            <Navigation />
            <div className="user-container">
                <h2>Greetings, {userInfo}</h2>
                <button className="add-plants-button" >Add Plants</button>
            </div>
            {props.noPlants && <NoPlants />}
            <PlantList plants={props.plants} />

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        noPlants: state.addPlant.noPlants,
        plants: state.addPlant.plants
    }
}

export default connect(mapStateToProps, {plantListActions})(Dashboard)