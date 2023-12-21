import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    todoInput: '',
  };

  addTodo = () => {
    const { todoInput } = this.state;
    if (todoInput.trim() !== '') {
      this.setState(prevState => ({
        todos: [...prevState.todos, { text: todoInput, completed: false }],
        todoInput: '',
      }));
    }
  };

  toggleTodo = index => {
    this.setState(prevState => {
      const updatedTodos = [...prevState.todos];
      updatedTodos[index].completed = !updatedTodos[index].completed;
      return { todos: updatedTodos };
    });
  };

  removeTodo = index => {
    this.setState(prevState => ({
      todos: prevState.todos.filter((_, i) => i !== index),
    }));
  };

  handleInputChange = event => {
    this.setState({ todoInput: event.target.value });
  };

  render() {
    const { todos, todoInput } = this.state;

    return (
      <div className="App">
        <div id="todoList">
          {todos.map((todo, index) => (
            <div
              key={index}
              className={`todoItem ${todo.completed ? 'completed' : ''}`}
              onClick={() => this.toggleTodo(index)}
            >
              {todo.text}
              <button onClick={() => this.removeTodo(index)}>Remove</button>
            </div>
          ))}
        </div>

        <form id="todoForm">
          <input
            type="text"
            id="todoInput"
            placeholder="Enter your task"
            value={todoInput}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.addTodo}>
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default App;