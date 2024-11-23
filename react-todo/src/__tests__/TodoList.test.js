import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  // Check if the "Todo List" header is in the document
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/Add a new todo/i);
  const addButton = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(addButton);

  expect(screen.getByText(/New Todo/i)).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todoItem = screen.getByText(/Learn React/i);
  
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const deleteButton = screen.getByText(/Delete/i);

  fireEvent.click(deleteButton);
  expect(screen.queryByText(/Learn React/i)).toBeNull();
});
