import React from 'react';
import {useRecoilValue,RecoilRoot} from 'recoil';
import { jobAtom, messageAtom, networkAtom, notifciationAtom, totalValSelector } from './Components/atoms';
function App() {
  return(
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount=useRecoilValue(networkAtom);
  const jobCount=useRecoilValue(jobAtom);
  const notificationCount=useRecoilValue(notifciationAtom);
  const messageCount=useRecoilValue(messageAtom);
  const total=useRecoilValue(totalValSelector);
  return (
    <div>
      <button>Home</button>
      <button>My Network ({networkNotificationCount>=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobCount>=100 ?"99+" :jobCount})</button>
      <button>Notifications ({notificationCount>=100 ?"99+" :notificationCount})</button>
      <button>Messaging ({messageCount >=100 ?"99+" :messageCount })</button>
      <button>Me ({total})</button>
      
    </div>
  )
}

export default App;
