import { useState } from 'react';
import './App.css';

function App() {
  const [num,setNum]=useState(0)
  return (
    <div className="App">
      <div className='card'>
        <h1>Random Number</h1>
        <p>Generate a random number in  the<br/> range 1 to 100</p>
        <button onClick={()=>setNum(Math.floor(Math.random()*100))}>Generate</button>
        <p>{num}</p>
      </div>
    </div>
  );
}

export default App;
