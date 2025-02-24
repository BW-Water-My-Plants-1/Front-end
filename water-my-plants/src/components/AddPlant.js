import React, { useState, useEffect } from 'react'
import {fetchPlantsApi} from '../api/fetchApi'
import {useHistory} from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialValue = {
    nickname: '',
    species: '',
    frequency: ''
}

function AddPlant(props) {
    const { plantList, setPlantList } = props;
    const [form, setForm] = useState(initialValue)
    const history = useHistory()

    useEffect(() => {
        fetchPlantsApi()
        .then(res => {
            // console.log(res)
            setPlantList(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post(`plants/myplants/add`, {...form})
            .then(res => {
                // console.log(res)
                setPlantList([...plantList, res])
                setForm(initialValue)
                history.push('/dashboard')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleChange = e => {
        e.persist()
        let value = e.target.value;
        setForm({
            ...form,
            [e.target.name]: value
        })
        // console.log(form)
    }

    return (
        <div>
            <h2>Add a plant</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Plant Name: 
                    <input 
                    placeholder="Enter your plants name"
                    type="text"
                    name="nickname"
                    value={form.nickname}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Species: 
                    <input 
                    placeholder="Enter plant specie"
                    type="text"
                    name="species"
                    value={form.species}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Frequency:
                    <select
                        name="frequency"
                        value={form.frequency}
                        onChange={handleChange}  
                    >
                        <option value="daily">Daily</option>
                        <option value="weekly">weekly</option>
                        <option value="bi-weekly">Bi-weekly</option>
                        <option value="monthly">Monthly</option>
                    </select>
                </label>
                <button>Add Plant</button>
            </form>
        </div>
    )
}

export default AddPlant
