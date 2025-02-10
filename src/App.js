// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Btn from './components/Btn';
// import Profile from './components/Profile';

// function App() {
//   const Profiles = [
//     {
//       name: 'Saad',
//       img: 'https://avatars.githubusercontent.com/u/182938196?v=4',
//       desc: 'I am studying in BCA...',
//       link: 'https://github.com/shk-Sam',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Prince',
//       img: 'https://avatars.githubusercontent.com/u/111479652?v=4',
//       desc: 'I am studying in BSCIT...',
//       link: 'https://github.com/pri810',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Mohammad',
//       img: 'https://avatars.githubusercontent.com/u/185525438?v=4',
//       desc: 'I am studying in BCA...',
//       link: 'https://github.com/gaghamohammad',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Basheer',
//       img: 'https://avatars.githubusercontent.com/u/182937907?v=4',
//       desc: 'I am studying in BCA...',
//       link: 'https://github.com/Basheer107',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Nawaf',
//       img: 'https://avatars.githubusercontent.com/u/182943003?v=4',
//       desc: 'I am studying in 11th...',
//       link: 'https://github.com/Sknawaf05',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Tehseen',
//       img: 'https://avatars.githubusercontent.com/u/182941013?v=4',
//       desc: 'I am Post Graduate...',
//       link: 'https://github.com/jiyashah26',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Rumana',
//       img: 'https://avatars.githubusercontent.com/u/185526264?v=4',
//       desc: 'I am studying in 12th...',
//       link: 'https://github.com/rumanamotiwala',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'Moin',
//       img: 'https://avatars.githubusercontent.com/u/186063909?v=4',
//       desc: 'I am studying in 7th...',
//       link: 'https://github.com/moinuddin-4678',
//       btn: ' Open Profile'
//     },
//     {
//       name: 'SIR',
//       img: 'https://avatars.githubusercontent.com/u/185526098?v=4',
//       desc: 'I am studying in 7th...',
//       link: 'https://github.com/Vocabstudents',
//       btn: ' Open Profile'
//     },
//   ]
//   return (
//     <div className='container'>
//       <h1>Profile</h1>
//       <div className='row'>
//         {/* <Profile name='Saad' location='mumbra'/> */}
//         {/* <Profile /> */}
        
//         {
//           Profiles.map((profile) => {
//             return <Profile profile={profile} />
//           })
//         }
//       </div>
//       {/* <Btn name='follow us'/> */}
//     </div>
//   );
// }

// export default App;


// predefined components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// custom components
import Btn from "./components/Btn";
import Profile from "./components/Profile";
import ProfileTable from "./components/ProfileTable";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import CreateProfile from "./components/CreateProfile";
import UpdateProfile from "./components/UpdateProfile";
import Home from "./components/home";


function App() {
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")

  //pending for understanding
  const [profiles, setProfiles] = useState([]);
  const [sinlgeProfile, setSingleProfile] = useState({
    id:'',
    link:'',
    name:'',
    desc:'',
  });

  useEffect(()=>{

    // get all profile
    fetch('http://localhost:8000/profiles')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setProfiles(res)
    })
    .catch((error) => {console.log(error)})

    // get single profile
    // fetch('http://localhost:8000/profile/1')
    // .then((res) => {
    //   return res.json();
    // })
    // .then((res) => {
    //   setSingleProfile(res)
    // })
    // .catch((error) => {console.log(error)})
  },[]);

  function createProfile(e){
    e.preventDefault()
    const id = profiles.length+1;
    fetch("http://localhost:8000/profileCreate",{
      method:"POST",
      headers:{'Content-Type':'Application/json'},
      body: JSON.stringify({
        id:id,
        name:name,
        desc:desc,
        link:link,
      })
    })
    .then((res) => {return res.json()})
    .then((res) => {
      setProfiles(res)
      setName("");
      setDesc("");
      setLink("");
    }) 
    .catch((error) => {console.log(error)})
  }

  function updateProfile(e){
    e.preventDefault()
    // const id = profiles.length+1;
    fetch("http://localhost:8000/profileUpdate",{
      method:"PUT",
      headers:{'Content-Type':'Application/json'},
      body: JSON.stringify({
        id:sinlgeProfile.id,
        name:sinlgeProfile.name,
        desc:sinlgeProfile.desc,
        link:sinlgeProfile.link,
      })
    })
    .then((res) => {return res.json()})
    .then((res) => {
      setProfiles(res)
      setSingleProfile({
        id:'',
        link:'',
        name:'',
        desc:'',
      })
    }) 
    .catch((error) => {console.log(error)})
  }

  return (
    <div className="container mt-4">

<BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-profile">Create Profile</Link>
            </li>
            <li>
              <Link to="/update-profile">Update Profile</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-profile" element={<CreateProfile />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
      <h1>Profiles</h1>
      <div className="row mb-5">
      <div>
          <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3>Update Profile</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" 
                  // pending for understand
                  onChange={(e)=>
                  {setSingleProfile({...sinlgeProfile,name:e.target.value})}} value={sinlgeProfile.name}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>
                    {setSingleProfile({...sinlgeProfile,desc:e.target.value})}} value={sinlgeProfile.desc}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e)=>
                      {setSingleProfile({...sinlgeProfile,link:e.target.value})}} value={sinlgeProfile.link}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e)=>{
                  // e.preventDefault()
                  // setProfiles((old)=>[{
                  //   name: name,
                  //   desc: desc,
                  //   link: link,
                  // },
                  //   ...old
                  // ])
                  updateProfile(e)
                }}>
                  Edit Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Profile List */}
        <div className="col-md-8">
          <ProfileTable profiles={profiles} set={setSingleProfile} setProfile={setProfiles} />
        </div>
        {/* Create Profile Form */}
      <div className="col-md-4">
          <div className="card">
            {/* heading */}
            <div className="card-header">
              <h3>Create Profile</h3>
            </div>
            {/* body */}
            <div className="card-body">
              <Form>
                {/* Name */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" 
                  // pending for understand
                  onChange={(e)=>{setName(e.target.value)}} value={name}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Description */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Description" 
                  onChange={(e)=>{setDesc(e.target.value)}} value={desc}/>
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Link */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Link</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Github Profile Link"
                    onChange={(e)=>{setLink(e.target.value)}} value={link}
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                {/* Submit Button */}
                <Button variant="primary" type="submit" onClick={(e)=>{
                  createProfile(e)
                }}>
                  Add Profile
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='row'>
        {
          profiles.map((profile)=>{
            return <Profile profile={profile} />
          })
        }
      </div> */}
      {/* <Btn name="Sign Up"/> */}
    </div>
  );
}
export default App;