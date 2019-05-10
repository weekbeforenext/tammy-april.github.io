'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { steps } from './src/steps'
import MultiStep from 'react-multistep'

const App = () => (
  <div className='container'>
    <div>
      <MultiStep steps={steps} />
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
