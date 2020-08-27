import React from 'react'

const PlantCard = props => {
    const { nickname, species, lastwatered, frequency } = props.plant
    // console.log(props.plant)
    return (
        <div className="plant-card" >
            <h2 className="plant-name" >Plant name: {nickname}</h2>
            <p className="plant-specie" >Plant specie: {species}</p>
            <p className="plant-water" >Water frequency: {frequency}</p>
            <p className="last-watered" >Last watered: {lastwatered}</p>
            <button className="plant-button" >Edit</button>


        </div>
    )
}

export default PlantCard
