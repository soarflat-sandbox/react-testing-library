import React from 'react'

type Props = {
  children: React.ReactNode
}

export const HiddenMessage: React.VFC<Props> = ({ children }) => {
  const [showMessage, setShowMessage] = React.useState(false)

  return (
    <div>
      <label htmlFor="toggle">Show Message</label>
      <input
        id="toggle"
        type="checkbox"
        onChange={(e) => setShowMessage(e.target.checked)}
        checked={showMessage}
      />
      {showMessage ? children : null}
    </div>
  )
}
