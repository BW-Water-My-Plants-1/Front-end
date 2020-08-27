import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Register from './components/Register'
import Login from './components/Login';
import Nav from './components/Navigation'
import Dashboard from './components/Dashboard'

import './App.css';
import PrivateRoute from './utils/PrivateRoute';
import * as yup from 'yup'
import formSchemaLogin from './validation/formSchemaLogIn'
import { axiosWithAuth } from './utils/axiosWithAuth';
import axios from 'axios'

const initialUserValues = {
  username: '',
  password: '', 
  email: '', 
}

const initialFormErrors = {
  username: '',
  email: '',
  phone: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([])
  const [userValues, setUserValues] = useState(initialUserValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [funFact, setFunFact] = useState(['Towser "The Mouser" of Glenturret Distillery in Crieff, Scotland, holds the Guinness World Record for the most mice caught (28,899).'])

  const getUser = () => {
    axios.post('http://watermyplants-dg0511.herokuapp.com/login', `grant_type=password&username=${userValues.username}&password=${userValues.password}`, {
      headers: {
        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('XXXXXXX:XXXXXXXX')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        debugger
        setUsers([...users, res.data])  
      })
      .catch(err => {
        debugger
      })    
  }
  
  const randomFunFact = (arr, random) => {
    console.log(arr[random].text)
    setFunFact(String(arr[random].text))
    debugger
    alert(funFact)
}


  const submit = () => {
    const newUser = {
      username: userValues.username.trim(),
      password: userValues.password.trim(),
    }
    getUser(newUser)
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchemaLogin, name)
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
    formSchemaLogin.isValid(userValues)
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

          <Route exact path="/" component={Register} />
          <Route exact path="/login"> 
            <Login 
            submit={submit}
            inputChange={inputChange}
            values={userValues}
            disabled={disabled}
            errors={formErrors}
            randomFunFact = {randomFunFact}    
            />
          </Route>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

