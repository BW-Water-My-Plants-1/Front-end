import React from 'react'
import { Link, Route, useHistory } from 'react-router-dom'
import PlantCard from './PlantCard'
import EditPlants from './EditPlants'



function PlantList({ plantList }) {
    const history = useHistory()
 
    // console.log(plantList)
    return (
        <div className="dashboard" >
           {plantList.map(plant => (
               <div className="link-card" key={plant.plantid} onClick={() => history.push( `/dashboard/plant/${plant.plantid}`)}  >
                    <PlantCard
                    plantid={plant.plantid}
                />
                {/* <Link to={`/dashboard/plant/${plant.plantid}/edit`} className="plant-button">
                    <EditPlants />
                </Link > */}
                {/* <Route path="/dashboard/plant/:plantid/edit">
                    <EditPlants />
                </Route> */}
               </div>
                ))} 
               
        </div>
    )
}


export default PlantList
