import React from 'react'
import emptyPot from '../assets/empty-pot.png'

function NoPlants() {
    return (
        <div className="wrapper">
            <img src={emptyPot} alt="empty pot" />
            <p>You have no plants</p>
            <button>Add Plant</button>
        </div>
    )
}

export default NoPlants
