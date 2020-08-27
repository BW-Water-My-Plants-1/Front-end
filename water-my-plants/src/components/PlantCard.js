import React from 'react'
import {useParams, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const PlantCard = props => {
    const params = useParams()
    let plantid;
    if(props.plantid) {
        plantid = props.plantid
    }else{
        plantid = params.plantid
    }
    // const { nickname, species, lastwatered, frequency } = props.plant
    // const plant = useSelector(state => {
    //     state.addPlant.plants.find(p => {
    //         if(p.plantid.toString() === plantid.toString()) {
    //             console.log(p)
    //             return p
    //         }else{
    //             return null
    //         }
    //         console.log(p.plantid.toString(), plantid.toString())
    //     })
    //     // console.log(state.addPlant.plants)
    // })
    const plant = useSelector(state => state.addPlant.plants.find(p => p.plantid.toString() === plantid.toString()))
    
    // console.log(plant)
    return (
        <div className="plant-card" >
            <h2 className="plant-name" >Plant name: {plant.nickname}</h2>
            <p className="plant-specie" >Plant specie: {plant.species}</p>
            <p className="plant-water" >Water frequency: {plant.frequency}</p>
            <p className="last-watered" >Last watered: {plant.lastwatered}</p>
            <Link to={`/dashboard/plant/${plantid}/edit`} className="plant-button" >Edit</Link>


        </div>
    )
}

export default PlantCard
