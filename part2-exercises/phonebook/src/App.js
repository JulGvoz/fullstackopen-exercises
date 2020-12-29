import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: "0491 570 156" // approved fake
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    // if name is already in the phonebook
    if (persons.map(({ name }) => name).findIndex(n => n == newName) != -1) {
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
      <form onSubmit={handleNewPerson}>
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
      <h2>Numbers</h2>
      <ul>
        {persons.map(({ name, number }) => {
          return (
            <li key={name}>{name} {number}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App