import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'

const LOCAL_STORAGE_KEY = 'todosApp.todos'

function App() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef()
 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]

)



  function handleAddTodo(e) {
    const name = todoRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4, name: name, complete: false}]
    })
    todoRef.current.value = null
  }

  return (
    <div>
     <TodoList todoList={todos}/>
     <input ref={todoRef} type="text" />
     <button onClick={handleAddTodo}>Add todo</button>
     <button>Clear</button>
     <div>0 left to do</div>
    </div>
  );
}

export default App;
