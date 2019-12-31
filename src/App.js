import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Form from './components/TodoForm';

import { todos } from './todos.json';
console.log(todos);

class App extends Component {

  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{ todo.title }</h3>
              <span className="badge badge-pill badge-danger ml-2">
                { todo.priority }
              </span>
            </div>
            <div className="card-body">
              <p>{ todo.description }</p>
              <p><mark>{ todo.responsible }</mark></p>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        
        {/* Header */}
        <div id="header">
          <Navigation title="Tasks" counter={ this.state.todos.length } />
        </div>
        {/* End Header */}

        {/* Form */}
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container todo-form-container">
            <Form onAddTodo={this.handleAddTodo} />
          </div>
        </div>
        {/* End Form */}

        {/* Tasks List */}
        <div className="container">
          <div className="row mt-4">
            { todos }
          </div>  
        </div>
        
        {/* End Tasks List */}
        
      </div>
    );
  }
}

export default App;
