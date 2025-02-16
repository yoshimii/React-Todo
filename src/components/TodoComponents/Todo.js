import React from 'react';


const Todo = props => {

    return (
    <>   
    <p
    className={`todo-${props.completed ? 'completed' : ''}`}
    onClick={() => props.toggleItem(props.id)}
    > {props.task}</p>
    </>
    )
    
}

export default Todo;