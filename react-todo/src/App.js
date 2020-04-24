// app.js
import React from 'react';
import './App.css';

import TodoList from './components/todos/TodoList';

function App() {
  return (
    <div className="App">
      <h1 className="title">TODO List</h1>
      <h3 className="subtitle">Santiago Gutierrez Barcenas | A01652520</h3>
      <TodoList />
    </div>
  );
}

export default App;
