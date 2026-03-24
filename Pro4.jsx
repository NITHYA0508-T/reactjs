import {React,useState} from 'react'
function App() {
  const [color,setcolor]=useState("");
  return (
    <div>
      <button onClick={(e)=>{setcolor('RED')}}>RED</button>
      <button onClick={(e)=>{setcolor('GREEN')}}>GREEN</button>
      <button onClick={(e)=>{setcolor('BLUE')}}>BLUE</button>
      <div style={{width:'100px',height:'100px',backgroundColor:color}}>
      </div>
    </div>
  )
}
export default App
