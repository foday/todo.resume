import React from 'react'
import Todo from './Todo'

export default function TodoList({todoList}) {
  return (
    todoList.map(todo => {return <Todo key={todo.id} todoz={todo}/>})
  )
}
