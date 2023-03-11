import React from 'react'
const MyButton = (props) => {
//   console.log(props)
  return (
    <>
        <button onClick={()=>props.myFunc("fish")} className={props.btnColor} >{props.title}</button>
    </>
  )
}

export default MyButton