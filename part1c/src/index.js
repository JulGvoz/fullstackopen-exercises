import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ counter }) => <span>{counter}</span>


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      <Display counter={left} />
      <Button handleClick={() => setLeft(left + 1)} text="left" />
      <Button handleClick={() => setRight(right + 1)} text="right" />
      <Display counter={right} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)