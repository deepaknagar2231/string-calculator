import { useState } from 'react';
import './App.css';


function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const hanldeChange = (e) => {
    setValue(e.target.value);
  }
  const handleClick = () => {
    const newString = value.replace(/^"(.+)"$/, '$1');
    calculateStringValue(newString)
  }
  const calculateStringValue = (val) => {
    if (val === "") setResult(0);
    else {
      let arr = val.split(",");
      let res = parseInt(arr[0]);
      for (let i = 1; i < arr.length; i++) {
        res += parseInt(arr[i]);
      }
      setValue("");
      setResult(res);
    }
  }
  return (
    <div className="App">
      <h1>String calculator</h1>
      <div className='calculator'>
        <input value={value} onChange={hanldeChange} placeholder='Enter the string' />
        <button onClick={handleClick}>Add the number</button>
        {`Result of string is: ${result}`}
      </div>
    </div>
  );
}

export default App;