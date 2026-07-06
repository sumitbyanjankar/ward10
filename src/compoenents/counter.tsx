import React ,{useState} from "react";
export default function Counter(){
 function handleClick(){

setCount(count+1);

 }
  function handle(){
    setCount(count-1);
     }
 
 const [count,setCount] = useState<number>(0);
 return(<>
 <button onClick={handleClick}>Increment</button>
 
  <button onClick={handle}>decrement</button>
  <p>The current count is: {count}</p> 
 

  





 </>)
}