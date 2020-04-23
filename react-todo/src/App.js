// app.js
// import React, { useState } from 'react';
import React from 'react';
import './App.css';

import TodoList from './components/todos/TodoList';

function App() {
  // const [todos, setTodos] = useState([
  //   { description: 'Create main folder', status: 'pending'},
  //   { description: 'Move to main folder', status: 'pending' },
  //   { description: 'Start npm in the folder', status: 'pending' }
  // ])

  // const addTodo = (description) => {
  //   let cTodos = Object.assign([], todos);
  //   cTodos.push({description: description, status: 'pending'});
  //   setTodos(cTodos);
  // }

  // const markAsDone = (task) => {
  //   let cTodos = Object.assign([], todos);
  //   cTodos[task].status = 'done';
  //   setTodos(cTodos);
  // }

  // const deleteTask = (task) => {
  //   let cTodos = Object.assign([], todos);
  //   cTodos.splice(task, 1);
  //   setTodos(cTodos);
  // }

  return (
    <div className="App">
      <h1>Todo List</h1>
      {/* <Create addTodo={addTodo}/> */}
      {/* <TodoList todos={todos} markAsDone={markAsDone} deleteTask={deleteTask}/> */}
      <TodoList />
    </div>
  );
}

export default App;
