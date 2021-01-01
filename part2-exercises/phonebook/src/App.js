import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Filter = ({ filterState }) => {
  const [filterText, setFilterText] = filterState

  return (
    <div>
      filter shown with <input
        value={filterText}
        onChange={(event) => {
          setFilterText(event.target.value)
        }}
      />
    </div>
  )
}

const PersonForm = ({ handler, nameState, numberState }) => {
  const [newName, setNewName] = nameState
  const [newNumber, setNewNumber] = numberState
  return (
    <form onSubmit={handler}>
      <div>
        name: <input
          value={newName}
          onChange={(event) => {
            setNewName(event.target.value)
          }} />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={(event) => {
            setNewNumber(event.target.value)
          }} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

const Persons = ({ persons, filterText }) => {
  const filtered_persons = persons.filter(({ name }) => {
    return name.toLowerCase().search(filterText.toLowerCase()) !== -1
  })

  return (
    filtered_persons.map(({ name, number }) => {
      return (
        <div key={name}>{name} {number}</div>
      )
    })
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

  const hook = () => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    // if name is already in the phonebook
    if (persons.map(({ name }) => name).findIndex(n => n === newName) !== -1) {
      alert(`${newName} is already added to phonebook`)
    } else {
      // intentional
      setNewName('')
      setNewNumber('')
      setPersons(persons.concat(newPerson))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterState={[filterText, setFilterText]} />

      <h3>add a new</h3>

      <PersonForm
        handler={handleNewPerson}
        nameState={[newName, setNewName]}
        numberState={[newNumber, setNewNumber]}
      />

      <h3>Numbers</h3>

      <Persons
        persons={persons}
        filterText={filterText}
      />
    </div>
  )
}

export default App