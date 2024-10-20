import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const hanldeChange = (e) => {
    setValue(e.target.value);
  }

  
  const handleClick = () => {
    calculateStringValue(value)
  }
  const calculateStringValue = (numbers) => {
    try {
      let delimiter = ',';
      if (numbers.startsWith('//')) {
        delimiter = numbers.substring(2, 3);
        numbers = numbers.substring(4);
      }
      numbers = numbers.replace(/\n/g, delimiter);
      const numberArray = numbers.split(delimiter);
      const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
      if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
      }
      const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);
      setResult(sum);
      setErrorMessage('');
    } catch (error) {
      setResult(0);
      setErrorMessage(error.message);
    }
  }
  return (
    <div className="App">
      <h1>String calculator</h1>
      <div className='calculator'>
        <input value={value} onChange={hanldeChange} placeholder='Enter the string' />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleClick}>Add the number</button>
        {`Result of string is: ${result}`}
      </div>
    </div>
  );
}
export default App;