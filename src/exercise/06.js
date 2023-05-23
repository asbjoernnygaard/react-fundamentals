// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  const inputRef = React.useRef()
  const [error, setError] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (error) return

    const username = inputRef.current.value
    onSubmitUsername(username)
  }

  const handleChange = (event) => {
    const isValid = event.target.value === event.target.value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={'input1'}>Username:</label>
        <input type="text"
               id={'input1'}
               ref={inputRef}
               onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
      <div role={"alert"}>{error ? <div>{error}</div> : null}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
