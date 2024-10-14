
import RegisterForm from '../components/Auth/RegisterForm'
import React from 'react';
import { render, screen } from '@testing-library/react';

test("render Registration forn" , ()=> {

    render(<RegisterForm />)
    const emailInput = screen.getByLabelText(/email/i)
    const passwordInput = screen.getByLabelText(/password/i)
    const confirmPasswordInput = screen.getByLabelText(/confirm password/i)
    const submitButton = screen.getByText(/register/i)

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmPasswordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
})