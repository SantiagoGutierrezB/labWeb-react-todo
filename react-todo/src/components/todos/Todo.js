// src/components/todos/Todo.js
import React from 'react';
import axios from 'axios';
import "./todo.css";

// Method with axios
export default class Todo extends React.Component {  
    constructor(props) {
        super(props);
        // Hacer el binding de mi instancia a la funcion
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }


    handleMarkAsDone = (event, id) => {
        // Crear variable que haga referencia a la instancia (this)
        let _this = this;
        
        axios.post(`http://localhost:3030/tasks/${id}/done`).then(res =>{
            console.log(res);
            console.log(res.data);

            _this.props.handleGetTodos();
        });
    }
  
    handleDelete = (event, id) => {        
        // Crear variable que haga referencia a la instancia (this)
        let _this = this;

        axios.post(`http://localhost:3030/tasks/${id}/delete`).then(res =>{
            console.log(res);
            console.log(res.data);

            _this.props.handleGetTodos();
            
        });
    }
  
    render() {
      return (
        <>
            <div className="todo" key={this.props.id} style={{backgroundColor: this.props.todo.status === 'pending' ? 'white' : 'grey'}}>
                <p className="description">{this.props.todo.description}</p>
                {this.props.todo.status === 'pending' && (
                  <input className="doneBtn" type="button" value="Done" onClick={(event) => this.handleMarkAsDone(event, this.props.id)}/>
                )}
                <input className="deleteBtn" type="button" value="Delete" onClick={(event) => this.handleDelete(event, this.props.id)}/>
            </div>
                
            {/* <tr key={this.props.id} style={{backgroundColor: this.props.todo.status === 'pending' ? 'white' : 'grey'}}>
              <td>#{(this.props.id + 1)}</td>
              <td>{this.props.todo.description}</td>
              <td>
                {this.props.todo.status === 'pending' && (
                  <input type="button" value="terminado?" onClick={(event) => this.handleMarkAsDone(event, this.props.id)}/>
                )}
                <input type="button" value="eliminar" onClick={(event) => this.handleDelete(event, this.props.id)}/>
              </td>
            </tr> */}
        </>
      );
    }
}