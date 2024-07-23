import {useMemo,useState} from "react";
function App(){
  const[counter,setCounter]=useState(0);
  const[input,setinput]=useState(1);
  let count=useMemo(()=>{
    let c=0;
    for(let i=1; i<=input; i++){
      c+=i;
    }
    return c;
  },[input]);
  return <div>
    <input type="number" onChange={function(e){setinput(e.target.value);}} placeholder={"Find sum from n to 1"}></input>
    <br></br>
    sum from 1 to {input} is {count}
    <br></br>
    <button onClick={()=>{
      setCounter(count+1);
    }}>Counter({counter})</button>
  </div>
}

export default App;
