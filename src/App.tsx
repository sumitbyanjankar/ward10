import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { WardCard } from './compoenents/wardcard'
import Counter from './compoenents/counter'
import Bmiform from './compoenents/bmitracker'
import TaskList from './compoenents/tasklist'
import AnnouncementBoard from './example1'

function App() {
  const [count, setCount] = useState(0)
let variable_values:[string,number,boolean];
variable_values=["JWAGAL",10,false];
let student:{
name:string;
age:number;
email:string;
major:string;
};
student = {name:"HARI",age:75,email:"hari75@uni.edu",major:"computer science"}

  return (
//     <>
//      <div className='appContainer'>
//      <WardCard ward_name="jwagal" ward_no={10} landmark="UNPARK"
//      motto="lalitpur lmc"/>
//      <div className="card-border">
//     This div has a solid blue border.

// </div>
// </div>
<>
  {/* <h1>{variable_values[0]}</h1>
<p>Ward Number:{variable_values[1]}</p>
<p>Active:{variable_values[2].toString()}</p>
<h1>{student.name} </h1>
<p>age:{student.age}</p>
<p>email:{student.email}</p>
<p>major:{student.major}</p> 
 <Counter/> */}
 {/* <Bmiform />
<TaskList/> */}
<AnnouncementBoard/>

</>

  
  )
}


export default App
  