// src/components/todos/Todo.js
import React from 'react';
import axios from 'axios';

// Method without using axios
// const Todo = ({id, todo, handleMarkAsDone, handleDelete}) => {
//     // console.log(id);
//     // console.log(todo);
//     return (
//         <tr key={id} style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
//           <td>#{(id + 1)}</td>
//           <td>{todo.description}</td>
//           <td>
//             {todo.status === 'pending' && (
//               <input type="button" value="terminado?" onClick={(event) => handleMarkAsDone(event, id)}/>
//             )}
//             <input type="button" value="eliminar" onClick={(event) => handleDelete(event, id)}/>
//           </td>
//         </tr>
//     );
// }

// export default Todo;

// Method with axios
export default class Todo extends React.Component {  
    
    handleMarkAsDone = (event, id) => {
        axios.post(`http://localhost:3030/tasks/${id}/done`).then(res =>{
            console.log(res);
            console.log(res.data);
        });
    }
  
    handleDelete = (event, id) => {
        axios.post(`http://localhost:3030/tasks/${id}/delete`).then(res =>{
            console.log(res);
            console.log(res.data);
        });
    }
  
    render() {
      return (
        <tr key={this.props.id} style={{backgroundColor: this.props.todo.status === 'pending' ? 'white' : 'grey'}}>
          <td>#{(this.props.id + 1)}</td>
          <td>{this.props.todo.description}</td>
          <td>
            {this.props.todo.status === 'pending' && (
              <input type="button" value="terminado?" onClick={(event) => this.handleMarkAsDone(event, this.props.id)}/>
            )}
            <input type="button" value="eliminar" onClick={(event) => this.handleDelete(event, this.props.id)}/>
          </td>
        </tr>
      );
    }
}