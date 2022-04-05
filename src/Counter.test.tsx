import { render, screen } from '@testing-library/react';
import React from 'react';
import Counter from './Counter';
import axios from axios;

test("the counter starts at 0", ()=>{
  const countElement = getByText( '0' );
  expect(countElement).toBeInTheDocument();
});

test("minus button has correct text", ()=>{
  const button = screen.getByRole('button', {
    name: 'minus-button'
  });
  expect(button.textContent).toEqual('-');
});


test("plusbutton has correct text", ()=>{
  const button = screen.getByRole('button', {
    name: 'plus-button'
  });
  expect(button.textContent).toEqual('+');
});

test("When the + button is preseed, the counter changes to 1", ()=>{
  const button = await screen.findByRole("button", {
    name: "plus-button",
  });
  userEvent.click(button);
  expect(count).toHaveTextContent("1");
});
test("When the - button is pressed, the counter changes to -1", ()=>{
  const button = await screen.findByRole("button", {
    name: "minus-button",
  });
  userEvent.click(button);
  expect(count).toHaveTextContent("-1");
});
test("on/off button has blue color", ()=>{
  const button = screen.getByRole('button', {
    name: 'onoff'
  });
  expect(button[background-color]).toEqual('blue');
});
test("Prevent the -,+ button from being pressed when the on/off button is clicked", ()=>{

});


test('render counter', () => {
    const { getByText } = render(<Counter />);
    
    // '0'이 있는지
    const countElement = getByText( '0' );
    expect(countElement).toBeInTheDocument();
    
    // '+'버튼이 있는지
    const plusElement = getByText( '+' );
    expect(plusElement).toBeInTheDocument();
    // '-'버튼이 있는지
    const minusElement = getByText( '-' );
    expect(minusElement).toBeInTheDocument();
});


