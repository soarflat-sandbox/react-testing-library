import React from 'react'
import ReactDOM from 'react-dom'

import App from '@/App'

if (process.env.NODE_ENV === 'development') {
  /* eslint @typescript-eslint/no-var-requires: 0 */
  const { worker } = require('./mocks/browser')
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'))
