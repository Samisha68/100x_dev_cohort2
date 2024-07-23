
import React ,{ useState} from "react";
function App(){
  const [todos,setTodos]=useState([
     {id: 1, title: "Gym", description: "9-12"}
  ,{id: 2, title: "food", description: "12-3"},
  {id: 3, title: "coook", description: "6-12"}
])
//creating a function to add todo
function addTodo(){
  setTodos([...todos],{
    id: 4,
    title: Math.random(),
    description: Math.random()
  })
}
  return(
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo=> <Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}


export default App
