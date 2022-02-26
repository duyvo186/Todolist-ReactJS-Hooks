//  import React from 'react';
import './App.css';
 import TodoForm from './components/todoForm';
import TodoList from './components/todoList';


function App() {
  return (
    <div className="todo-app">
   <h1>TO DO LIST APP</h1>
<TodoList/>
    </div>
  );
}

export default App;
