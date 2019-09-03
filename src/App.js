import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



const todoData =[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];
 class App extends React.Component {
  
  // you will need a place to store your state in this component.
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
    };
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state



addTodo = taskName => {
  const newItem = {
    task: taskName,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newItem]
  });
  console.log(this.state)
};
 
handleNewTask = event => {
  event.preventDefault();
  this.addTodo(this.state.todos.task)
 }
 
handleTodoDoneClick = event => {
  event.preventDefault();
  this.setState({doneTodo: event.target.value})
  console.log('done')
}

toggleItem = id => {
  console.log(id)
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

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <h2><TodoList 
        todos={this.state.todos}
        toggleItem={this.toggleItem}        
        /></h2>
              
        <TodoForm
        clearTodo={this.handleTodoDoneClick}
        addTodo={this.addTodo}
        />
        
      </div>
    );
  }
}

export default App;
