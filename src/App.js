import logo from './logo.svg';
import './App.css';

function App() {
  /** 
   *  algorithm means steps
  deifne a vairable
   use a variable
  */

  const heading ='Profiles';
  const age ='19';
  const verified = true;

  /**
   * algorithm
   * return name 
   */

  // type 1 
  function printName(){
    console.log('Sam');
  }
// printName()
// type 2
  function getName(){
    const name ='Saad';
    return name;
  }
  // type 3 
  function printPassedName(name){
    console.log(name);
  }
  // printPassedName("saad")
  // type 4
  function add (a,b){
    const result = a + b;
    return result;
  }
/**
 *   for( initialization ; condition ; increment/decreament){
    statement
  }
 */

  // ternary operator
  // syntax (condition) ? statement1 : statement2

  // Map
  //numbers 
  const numbers =[1,2,3,4,5];
  numbers.map((i) => {
    // console.log(i)
  });

  //string 
   const names = ['saad','prince','basheer','nawaf'];
  names.map((name) => {
    // console.log(name)
  })

  //objects
  const profiles =[
    {name : 'saad',
      age:19
    },
    {name : 'prince',
      age:29
    },
    {name : 'basheer',
      age:39
    },
    {name : 'nawaf',
      age:49
    }
  ];
  profiles.map((profile)=>{
    console.log(profile.name,profile.age)
  })

  return (
    <div className='App'>
      <h1>{heading}</h1>
      <p> Name:{getName()}</p>
      <p> Age:{age}</p>
      <p>Verified:{(verified == true) ? 'yes' : 'no'}</p>
      <p> result :{add(10,10)}</p>
    </div>
  );
}

export default App;
