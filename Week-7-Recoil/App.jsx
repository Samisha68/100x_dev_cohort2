
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom, evenSelect } from "./Components/store/Count";

function App(){
  return(
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      
    </div>
  )
}

function Count(){
  return(
    <div>
      <CountRenderer/>
      <Buttons />
    </div>
  )
}

function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return(
    <div>
      {count}
      <Evenrender/>
    </div>
  )
}
function Evenrender(){
  const evenRen=useRecoilValue(evenSelect);
  return(
    <div>{evenRen? "It is even": "it is odd"}</div>
  )
}
function Buttons(){
  const [count,setCount]=useRecoilState(countAtom);
  return(
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increase</button>
      <button onClick={()=>setCount(count=>count-1)}>Decrease</button>
    </div>
  )
}

export default App;
