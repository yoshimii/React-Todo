import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            todos: props.todos
        };
    }
    render() {
        return (
            <div>
                {this.props.todos.map((todo, index)=> {
                    return <Todo key={todo.id} id={todo.id}task={todo.task} completed={todo.completed} number={index +1} writeTodo={this.props.writeTodo} toggleItem={this.props.toggleItem} clearTodo={this.props.clearTodo}/>

                })}
                
            </div>
            
        )
    }
}

export default TodoList;