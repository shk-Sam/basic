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
      name:'Prince' ,
      img:'https://avatars.githubusercontent.com/u/111479652?v=4', 
      desc:'I am studying in BSCIT...' ,
      link:'https://github.com/pri810', 
      btn:' Open Profile'},
    {
      name:'Mohammad',
      img:'https://avatars.githubusercontent.com/u/185525438?v=4', 
      desc:'I am studying in BCA...' ,
      link:'https://github.com/gaghamohammad', 
      btn:' Open Profile'},
    {
      name:'Basheer',
      img:'https://avatars.githubusercontent.com/u/182937907?v=4', 
      desc:'I am studying in BCA...' ,
      link:'https://github.com/Basheer107', 
      btn:' Open Profile'},
    {
      name:'Nawaf',
      img:'https://avatars.githubusercontent.com/u/182943003?v=4', 
      desc:'I am studying in 11th...' ,
      link:'https://github.com/Sknawaf05', 
      btn:' Open Profile'},
    {
      name:'Tehseen',
      img:'https://avatars.githubusercontent.com/u/182941013?v=4', 
      desc:'I am Post Graduate...' ,
      link:'https://github.com/jiyashah26', 
      btn:' Open Profile'},
    {
      name:'Rumana',
      img:'https://avatars.githubusercontent.com/u/185526264?v=4', 
      desc:'I am studying in 12th...' ,
      link:'https://github.com/rumanamotiwala', 
      btn:' Open Profile'},
    {
      name:'Moin',
      img:'https://avatars.githubusercontent.com/u/186063909?v=4', 
      desc:'I am studying in 7th...' ,
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
