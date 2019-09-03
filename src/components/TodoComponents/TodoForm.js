import React from 'react';

const TodoForm = function (props) {

    return(
        <>
        <form>
        <input type='text' onChange={props.writeTodo}/>
        <button onClick={props.submitNewTodo}>Add Todo</button>
        <button onClick={props.clearTodo}>Clear Completed</button>
        </form>
        </>
    )
}

export default TodoForm;