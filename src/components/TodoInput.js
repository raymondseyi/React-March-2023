import React, { useState } from 'react'
const TodoInput = (props) => {
    const [todo, settodo] = useState('')
    
  return (
    <>
         <input type="text"  placeholder='Enter Your Todo' onChange={(e)=>settodo(e.target.value)}/>
         <button onClick={()=>props.addTodo(todo)}>Add Todo</button>
    </>
  )
}

export default TodoInput