import React, {useState} from 'react';
import './index.css';
import List from "./List";



function App() {

    const [counterList, setCounterList] = useState([0, 0, 0, 0, 0]);

    const counterPlus = (index) => {
        const result = counterList.map((el, i) => {
                if (i === index) el++;
                return el;
            }
        )
        setCounterList(result);
    }

    const counterMinus = (index) => {
        const result = counterList.map((el, i) => {
                if (i === index) el--;
                return el;
            }
        )
        setCounterList(result);
    }

    const counterReset = (index) => {
        const result = counterList.map((el, i) => {
                if (i === index) return 0;
                return el;
            }
        )
        console.log(result);
        setCounterList(result);
    }

    const counterResetAll = () => {
        const result = counterList.map(el =>  el = 0)
        setCounterList(result);
    }

    const addNewCounter = () => {
        const result = [...counterList, 0]
            setCounterList(result);
    }

    const deleteCounter = () => {
        counterList.pop()
        const result = [...counterList]
        setCounterList(result);
    }

    const deleteCurrentCounter = (index) => {
        let result = counterList.filter((el, i) => {
            if(i !== index) return true;
        })
        setCounterList(result);
    }

    const deleteAll = () => {
        setCounterList([])
    }

    return (
        <div>

            <h2>C O U N T E R</h2>
            <br/>
            <br/>
            <button className='header' onClick={counterResetAll}>Reset All</button>
            {" "}
            <button className='header' onClick={addNewCounter}>Add New</button>
            {" "}
            <button className='header' onClick={deleteCounter}>Delete Counter</button>
            {" "}
            <button className='header' onClick={deleteAll}>DELETE ALL</button>
            <br/>
            <br/>

            {counterList.map((el, i) => <List
                key={i}
                el={el}
                index={i}
                counterPlus={counterPlus}
                counterMinus={counterMinus}
                counterReset={counterReset}
                counterResetAll={counterResetAll}
                deleteCurrentCounter={deleteCurrentCounter}
            />)}
        </div>
    )
}

export default App;
