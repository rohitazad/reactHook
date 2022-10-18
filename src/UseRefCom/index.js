import React, { useState, useEffect, useRef } from 'react';

const UseRefComponents = ()=>{
    const [value, setValue] = useState();
    //const [count, setCont] = useState(0);

    const count = useRef(0)
    const inputEle = useRef(null)
    useEffect(()=>{
        count.current = count.current + 1
    })
    const handleClick = ()=>{
        console.log('you click btn', inputEle.current);
        inputEle.current.style.backgroundColor= 'red';
        inputEle.current.style.padding= '10px 20px';
        inputEle.current.style.fontSize= '20px'
    }
    console.log('My useRefComponent re-render', count);
    return (
        <>
            <h1>useRef Components Example...</h1>
            <input ref={inputEle} value={value} onChange={(e)=>{
                setValue(e.target.value)
            }} />
            <br />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
            <p>My count no is :- {count.current}</p>
        </>
    )
}

export default UseRefComponents;