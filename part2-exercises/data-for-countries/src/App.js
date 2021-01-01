import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Countries = ({ filtered, setName }) => {
  if (filtered.length === 0) {
    return (
      <p>Cannot find any countries with that name</p>
    )
  } else if (filtered.length > 10) {
    return (
      <p>Too many matches, specify another filter</p>
    )
  } else if (filtered.length > 1) {
    return filtered.map(country => {
      return <div key={country.name}>
        {country.name}
        <button onClick={() => {
          setName(country.name)
        }}>show</button>
      </div>
    })
  } else {
    return <Country country={filtered[0]} />
  }
}

const Country = ({ country }) => {
  const [weather, setWeather] = useState(undefined)
  const hook = () => {
    const promise = axios
      .get("http://api.weatherstack.com/current", {
        params: {
          access_key: api_key,
          query: country.capital,
          units: "m"
        }
      })
    console.log(promise)
    promise.then(response => {
      console.log(response.data)
      setWeather(response.data)
      console.log(promise)
    })
  }
  useEffect(hook, [country.capital])

  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt={`flag of ${country.name}`} width="200" />
      <Weather weather={weather} />
    </div>
  )
}

const Weather = ({ weather }) => {
  if (weather === undefined || weather.location === undefined) {
    return (
      <div>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <strong>temperature: </strong>
        { weather.current.temperature} Celsius
        <div>
          <img src={weather.current.weather_icons[0]} alt="weather icon" />
        </div>
        <strong>wind: </strong> {weather.current.wind_speed} km/h
        direction {weather.current.wind_dir}
      </div>
    )
  }
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
    return country.name.toLowerCase().search(name.toLowerCase()) !== -1
  })

  return (
    <div>
      find countries <input onChange={event => {
        setName(event.target.value)
      }} value={name}></input>
      <Countries
        filtered={filteredCountries}
        setName={setName}
      />
    </div>
  )
}

export default App;
