import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'

const initialValue = {
    credentials: {
        username: "",
        email: "",
        password: ""
    }
}


const Register = () => {
    const [state, setState] = useState(initialValue)
    const history = useHistory()

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
            .post("/login", state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.payload)
                history.push("/dashboard")
            })
            .catch(err => {
                console.log(err)
            })
        setState(initialValue)
    }
    return (
        <div className="container-wrapper">
            <h1>Welcome to Water My Plants</h1>
            <form onSubmit={register}>
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
                        type="email"
                        name="email"
                        value={state.credentials.email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password: 
                    <input
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        onChange={handleChange}
                    />
                </label>
                <button>Sign Up</button>
            </form>

        </div>
    )
}

export default Register 