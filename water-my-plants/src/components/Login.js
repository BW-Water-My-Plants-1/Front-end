import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid pink;
    height: 100vh;
`

const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 50vh;
    width: 25vw;
    border: 1px solid pink;
`

const StyledH2 = styled.h2`
    font-size: 2.5rem;
    padding: 2%;
    margin: 10% auto;
`

const StyledInput = styled.input`
    padding: 2%;
    width: 100%;
`

const StyledSubmit = styled.button`
    padding: 1%;
    margin: 5%;
    width: 50%;
`

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Login = ({inputChange, submit, values, disabled, errors}) => {
    
    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <StyledDiv>
            <form className='form container' onSubmit={onSubmit}>
                
                <LoginDiv>
                <div className='login container'>
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
                <StyledSubmit disabled={disabled}>Login</StyledSubmit>
                <StyledSubmit disabled={disabled}>Forgot Username or Password?</StyledSubmit>
                </ButtonDiv>
                </div>
                </LoginDiv>
            </form>
        </StyledDiv>
    )
}

export default Login