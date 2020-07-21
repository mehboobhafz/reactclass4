import React, {useState} from 'react'
import Number from './message'
import "./App.css"

function App() {
  let[count, setCount] = useState(0);
  let[letLight, setLight] = useState(true);
  
  // Condition to control less than zero
  if(count < 0){
    count = 0;
    
  }  
  
    
    
  
  return(
    <div className={`day ${letLight ? 'day': 'night'}`}>

      <h2>This is Counter check Application</h2>

      <h3>By clicking below button the number get increased</h3>

      <button onClick={()=>setCount(++count)}>
        Increase Number
      </button> <br/> <br/>

      
      <h3 className="box">By clicking below button the number get decreased</h3>

      <button onClick={()=>setCount(--count)}>
        Decrease Number
      </button>
      

      {/* Passing props to componenet Number */}
      
      <Number total = {count}/>

      <div>
      <button onClick={()=>setLight(!letLight)}>
        DAY/NIGHT
      </button>

      <p><strong> {letLight ? 'Morning' : 'Night'} Time: </strong></p>
      </div>

    
    </div>
  )
}



export default App