import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(2);
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByRole('textbox');
    const addButton = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'Test new todo' } });
    fireEvent.click(addButton);

    const newTodo = screen.getByText('Test new todo');
    expect(newTodo).toBeInTheDocument();
  });

  test('toggles a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);

    const todoItem = screen.queryByText('Learn React');
    expect(todoItem).not.toBeInTheDocument();
  });
});

