import React from 'react'
import { Link } from 'react-router-dom'

import { Counter } from '@/components/Counter'
import { HiddenMessage } from '@/components/HiddenMessage'
import { LoginForm } from '@/components/LoginForm'
import { UserData } from '@/types/'

const App: React.VFC = () => {
  const [user, setUser] = React.useState<null | UserData>(null)

  return (
    <>
      <h2>Counter Component</h2>
      <Counter />
      <h2>HiddenMessage Component</h2>
      <HiddenMessage>Message</HiddenMessage>
      <h2>LoginForm Component</h2>
      <LoginForm endpoint="register" onSuccess={setUser} />
      {user && (
        <>
          <div data-testid="username-display">{user.username}</div>
          <button
            type="button"
            onClick={() => {
              window.localStorage.removeItem('token')
              setUser(null)
            }}
          >
            Logout
          </button>
        </>
      )}
    </>
  )
}

export default App
