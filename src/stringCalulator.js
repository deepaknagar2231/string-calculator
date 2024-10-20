import React, { useState } from 'react';

function StringCalculator() {
    const [inputString, setInputString] = useState('');
    const [result, setResult] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const add = (numbers) => {
        try {
            // Handle different delimiters
            let delimiter = ',';
            if (numbers.startsWith('//')) {
                delimiter = numbers.substring(2, 3);
                numbers = numbers.substring(4);
            }

            // Replace new lines with commas
            numbers = numbers.replace(/\n/g, delimiter);

            // Split the string into numbers
            const numberArray = numbers.split(delimiter);

            // Check for negative numbers
            const negativeNumbers = numberArray.filter(num => parseInt(num) < 0);
            if (negativeNumbers.length > 0) {
                throw new Error(`negative numbers not allowed: ${negativeNumbers.join(', ')}`);
            }

            // Calculate the sum
            const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);
            setResult(sum);
            setErrorMessage('');
        } catch (error) {
            setResult(0);
            setErrorMessage(error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter numbers separated by commas or new lines"
                value={inputString}
                onChange={(e) => setInputString(e.target.value)}
            />
            <button onClick={() => add(inputString)}>Calculate</button>
            <p>Result: {result}</p>
            {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
    );
}

export default StringCalculator;