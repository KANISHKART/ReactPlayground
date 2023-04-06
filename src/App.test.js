import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import SampleForm from'./Form';

test('renders learn react link', () => {
  render(<SampleForm />);

  const rangeInput=screen.getByLabelText("Rating:")
  fireEvent.change(rangeInput, {target : { value : 3}})

  const nameInput=screen.getByLabelText("First Name:")
  fireEvent.change(nameInput, {target : { value : "kanish"}})

  const commentInput=screen.getByLabelText("Comments:")
  fireEvent.change(commentInput, {target : { value : "testss"}})
  
  const submitButton=screen.getByRole("button");
  fireEvent.click(submitButton)

  expect(submitButton).toHaveAttribute("disabled");

});
