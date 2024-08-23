import { useEffect,useState } from "react";


function UseOnline(){
  const[isOnline,setOnline]=useState(window.navigator.onLine);
  useEffect(()=>{
    const handleOnline=()=>setOnline(true);
    const handleOffline=()=>setOnline(false);

    window.addEventListener('offline',handleOffline);
    window.addEventListener('online',handleOnline);

    //cleanup
    return()=>{
      window.removeEventListener('offline',handleOffline);
      window.removeEventListener('online',handleOnline);
    };
    
  },[]);
  return isOnline;
}

function App(){
  const isNetOnline=UseOnline();
  return(
    <>
      {isNetOnline?"YAayayay u are online ": "Please connect to the internet"}
    </>
  )
}

export default App;
