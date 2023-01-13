import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  
  const handleChange1 =(event)=> {setFirstNum(event.target.value)}
  const handleChange2 =(event)=> {setSecondNum(event.target.value)}

  return (
    <div id="main">
      <input id='input1' onChange={handleChange1}/>
       +
      <input id='input2' onChange={handleChange2}/> 
      
      <p id='result'>{parseInt(firstNum)+parseInt(secondNum)}</p>
    </div>
  )
}


export default App;
