import React , {useState} from 'react';

const Counter = () => {

    //State
    const [counter,setCounter] = useState(0);


    //function
    const incrementHandler = () => {
        setCounter(counter + 1);
    }

    return (
        <div className='container'>
            <h3>Counter: {counter}</h3>
            <button type='button' className='btn btn-success mx-1' onClick={incrementHandler}>Increment</button>
            <button type='button' className='btn btn-danger mx-1' onClick={
                () => {
                setCounter(counter - 1);
                }
                }>Decrement</button>
            <button type='button' className='btn btn-secondary mx-1' onClick={() => setCounter(0)}>Reset</button>
            
        </div>
    );
};

export default Counter;