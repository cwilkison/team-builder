import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { v4 as uuid } from 'uuid'
import Form from './Form.js';

const initialTeam = [
  { id: uuid(), fname: 'Cole', email: 'wilkison@gmail.com', role: 'Admin' },
  { id: uuid(), fname: 'Tim', email: 'tennis@gmail.com', role: 'Instructor' },
]


function App() {

  const [team, setTeam] = useState(initialTeam)
  const [formValues, setFormValues] = useState({
    fname: '',
    email: '',
    role: '',
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onFormSubmit = event => {
    event.preventDefault()

    const newTeam = {
      fname: formValues.fname,
      email: formValues.email,
      role: formValues.role,
    }
    setTeam([...team, newTeam])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      {
        team.map(tm => <div key={tm.id}>{tm.fname} {tm.email} {tm.role}</div>)
      }
      <Form
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
    </div>
  );
}

export default App;
