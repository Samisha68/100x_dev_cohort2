
import { useState } from "react";
import { useEffect } from "react";

function App(){
  const [selectId,setselectid]=useState(null);
  return <div>
    <button onClick={ ()=>setselectid(1)}>1</button>
    <button onClick={ ()=>setselectid(2)}>2</button>
    <button onClick={ ()=>setselectid(3)}>3</button>
    <button onClick={ ()=>setselectid(4)}>4</button>
    {selectId!==null && <Todo id={selectId}/>}
  </div>
}
function Todo({id}){
  const [todo,setTodo]= useState({title:"",description:""});
  //implement useEffect here
  useEffect(()=>{
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(async (response)=>{
      const data=await response.json();
      setTodo(data)});
  },[id]);
  return(<div>
  
    <h1>{todo.title}</h1>
    <h4>{todo.description}</h4>
  </div>);
  
}

export default App;
