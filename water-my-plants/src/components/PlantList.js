import React from 'react'
import { Link } from 'react-router-dom'
import PlantCard from './PlantCard'

function PlantList({plants}) {
    console.log(plants)
    return (
        <div className="plant-list">
           {plants.map(plant => {
            //    <Link key={plant.id} to={`plants/plant/${plant.id}`}>
                // <PlantCard plant={plant}/>
            //    </Link>
           })} 
        </div>
    )
}

export default PlantList
