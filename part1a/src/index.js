import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}! You are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20

  const age = 15
  const name = "James"

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} + {b} = {a + b}
      </p>
      <Hello name="George" age="10" />
      <Hello name={name} age={10 + 25} />
      <Hello name="Daisy" age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))