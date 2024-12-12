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

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todos',
        rowAssigned: 'User Three'
      };
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          your todos
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>Add</button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
