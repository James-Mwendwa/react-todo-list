import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App( {input, setInput, todos, setTodos} ) {
  return (
    <div className="App">
      <header>
        <h1>Todo List {input} </h1>
      </header>

      <TodoForm todos={todos} setTodos={setTodos} input={input} setInput= {setInput} />      
      <TodoList />
    </div>
  );
}

export default App;
