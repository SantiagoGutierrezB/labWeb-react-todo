// src/components/todos/Create.js
import React from 'react';
import axios from 'axios';

// Method with axios
export default class Create extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {description: ''};
        // Hacer el binding de mi instancia a la funcion
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTodoChange = (event) => {
        this.setState({description: event.target.value});
    }
  
    handleSubmit = (event) => {
        event.preventDefault();

        // Crear variable que haga referencia a la instancia (this)
        let _this = this;

        const task = {
            description: this.state.description
        }

        axios.post('http://localhost:3030/tasks', task).then(res =>{
            console.log(res);
            console.log(res.data);

            _this.props.handleGetTodos();
            
        });
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Task:</label>
                <input type='text' name='description' onChange={this.handleTodoChange}></input>
                <button type='submit'>Create</button>
            </form>
        </div>
      );
    }
  }
  