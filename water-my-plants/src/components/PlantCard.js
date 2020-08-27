import React from 'react'

const PlantCard = props => {
    const { nickname, species, lastwatered, frequency } = props.plant
    console.log(props.plant)
    return (
        <div >
            <h2>Plant name: {nickname}</h2>
            <p>Plant specie: {species}</p>
            <p>Water frequency: {frequency}</p>
            <p>Last watered: {lastwatered}</p>

        </div>
    )
}

export default PlantCard
