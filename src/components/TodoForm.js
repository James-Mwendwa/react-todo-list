import React, { useState } from 'react';


const TodoForm = ( {todos, setTodos} ) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setTodos([
            ...todos, { text: input, Completed: false, id: Math.random() * 10000 }
        ])          

    }

    const handleChange = (e) => {
       console.log(e.target.value);
       setInput(e.target.value);
    }



    return ( 
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>

            <input type="text"                     
                    required
                    value= {input}
                    onChange = {handleChange}
                />
                <button className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>

                <div className="select">
                    <select name="todos" className='filter-todo'>
                        <option value="All">All</option>
                        <option value="Completed">Completed</option>
                        <option value="UnCompleted">UnCompleted</option>
                    </select>
                </div>

            
                
            </form>
        </div>
     );
}
 
export default TodoForm;