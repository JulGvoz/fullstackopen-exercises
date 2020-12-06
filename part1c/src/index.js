import React from 'react'
import ReactDOM from 'react-dom'

const App = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

let counter = 1

ReactDOM.render(
  <App counter={counter} />,
  document.getElementById("root")
)

const refresh = () => {
  ReactDOM.render(
    <App counter={counter} />,
    document.getElementById("root")
  )
}

refresh()

setInterval(() => {
  refresh()
  counter += 1
  console.log(counter)
}, 1000)
