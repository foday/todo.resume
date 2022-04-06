import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Todos 1', 'Todo 2', 'todo3']);
  return (
    <div>
     <TodoList todoList={todos}/>
     <input type="text" />
     <button>Add todo</button>
     <button>Clear</button>
     <div>0 left to do</div>
    </div>
  );
}

export default App;
