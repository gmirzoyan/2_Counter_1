import React, {useState} from 'react';

function Counter(props) {

    const [counter, setCounter] = useState(props.el);



    const counterPlus1 = () => {
        setCounter(counter + 1);
    }
    const counterPlus2 = () => {
        setCounter(counter + 2);
    }
    const counterPlus3 = () => {
        setCounter(counter + 3);
    }



    const counterMinus1 = () => {
        setCounter(counter - 1);
    }
    const counterMinus2 = () => {
        setCounter(counter - 2);
    }
    const counterMinus3 = () => {
        setCounter(counter - 3);
    }
    const resetCounter = () => {
        setCounter(0);
    }


    return (

        <div>

            <button onClick={counterMinus1}>-1</button>
            {" "}
            <button onClick={counterMinus2}>-2</button>
            {" "}
            <button onClick={counterMinus3}>-3</button>
            {" "}
            <strong>{counter}</strong>
            {" "}
            <button onClick={counterPlus1}>+1</button>
            {" "}
            <button onClick={counterPlus2}>+2</button>
            {" "}
            <button onClick={counterPlus3}>+3</button>
            {" "}
            <button onClick={resetCounter}>RESET</button>

        </div>

    );
}

export default Counter;