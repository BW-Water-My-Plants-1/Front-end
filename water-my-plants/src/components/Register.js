import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const initialValue = {
    credentials: {
        username: "",
        email: "",
        password: ""
    }
}


const Register = () => {
    const [state, setState] = useState(initialValue)

    const handleChange = (e) => {
        setState({
            credentials: {
                ...state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    const register = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/register", state.credentials)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className="container-wrapper">
            <h1>Welcome to Water My Plants</h1>
            <form >
                <label>
                    Username: 
                    <input
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Email: 
                    <input
                        type="text"
                        name="email"
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password: 
                    <input
                        type="password"
                        name="password"
                        value={state.credentials.username}
                        onChange={handleChange}
                    />
                </label>
            </form>

        </div>
    )
}

export default Register 