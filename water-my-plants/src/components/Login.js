import React from 'react'

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
        <div>
            <form className='form container' onSubmit={onSubmit}>
                
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.phone}</div>
                    <div>{errors.plants}</div> 
                </div>

                <h2>Username</h2>
                        <input 
                        name='username'
                        type='text'
                        value={values.name}
                        onChange={onInputChange}
                        />
                <h2>Password</h2>
                        <input 
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={onInputChange}
                        />

                <div>
                    <button disabled={disabled}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login