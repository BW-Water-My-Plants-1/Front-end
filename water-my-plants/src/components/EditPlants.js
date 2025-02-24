import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValue = {
    nickname: '',
    species: '',
    frequency: ''
}

function EditPlants({plants, setPlantList}) {
    // console.log(plants)
    const [editPlant, setEditPlant] = useState(initialValue) 
    const { plantid } = useParams()
    const history = useHistory()

    useEffect(() => {
        axiosWithAuth()
        .get(`/plants/plant/${plantid}`)
        .then(res => {
            console.log(res)
            setEditPlant(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [plantid])

    const handleChange = e => {
        e.persist()
        let value = e.target.value;
        setEditPlant({
            ...editPlant,
            [e.target.name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .patch(`plants/plant/${editPlant.plantid}`, editPlant)
            .then(res => {
                // console.log(res)
                setEditPlant(plants.map(plant => {
                    if(plant.plantid === res.data.plantid) {
                        return res.data
                    } else {
                        return plant
                    }
                }))
                setPlantList(editPlant)
                history.push(`/dashboard/plant/${plantid}`)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Name: 
                    <input 
                    type="text"
                    name="nickname"
                    value={editPlant.nickname}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Species: 
                    <input 
                    type="text"
                    name="species"
                    value={editPlant.species}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Frequency:
                    <select
                        name="frequency"
                        value={editPlant.frequency}
                        onChange={handleChange}  
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label>
                <button>Save Changes</button>
            </form>
        </div>
    )
}

export default EditPlants
