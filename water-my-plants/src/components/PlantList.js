import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PlantCard from './PlantCard'



function PlantList({ plantList }) {
 
    // console.log(plantList)
    return (
        <div className="dashboard" >
           {plantList.map(plant => (
               <Link key={plant.plantid} to={`/plant/${plant.plantid}`} >
                    <PlantCard
                    plant={plant}
                />
               </Link>
                ))} 
        </div>
    )
}


export default PlantList
