import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => setValue(newValue)

  return (
    <div>
      {value}
      <Button handleClick={setToValue(1000)} text="1000" />
      <Button handleClick={setToValue(0)} text="0" />
      <Button handleClick={setToValue(value + 1)} text="+" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)