import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from './components/Btn';
import Profile from './components/Profile';

function App() {
  return (
    <div className='container'>
      <h1>Basic App</h1>
      <div className='row'>
      <Profile name='Saad' location='mumbra'/>
      </div>
      {/* <Btn name='follow us'/> */}
    </div>
  );
}

export default App;
