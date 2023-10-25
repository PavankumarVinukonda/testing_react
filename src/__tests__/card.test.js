import {screen,render} from '@testing-library/react';

import Contact from '../components/contactus'
import '@testing-library/jest-dom'

describe('conatcus' , () => {
    
    test('card',() => {

    
        render(<Contact />) 
    
        const heading = screen.getByRole('heading');
    
    
        expect(heading).toBeInTheDocument()
    
    })
    
    test('button',() => {
        render(<Contact />)
    
      //   const button = screen.getByRole('button');
    
      const button = screen.getByText('contact1');
    
        expect(button).toBeInTheDocument()
    })
    
    // if there are mulktiple items by the name use getAllByRole
    
    test('input', () => {
        render(<Contact />)
    
        // querying
    
        const inputs = screen.getAllByRole('textbox');
    
        const le = inputs.length
    
        expect(le).toBe(2);
    
    })
})

