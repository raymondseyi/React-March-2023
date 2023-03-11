import React, { useState } from 'react'
import DisplayTodo from './components/DisplayTodo'
import MyButton from './components/MyButton'
import TodoInput from './components/TodoInput'
const App = () => {
  // const sayHello = (myName)=>{
  //   alert(myName)
  // }
  const [allTodo, setallTodo] = useState([])
  const addTodo = (todo)=>{
    // alert(todo)
    // let newAllTodo = allTodo
    setallTodo([...allTodo,todo])
    console.log(allTodo)
  }
  return (
    <>
      <h1>This is the App Component</h1>
      <TodoInput addTodo={addTodo}/>
      <hr />
      <DisplayTodo allTodo={allTodo}/>
      {/* <MyButton title="Edit" btnColor="btn btn-warning py-2 mx-2" myFunc={sayHello}/>
      <MyButton title="Delete" btnColor="btn btn-danger py-2 mx-2" myFunc={sayHello}/>
      <MyButton title="Rusticate" btnColor="btn btn-dark py-2 mx-2" myFunc={sayHello}/> */}
    </>
  )
}
export default App