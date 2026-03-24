
import {React,useState} from 'react'

function App() {
  const [num1,setnum1] = useState('');
  const [num2,setnum2] = useState('');
  const addition = parseInt(num1)+parseInt(num2);
  const subtraction = parseInt(num1)-parseInt(num2);
  const multiplication =parseInt(num1)*parseInt(num2);
  const division = parseInt(num2)!==0? (parseInt(num1)/parseInt(num2)):"Division by zero error";
  return (
    <div>
      <label>Number1:</label>
      <input type="number" value={num1} onChange={(e)=>setnum1(e.target.value)} placeholder='number1'/><br/>
      <label>Number2:</label>
      <input type="number" value={num2} onChange={(e)=>setnum2(e.target.value)} placeholder='number2'/>
      <div>
        <p>Addition:{addition}</p>
        <p>Subtraction:{subtraction}</p>
        <p>Multiplication:{multiplication}</p>
        <p>Division:{division}</p>
      </div>
    </div>
  )
}

export default App
