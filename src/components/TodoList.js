import React, { useState } from 'react';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                
            </ul>

        </div>
    );
}
 
export default TodoList;