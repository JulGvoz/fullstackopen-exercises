import React, { useState } from 'react'

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

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterText, setFilterText] = useState('')

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

  const filtered_persons = persons.filter(({ name }) => {
    return name.toLowerCase().search(filterText.toLowerCase()) != -1
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterState={[filterText, setFilterText]} />
      <h2>add a new</h2>
      <PersonForm
        handler={handleNewPerson}
        nameState={[newName, setNewName]}
        numberState={[newNumber, setNewNumber]}
      />
      <h2>Numbers</h2>
      <ul>
        {
          filtered_persons.map(({ name, number }) => {
            return (
              <li key={name}>{name} {number}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App