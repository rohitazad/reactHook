import React, { useState, useCallback } from 'react';
import TodosComponents from './TodosComponents';

const UseCallBackComponents = ()=>{
    let [todos, setTodos] = useState([])
    let [number,  setNumber]  =  useState(0)
    const updateTodo = useCallback((value)=>{
        let newTodos = [...todos];
        if(value){
            newTodos.push(value);
        }
        return setTodos(newTodos)
    }, [todos])
    
    
    return (
        <>
            <TodosComponents todos={todos} addTodo={updateTodo}/>
            <div>
                <hr />
                <br />
                My update no is :- {number}
                <br />
                <button onClick={()=>{setNumber(number + 1)}}>Increase number</button>
            </div>
        </>
    )
}

export default UseCallBackComponents;