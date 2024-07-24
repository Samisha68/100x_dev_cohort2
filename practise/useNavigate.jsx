//used for Routing in REACT.JS
import { BrowserRouter, Route ,Routes, useNavigate} from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Landing } from "./Components/Landing";

//client site routing 
function App(){
  return(<div>
    <BrowserRouter>
      <Appbar></Appbar>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
  </div>)
}

function Appbar(){
  
  const navigate=useNavigate();
  return (<div>
    
    <button onClick={()=> navigate("/")}>Landing page</button>
    <button onClick={()=> navigate("/dashboard")}>Dasboard page</button>
  </div>)
}

export default App;
