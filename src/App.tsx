import React from 'react'
import { Link } from 'react-router-dom'

import { Counter } from '@/components/Counter'
import { HiddenMessage } from '@/components/HiddenMessage'

const App: React.VFC = () => {
  return (
    <>
      <h2>Counter Component</h2>
      <Counter />
      <h2>HiddenMessage Component</h2>
      <HiddenMessage>Message</HiddenMessage>
      <h2>to register or login</h2>
      <p>
        <Link to="/register">Register</Link>
      </p>
      <p>
        <Link to="/login">Login</Link>
      </p>
    </>
  )
}

export default App
