// src/components/todos/Create.js
// import React, { useState } from 'react';
import React from 'react';
import axios from 'axios';



// Method without axios
// const Create = ({addTodo}) => {
//     const [todo, setTodo] = useState('');
    
//     const handleTodoChange = (event) => {
//         let val = event.target.value;
//         setTodo(val);
//     }

//     // el evento de creacion es enviado al padre
//     const handleCreateClick = (event) => {
//         addTodo(todo);
//         setTodo('');
//     }

//     return (
//         <div>
//             <label htmlFor="create-form"></label>
//             <input 
//                 type="text" 
//                 value={todo}
//                 id="create-form"
//                 onChange={handleTodoChange}/>
//             <input 
//                 type="button" 
//                 value="Create" 
//                 onClick={handleCreateClick}/>
//         </div>
//     )
// }

// export default Create;

// Method with axios
export default class Create extends React.Component {  
    // state = {
    //   description: '',
    // }

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
            {/* <label htmlFor="create-form"></label>
            <input 
                type="text" 
                id="create-form"
                name="description"
                onChange={this.handleTodoChange}/>
            <input 
                type="button" 
                value="Create" 
                onClick={this.handleSubmit}/> */}

            <form onSubmit={this.handleSubmit}>
                <label>Task:</label>
                <input type='text' name='description' onChange={this.handleTodoChange}></input>
                <button type='submit'>Create</button>
            </form>
        </div>
      );
    }
  }
  