import React ,{useState} from 'react';
export default function TaskList(){
const [task,setTasks]=useState([
{id:"t1",text:"Buy Milk"},
{id:"t2",text:"walk the dog"},
{id:"t3",text:"clean the room"},
]);
return(
<div>
<h2>My tasks</h2>
<ul>
    {task.map(ta=>(
<li key={ta.id}>
    {ta.text}
    <button onClick={()=>setTasks(task.filter(t =>t.id !==ta.id))}>
delete
  </button>
</li>



    ))}



    
    
    
     </ul>



</div>


);




}