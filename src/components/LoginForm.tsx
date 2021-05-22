import axios from 'axios'
import * as React from 'react'

import { UserData } from '@/types/'

type Props = {
  endpoint: string
  onSuccess: React.Dispatch<React.SetStateAction<null | UserData>>
}

interface FormData {
  username: string
  password: string
}

export const LoginForm: React.VFC<Props> = ({ endpoint, onSuccess }) => {
  const [error, setError] = React.useState(null)
  const [formValues, setFormValues] = React.useState<FormData>({
    username: '',
    password: '',
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      username: { value: string }
      password: { value: string }
    }
    const username = target.username.value
    const password = target.password.value

    setFormValues({ username, password })
  }

  React.useEffect(() => {
    if (!formValues.username || !formValues.password) {
      return
    }

    axios.post<UserData>(`/${endpoint}`, formValues).then(
      ({ data: user }) => {
        window.localStorage.setItem('token', user.token)
        onSuccess(user)
      },
      (err) => setError(err),
    )
  }, [endpoint, formValues, onSuccess])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-input">Username</label>
        <input id="username-input" name="username" />
      </div>
      <div>
        <label htmlFor="password-input">Password</label>
        <input id="password-input" name="password" type="password" />
      </div>
      <button type="submit">Submit</button>
      {error ? <div>There was an error. Please try again.</div> : null}
    </form>
  )
}
