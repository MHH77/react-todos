import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState(
    [
      { rowNumber: 1, rowDescription: 'Work', rowAssigned: 'User One' },
      { rowNumber: 2, rowDescription: 'Cleaning', rowAssigned: 'User Two' },
      { rowNumber: 3, rowDescription: 'Driving', rowAssigned: 'User three' },
      { rowNumber: 4, rowDescription: 'Cooking', rowAssigned: 'User One' }
    ]
  )

  const addTodo = (description, assigned) => {
    let setRowNumber = 0
    if (todos.length > 0) {
      setRowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      setRowNumber = 1;
    }
    const newTodo = {
      rowNumber: setRowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo])
  }

  const deleteTodo = (deleteRowNumber) => {
    const filteredTodos = todos.filter(todo => todo.rowNumber !== deleteRowNumber);
    setTodos(filteredTodos);
  };

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          your todos
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
