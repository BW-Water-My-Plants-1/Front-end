import React from 'react'

const Register = ({inputChange, submit, values, disabled}) => {
    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div>
                    <h2> Register: </h2>

                        <button disabled={disabled}>Submit</button>

                        <div className='errors'>
                        {/* 
                            <div>{errors.username}</div>
                            <div>{errors.email}</div>
                            <div>{errors.role}</div>
                            <div>{errors.civil}</div> */} 
                        </div>

                    <h4> General Information </h4>
                    <label> Name 
                        <input 
                        name='name'
                        type='text'
                        value={values.name}
                        onChange={onInputChange}
                        />
                    </label>
            </div>
        </form>
    )
}

export default Register 