import React from 'react'
import styled from 'styled-components'
import Register from './Register'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import FunFact from './FunFact'
import { motion } from 'framer-motion'

// styling 
const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 80vw;
    margin: 0 auto;
`

const LoginDiv = styled.div`
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
    font-size: 2rem;
    padding: 2%;
    margin: 10% auto;
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
// end of styling 

const Login = ({inputChange, submit, values, disabled, errors, randomFunFact}) => {

    const history = useHistory();
    
    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        history.push("/dashboard");
    }

    return (
        <StyledDiv>
            <form className='form container' onSubmit={onSubmit}>
                
                <LoginDiv>
                <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.phone}</div>
                <div>{errors.plants}</div>
                </div>
                
                <StyledH2>Username</StyledH2>
                <StyledInput
                name='username'
                type='text'
                placeholder='Username'
                value={values.name}
                onChange={onInputChange}
                />
                <StyledH2>Password</StyledH2>
                <StyledInput
                name='password'
                type='password'
                placeholder='Password'
                value={values.password}
                onChange={onInputChange}
                />
                
                <ButtonDiv>
                <motion.div
                whileTap={{
                  scale: 0.8,
                  rotate: -90,
                  borderRadius: "100%"
                }}  
                >
                    <StyledSubmit disabled={disabled}>Login</StyledSubmit>
                </motion.div>
                <Link to="/" >New? Register here</Link>
                </ButtonDiv>

                <ButtonDiv>
                    <FunFact
                    randomFunFact = {randomFunFact}
                    />
                </ButtonDiv>
                </LoginDiv>
            </form>
        </StyledDiv>
    )
}

export default Login 