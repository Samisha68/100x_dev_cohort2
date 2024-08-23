import { useEffect,useState } from "react";


const useInterval=(callback,delay)=>{
  useEffect(()=>{
    const Id=setInterval(callback,delay);
    return ()=>clearInterval(Id);

  },[callback,delay]);
}

function App(){
  const [count,setCount]=useState(0);
  useInterval(()=>{setCount(c=>c+1);},1000);
  return(
    <>
      Timer is at {count}
    </>
  )
}

export default App;
