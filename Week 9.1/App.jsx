import { useEffect,useState } from "react";


function UseOnline(){
  const[isonline,setOnline]=useState(window.navigator.onLine);
  useEffect(()=>{
    const handleOnline=()=>setOnline(true);
    const handleOffline=()=>setOnline(false);

    window.addEventListener('offline',handleOffline);
    window.addEventListener('online',handleOnline);

    //cleanup
    return ()=>
    {
      window.removeEventListener('online',handleOnline);
      window.removeEventListener('offline',handleOffline);
    };
  },[]);
  return isonline();
}

function App(){
  const isOnline=UseOnline();
  return(
    <>
      {isOnline?"YAayayay u are online ": "Please connect to the internet"}
    </>
  )
}

export default App;
