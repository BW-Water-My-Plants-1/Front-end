import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login';
import Nav from './components/Navigation'
import Dashboard from './components/Dashboard'

import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import { axiosWithAuth } from './utils/axiosWithAuth';
import axios from 'axios'

const initialUserValues = {
  username: '',
  email: '', 
  phone: '', 
  plants: {
    plant1: false, 
    plant2: false, 
    plant3: false, 
  }
}

const initialFormErrors = {
  username: '',
  email: '',
  phone: '',
  plants: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([])
  const [userValues, setUserValues] = useState(initialUserValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUser = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        debugger
        setUsers([...users, res.data])  
      })
      .catch(err => {
        debugger
      })    
  }
    
  const submit = () => {
    // collect info and send post request for sign up and get request for sign ins
    const newUser = {
      username: userValues.username.trim(),
      email: userValues.email.trim(),
      password: userValues.password.trim(),
    }
    getUser(newUser)
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors ({
          ...formErrors, 
          [name]: '', 
        })
      })
      .catch(err => {
        setFormErrors ({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setUserValues({
      ...userValues, 
      [name]: value, 
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    formSchema.isValid(userValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [userValues])


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* Login component goes here */}
          <Login 
          submit={submit}
          inputChange={inputChange}
          values={userValues}
          disabled={disabled}
          errors={formErrors}
          />

          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
