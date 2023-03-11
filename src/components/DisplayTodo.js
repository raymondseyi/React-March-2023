import React from 'react'

const DisplayTodo = ({allTodo}) => {
  return (
    <>
        <h1>DisplayTodo</h1>
        {allTodo.map((todo)=>(
            <h1>{todo}</h1>
        ))}
    </>
  )
}

export default DisplayTodo