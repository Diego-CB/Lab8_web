import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculator from '../components/Calculator'

it('renders', () => {
  render(<Calculator />)

  const number5 = screen.getByText(/5/)
  userEvent.click(number5)
  
  const numberOf5 = screen.getAllByText(/5/).length
  screen.debug()
  expect(numberOf5).toBe(2)
})
