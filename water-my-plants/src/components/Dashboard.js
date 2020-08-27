import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import NoPlants from './NoPlants'
import PlantList from './PlantList'
import {plantListActions} from '../actions/plantListActions'
import {fetchUserInfo, fetchPlantsApi} from '../api/fetchApi'
import AddPlant from './AddPlant'
import EditPlants from './EditPlants'
import PlantCard from './PlantCard'

const Dashboard = (props) => {
    
    const [userInfo, setUserInfo] = useState([])
    const [plantList, setPlantList] = useState([])
    const history = useHistory()
    // console.log(props.plants)
    // console.log(plantList)


    // user information from api call
    useEffect(() => {
        fetchUserInfo()
            .then(res => {
                // console.log(res)
                setUserInfo(res.username)
            })
    }, [])
    // user information ends

    
    useEffect(() => {
        props.plantListActions()
      
    }, [])

    // get user plants
    useEffect(() => {
        fetchPlantsApi()
        .then(res => {
            // console.log(res)
            setPlantList(res)
        })
    },[])

    
    return (
        <div>
            <Navigation />
            <div className="user-container">
                <h2>Greetings, {userInfo}</h2>
                <button className="add-plants-button" onClick={() => history.push("/dashboard/add-plant")}>Add Plants</button>
            </div>
            {props.plants.length === 0 && <NoPlants />}
            <Switch>
                <Route path="/dashboard/plant/:plantid/edit">
                    <EditPlants plants={plantList} setPlantList={setPlantList} />
                </Route>
                <Route path="/dashboard/plant/:plantid" >
                    <PlantCard />
                </Route>
                <Route path="/dashboard/add-plant" >
                    <AddPlant plantList={plantList} setPlantList={setPlantList} />
                </Route>
                <Route exact path="/dashboard" >
                    <PlantList plantList={plantList}/>    
                </Route>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        plants: state.addPlant.plants
    }
}

export default connect(mapStateToProps, {plantListActions})(Dashboard)