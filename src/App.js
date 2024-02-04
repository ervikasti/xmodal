
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {

  const [tooglemodal,setToogleModal] = useState(false);

  const handleClick =()=>{
    setToogleModal(!tooglemodal);
  }

  return (
   <div>
       <h1>User Details Modal</h1>
       <button  onClick={handleClick}>Open Form</button>
       {tooglemodal && (<Modal toggle={handleClick}/>)}
   </div>
  );
}

export default App;
