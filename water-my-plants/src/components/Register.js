import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 80vw;
    margin: 0 auto;
`

const RegisterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 50vh;
    width: 25vw;
    border-radius: 10%;
`

const StyledH2 = styled.h2`
    font-size: 1.5rem;
    padding: 2%;
    margin: 2% auto;
    width: 80%;
`

const StyledInput = styled.input`
    padding: 2%;
    width: 80%;
`

const StyledSubmit = styled.button`
    padding: 1%;
    margin: 5% auto;
    width: 60%;
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    text-align: center;
`

const initialValue = {
    registerInfo: {
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
            registerInfo: {
                ...state.registerInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    const register = (evt) => {
        evt.preventDefault();
        axios
        .post('https://watermyplants-dg0511.herokuapp.com/createnewuser', state.registerInfo)
            .then(res => {
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
        <StyledDiv>
            <form onSubmit={register}>
            <RegisterDiv>
                <div>
                    <h1>Welcome to Water My Plants</h1>                    
                </div>

                            <StyledH2>Username</StyledH2>
                            <StyledInput
                            type="text"
                            name="username"
                            placeholder="Enter user name"
                            value={state.registerInfo.username}
                            onChange={handleChange}
                            />

                            <StyledH2>Email</StyledH2>
                            <StyledInput
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={state.registerInfo.email}
                            onChange={handleChange}
                            />

                            <StyledH2>Password</StyledH2>
                            <StyledInput
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={state.registerInfo.password}
                            onChange={handleChange}
                            />
                    <ButtonDiv>
                        <motion.div
                            whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%"
                            }}  
                        >
                        <StyledSubmit>Create Account</StyledSubmit>
                        </motion.div>
                    </ButtonDiv>

            <Link to="/login" >Already have an account? Sign In Here</Link>

        </RegisterDiv>
        </form>
    </StyledDiv>
    )
}

export default Register 
