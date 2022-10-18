import React, {memo} from 'react';

const TodosComponents = ({todos,  addTodo})=>{
    console.log('TodosComponents Render child')
    return (
        <>
            <h1>My Todos</h1>
            {todos.map((item, index)=>{
                return <p key={index}>
                    {`${index + 1} _ ${item}`}
                </p>
            })}
            <button onClick={()=>{
                addTodo('Add new todo')
            }}>Add Todo</button>
        </>
    )
}

export default memo(TodosComponents);