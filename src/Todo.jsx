import React from 'react'

export default function Todo({todoz, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todoz.id)
    }
  return (
    <div>
       <label>
         <input type="checkbox" checked={todoz.complete} onChange={handleTodoClick}/>
         {todoz.name}
        </label> 
    </div>
  )
}
