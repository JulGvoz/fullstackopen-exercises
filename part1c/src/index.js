import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => {
    const handler = () => console.log("hello", who)
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello("world")}>world</button>
      <button onClick={hello("react")}>react</button>
      <button onClick={hello("function")}>fun</button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)