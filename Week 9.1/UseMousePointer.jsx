import { useEffect,useState } from "react";



function UseMouse(){
  const[position,setPosition]=useState({x:0, y:0});
  const handleMove=(e)=>{
    setPosition({x:e.clientX,y:e.clientY});
  }
  useEffect(()=>{
    window.addEventListener('mousemove',handleMove);
    //cleanup 
    return()=>{
      window.removeEventListener('mousemove',handleMove);
    };
  },[]);
  return position;
}


function App(){
  const isMoving=UseMouse();
  return(
    <>
      Your mouse pointer is at {isMoving.x} {isMoving.y}
    </>
  )
}

export default App;
