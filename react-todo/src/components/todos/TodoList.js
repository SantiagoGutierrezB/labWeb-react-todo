// src/components/todos/TodoList.js
import React from 'react';
import axios from 'axios';
import Create from './Create';
import Todo from './Todo';
import "./todoList.css";

export default class TodoList extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {todos: []};
    // Hacer el binding de mi instancia a la funcion
    this.handleGetTodos = this.handleGetTodos.bind(this);
  }

  componentDidMount() {    
    axios.get('http://localhost:3030/getList').then(res => {
      console.log(res);
      this.setState({todos: res.data});
    });
  }

  handleGetTodos(event) {
    // Crear variable que haga referencia a la instancia (this)
    let _this = this;
    
    axios.get('http://localhost:3030/getList').then(res => {
      console.log(res);
      // Llamar la funcion a traves de la referencia de la instancia
      _this.setState({todos: res.data});
    });
  }

  render() {
    return (
      <>
        <Create handleGetTodos={this.handleGetTodos} />
        <div className="todoList">
          {this.state.todos.map((todo, i) => {
            return <Todo key={i} id={todo.id} todo={todo} todoList={this.state.todos} handleGetTodos={this.handleGetTodos} />
          })}
        </div>

        {/* <table border="1">
          <thead>
            <tr>
              <th>#</th>
              <th>Task</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, i) => {
              return <Todo key={i} id={todo.id} todo={todo} todoList={this.state.todos} handleGetTodos={this.handleGetTodos} />
            })}
          </tbody>
        </table> */}
      </>
    );
  }
}
