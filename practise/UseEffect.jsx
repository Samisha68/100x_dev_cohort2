import { useState } from "react";
import { useEffect } from "react";
function App(){
  const [todos,setTodos]= useState([]);
  useEffect(()=>{
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
        .then(async function(res){
          const data = await res.json();
          setTodos(data.todos);
        })
    }, 100);
  },[])

  return <div>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
  </div>
}
function Todo({title,description}){
  return(<div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>);
  
}

export default App;
