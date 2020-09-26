import React from 'react';

function List(props) {

    const buttonHandlerPlus = () => {
        props.counterPlus(props.index)

    }

    const buttonHandlerMinus = () => {
        props.counterMinus(props.index)

    }

    const buttonHandlerReset = () => {
        props.counterReset(props.index)

    }

    const buttonDeleteCurrentCounter = () => {
        props.deleteCurrentCounter(props.index)
    }


    return (

        <div>
            <button onClick={buttonHandlerMinus}>-</button>
            {" "}
            {props.el}
            {" "}
            <button onClick={buttonHandlerPlus}>+</button>
            {" "}
            <button className='header' onClick={buttonHandlerReset}>Reset</button>
            {" "}
            <button className='header' onClick={buttonDeleteCurrentCounter}>Delete</button>

        </div>

    );
}

export default List;