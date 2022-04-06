import React from 'react'

export default function Todo({todoz}) {
  return (
    <div>
       <label>
         <input type="checkbox" checked={todoz.complete} />
         {todoz.name}
        </label> 
    </div>
  )
}
