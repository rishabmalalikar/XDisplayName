import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName) {
      document.querySelector('input')?.focus();
    } else if (!lastName) {
      document.querySelectorAll('input')[1]?.focus();
    }
  }

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br /><br />
      <label htmlFor="last-name">Last Name</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br /><br />
      <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
