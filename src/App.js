import logo from './logo.svg';
import './App.css';

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
              <tr>
                <th scope='row'>1</th>
                <th>Feed dog</th>
                <th>Mohammadhosein</th>
              </tr>
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
