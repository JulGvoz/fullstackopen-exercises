import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Countries = ({ filtered }) => {
  if (filtered.length == 0) {
    return (
      <p>Cannot find any countries with that name</p>
    )
  } else if (filtered.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (filtered.length > 1) {
    return filtered.map(country => {
      return <div>{country.name}</div>
    })
  } else {
    return <Country country={filtered[0]} />
  }
}

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => <li>{language.name}</li>)}
      </ul>
      <img src={country.flag} width="200" />
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [name, setName] = useState("")

  const hook = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        setCountries(response.data)
      })
  }
  useEffect(hook, [])

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().search(name.toLowerCase()) != -1
  })

  return (
    <div>
      find countries <input onChange={event => {
        setName(event.target.value)
      }} value={name}></input>
      <Countries filtered={filteredCountries} />
    </div>
  )
}

export default App;
