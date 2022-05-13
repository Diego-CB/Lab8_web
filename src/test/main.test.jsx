import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { cube } from './math'

describe('Given a number', () => {
    it('returns its squared', () => {
        expect(cube(2)).toBe(8)
    })
})