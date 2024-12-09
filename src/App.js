import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from './components/Btn';
import Profile from './components/Profile';

function App() {
  const Profiles =[
    {
      name:'Saad' ,
      img:'https://avatars.githubusercontent.com/u/182938196?v=4', 
      desc:'I am studying in BCA...' ,
      link:'https://github.com/shk-Sam', 
      btn:' Open Profile'},
    {
      name:'' ,
      img:'https://avatars.githubusercontent.com/u/182938196?v=4', 
      desc:'I am studying in BCA...' ,
      link:'https://github.com/shk-Sam', 
      btn:' Open Profile'},
    {
      name:'Moin',
      img:'https://avatars.githubusercontent.com/u/186063909?v=4', 
      desc:'I am studying in BCA...' ,
      link:'https://github.com/moinuddin-4678', 
      btn:' Open Profile'},
  ]
  return (
    <div className='container'>
      <h1>Profile</h1>
      <div className='row'>
      {/* <Profile name='Saad' location='mumbra'/> */}
      {/* <Profile /> */}
      {
        Profiles.map((profile)=>{
          return <Profile profile={profile}/>
        })
      }
      </div>
      {/* <Btn name='follow us'/> */}
    </div>
  );
}

export default App;
