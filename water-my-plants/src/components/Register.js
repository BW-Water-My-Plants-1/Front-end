import React, { useState } from 'react'
import axios from 'axios'
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
        axios
        .post('https://watermyplants-dg0511.herokuapp.com/createnewuser', state.credentials)
            
            .then(res => {
                // console.log(res)
                localStorage.setItem("token", res.data.access_token)
                history.push("/login")
            })
            .catch(err => {
                console.log(err)
            })
        setState(initialValue)
    }

    const routeToSignIn = () => {
        history.push('/login')
      }

    return (
        <div className="container-wrapper">
            <div className="image-container">
                <h1 className="signUp-header">Welcome to Water My Plants</h1>
            </div>
            <div className="form-container">
            <form className="form" onSubmit={register}>
                <label className="form-label">
                    Username: 
                    <input
                        className="input-field"
                        placeholder="Enter user name"
                        type="text"
                        name="username"
                        value={state.credentials.username}
                        onChange={handleChange}
                        />
                </label>
                <label className="form-label">
                    Email: 
                    <input
                        className="input-field"
                        placeholder="Enter email address"
                        type="email"
                        name="email"
                        value={state.credentials.email}
                        onChange={handleChange}
                        />
                </label>
                <label className="form-label">
                    Password: 
                    <input
                        className="input-field"
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={state.credentials.password}
                        onChange={handleChange}
                        />
                </label>
                <button className="button">Create Account</button>
            </form>
            <p className="link-to-sign" >Already have an account? <span onClick={routeToSignIn} >Sign in</span> here</p>
        </div>
    </div>
    )
}

export default Register 