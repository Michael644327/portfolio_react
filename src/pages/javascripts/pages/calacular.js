import React, { useState, useEffect } from 'react'
import "./calacular.css";

const Calacular = () => {
    const [display, setDisplay] = useState('');
    const [numb1, setNumb1] = useState('');
    const [numb2, setNumb2] = useState('');
    const [operator, setOperator] = useState('');

    const handleNumberClick = (number) => {
        if (operator === '') {
            const newnumb1 = numb1 + number;
            setNumb1(newnumb1);
            setDisplay(newnumb1);
        } else {
            const newnumb2 = numb2 + number;
            setNumb2(newnumb2);
            setDisplay(newnumb2);
        }
    };

    const handleOperatorClick = (op) => {
        if (numb1 !== '') {
            setOperator(op);
        }
    };

    const handleEquals = () => {
        if (numb1 !== '' && numb2 !== '' && operator !== '') {
            const n1 = parseInt(numb1);
            const n2 = parseInt(numb2);
            let result = 0;

            switch (operator) {
                case '+':
                    result = n1 + n2;
                    break;
                case '-':
                    result = n1 - n2;
                    break;
                case '*':
                    result = n1 * n2;
                    break;
                case '/':
                    result = n1 / n2;
                    break;
                default:
                    break;
            }

            const formattedResult = mIB(result);
            setDisplay(formattedResult);
            setNumb1(result.toString());
            setNumb2('');
            setOperator('');
        }
    };

    const mIB = (result) => {
        const reversedArray = result.toString().split('').reverse();
        const resultArray = [];
        for (let i = 0; i < reversedArray.length; i++) {
            if (i > 0 && i % 3 === 0) {
                resultArray.push(',');
            }
            resultArray.push(reversedArray[i]);
        }
        return resultArray.reverse().join('');
    };

    const handleReset = () => {
        setDisplay('');
        setNumb1('');
        setNumb2('');
        setOperator('');
    };

    return (
        <>
        <div className="calculator">
            <input className="calculator-display" value={display} disabled />
            <br />
            <div className="calculator-buttons">
                {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((num) => (
                    <button
                        key={num}
                        className="calculator-button"
                        onClick={() => handleNumberClick(num.toString())}
                    >
                        {num}
                    </button>
                ))}
                <br />
                {['+', '-', '*', '/'].map((op) => (
                    <button
                        key={op}
                        className="calculator-button"
                        onClick={() => handleOperatorClick(op)}
                    >
                        {op}
                    </button>
                ))}
                <button className="calculator-button" onClick={handleReset}>Reset</button>
                <button
                    className="calculator-button calculator-equals"
                    onClick={handleEquals}
                >
                    =
                </button>
            </div>
        </div>
        </>
    );
};
export default Calacular;