import React from 'react'
import { StepOne } from './StepOne'
import { StepTwo } from './StepTwo'

const steps = 
    [
      {name: 'Name', component: <StepOne/>},
      {name: 'RSVP', component: <StepTwo/>},
    ]

export { steps }