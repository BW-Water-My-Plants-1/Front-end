import React from 'react'
import emptyPot from '../assets/empty-pot.png'

function NoPlants() {
    return (
        <div className="wrapper">
            <img className="plant-image" src={emptyPot} alt="empty pot" />
            <p className="wrapper-paragraph">Oh no! You have no plants. Let's add your plants here</p>
            <button className="wrapper-button" >Add Plant</button>
        </div>
    )
}

export default NoPlants
