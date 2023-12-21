import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  addTodo = () => {
    const { todoInput, dispatch } = this.props;
    if (todoInput.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: todoInput });
    }
  };

  toggleTodo = index => {
    const { dispatch } = this.props;
    dispatch({ type: 'TOGGLE_TODO', payload: index });
  };

  removeTodo = index => {
    const { dispatch } = this.props;
    dispatch({ type: 'REMOVE_TODO', payload: index });
  };

  handleInputChange = event => {
    const { dispatch } = this.props;
    dispatch({ type: 'UPDATE_TODO_INPUT', payload: event.target.value });
  };

  render() {
    const { todos, todoInput } = this.props;

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

const mapStateToProps = state => ({
  todos: state.todos,
  todoInput: state.todoInput,
});

export default connect(mapStateToProps)(App);