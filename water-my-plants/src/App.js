import React, { useState } from 'react';
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
    // get request
  }
  
  const postNewUser = newUser => {
    // post request
    axios.post('URLTOGOHERE', newUser)
      .then(res => {
        console.log(res);
        setUsers([...users, res.data])
      })
      .catch(err => {
        debugger;
        console.log('error!', err);
      })
      .finally(()=> {
        setUserValues(initialUserValues)
      })

  }
  
  const submit = () => {
    // collect info and send post request for sign up and get request for sign ins
    const newUser = {
      username: userValues.username.trim(),
      email: userValues.email.trim(),
      phone: userValues.phone.trim(),
      plants: '', // too update
    }

    postNewUser(newUser)
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
  }


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* Login component goes here */}
          <Register 
          submit={submit}
          inputChange={inputChange}
          values={userValues}
          disabled={disabled}
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
