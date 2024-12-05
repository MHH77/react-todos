import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    { rowNumber: 1, rowDescription: 'Work', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Cleaning', rowAssigned: 'User Two' },
    { rowNumber: 3, rowDescription: 'Driving', rowAssigned: 'User three' },
    { rowNumber: 4, rowDescription: 'Cooking', rowAssigned: 'User One' }
  ]

  return (
    <div className='mt-5 container'>
      <div className='card text-center'>
        <div className='card-header' >
          your todos
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
