import { render, screen, fireEvent } from '@testing-library/react';
import ExpenseForm from './ExpenseForm';

test('clicking "Add new expense" opens the form without submitting', () => {
  const onSaveExpenseData = jest.fn();
  render(<ExpenseForm onSaveExpenseData={onSaveExpenseData} />);

  // The button to open the form should be present initially
  const openButton = screen.getByText(/add new expense/i);
  fireEvent.click(openButton);

  // After clicking, the Add Expense submit button should be visible
  const submitButton = screen.getByRole('button', { name: /add expense/i });
  expect(submitButton).toBeInTheDocument();
  // onSaveExpenseData should not be called because form was not submitted
  expect(onSaveExpenseData).not.toHaveBeenCalled();
});
