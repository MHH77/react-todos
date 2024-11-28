import logo from './logo.svg';
import './App.css';
import TodoRowItem from './components/TodoRowItem';
function App() {
  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header' >
          your todos
        </div>
        <div>
          <table class='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
              </tr>
            </thead>
            <tbody>
              <TodoRowItem />
              <TodoRowItem />
              <tr>
                <th scope='row'>2</th>
                <th>Get haircut</th>
                <th>Mohammadhosein</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
