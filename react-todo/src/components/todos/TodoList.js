// src/components/todos/TodoList.js
import React from 'react';
import axios from 'axios';
import Create from './Create';
import Todo from './Todo';

// Method without using axios
// const TodoList = ({todos, markAsDone, deleteTask}) => {
//     const handleMarkAsDone = (event, index) => {
//       markAsDone(index);
//     }

//     const handleDelete = (event, index) => {
//       deleteTask(index);
//     }

//     return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Task</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {todos.map((todo, i) => {
//           return <Todo key={i} id={i} todo={todo} handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete} />
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default TodoList;

// Method with axios
// const TodoList = ({markAsDone, deleteTask}) => {
//   let todos = [];

//   const componentDidMount = () => {
//     axios.get('http://localhost:3030/getList').then(res => {
//       console.log(res);
//       this.setState({todos: res.data});
//     });
//   }

//   const handleMarkAsDone = (event, index) => {
//     markAsDone(index);
//   }

//   const handleDelete = (event, index) => {
//     deleteTask(index);
//   }


//     return (
//       <table border="1">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Task</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo) => {
//             return <Todo key={todo.id} id={todo.id} todo={todo} handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete} />
//           })}
//         </tbody>
//       </table>
//     );
  
// }

// export default TodoList;

export default class TodoList extends React.Component {  
  // state = {
  //   todos: [],
  // }

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
        <table border="1">
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
        </table>
      </>
    );
  }
}
