import { render, screen,fireEvent } from '@testing-library/react';
import App from './App';
import React from 'react'
import MyForm from './FormValidation/MyForm';


  test('submit form with valid data', ()=>{
    render(<MyForm/>);
    fireEvent.change(screen.getByLabelText(/username/i), {target: {value:'testuser'}});
    fireEvent.change(screen.getByLabelText(/password/i), {target: {value:'testuser'}});

    fireEvent.click(screen.getByRole('button', {name:/submit/i}));
});