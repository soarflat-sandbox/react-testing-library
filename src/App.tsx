import React from 'react'

import { Counter } from '@/components/Counter'
import { HiddenMessage } from '@/components/HiddenMessage'

const App: React.VFC = () => {
  return (
    <>
      <h2>Counter Component</h2>
      <Counter />
      <h2>HiddenMessage Component</h2>
      <HiddenMessage>Message</HiddenMessage>
    </>
  )
}

export default App
