import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Footer from './components/Footer';

const todoData =[
  {
    task: 'Find Maui',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Restore the Heart of Te Fiti',
    id: 1528817084358,
    completed: false
  }
];
 class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
    };
}
//Add a new task object
addTodo = taskName => {
  const newItem = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newItem]
  });
};
//call addTodo function with state task as argument
handleNewTask = event => {
  event.preventDefault();
  this.addTodo(this.state.todos.task)
 }
 
//markout completed tasks
toggleItem = id => {
  this.setState({
    todos: this.state.todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
  })
}
//Clear completed tasks
handleTodoDoneClick = () => {
  this.setState({
    todos: this.state.todos.filter(todo => {
      return !todo.completed;
    })
  })
}
//render list items from state and new task form
  render() {
    return (
      <div className='App'>
        <h1>Todo List</h1>
        <h2 className="todo-items"><TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}        
        /></h2>
              
        <TodoForm
        addTodo={this.addTodo}
        clearTodos={this.handleTodoDoneClick}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
