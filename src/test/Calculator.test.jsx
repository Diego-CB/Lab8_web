import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Calculator from '../components/Calculator'

describe('When a number button is pressed', () => {
  it('shows the number in the display', async () => {
    render(<Calculator />)
    const display = (await screen.findAllByText(/0/))[0]
    const button5 = await screen.findByText(/5/)
    const button2 = await screen.findByText(/2/)
  
    await userEvent.click(button5)
    await userEvent.click(button2)

    expect(
      display.innerHTML
    ).toBe('52')
  })
})

describe('When a number with more than 9 digits is typed', () => {
  it('shows ERROR message in the display', async () => {
    render(<Calculator />)
    const button5 = await screen.findByText(/5/)  

    for (let i = 0; i < 10; i++){
      await userEvent.click(button5)
    }

    expect(
      await screen.findByText(/ERROR/)
    ).toBeInTheDocument()
  })
})

describe('When the = button is pressed after an operation is typed', () => {
  it('shows the result in the display', async () => {
    render(<Calculator />)
    
    const display = (await screen.findAllByText(/0/))[0]
    const button5 = await screen.findByText(/5/)
    const button2 = await screen.findByText(/2/)
    const less = await screen.findByText(/-/)
    const equal = await screen.findByText(/=/)
  
    // Simulacion de operacion: 5-2
    await userEvent.click(button5)
    await userEvent.click(less)
    await userEvent.click(button2)
    await userEvent.click(equal)

    expect(
      display.innerHTML
    ).toBe('3')
  })
})

describe('When an operation with negative result is typed', () => {
  it('shows ERROR message in the display', async () => {
    render(<Calculator />)
    
    const display = (await screen.findAllByText(/0/))[0]
    const button5 = await screen.findByText(/5/)
    const button2 = await screen.findByText(/2/)
    const less = await screen.findByText(/-/)
    const equal = await screen.findByText(/=/)
  
    // Simulacion de operacion: 2-5
    await userEvent.click(button2)
    await userEvent.click(less)
    await userEvent.click(button5)
    await userEvent.click(equal)

    expect(
      display.innerHTML
    ).toBe('ERROR')
  })
})

describe('When an operation is typed after an operation', () => {
  it('calculates the operation and shows the result', async () => {
    render(<Calculator />)
    
    const display = (await screen.findAllByText(/0/))[0]
    const button5 = await screen.findByText(/5/)
    const button7 = await screen.findByText(/7/)
    const less = await screen.findByText(/-/)
    const mult = await screen.findByText(/x/)
    const equal = await screen.findByText(/=/)
  
    // Simulacion de operacion: (5x5)-7
    await userEvent.click(button5)
    await userEvent.click(mult)
    await userEvent.click(button5)
    await userEvent.click(less)
    await userEvent.click(button7)
    await userEvent.click(equal)

    expect(
      display.innerHTML
    ).toBe('18')
  })
})
