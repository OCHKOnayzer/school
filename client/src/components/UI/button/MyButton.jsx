import React from 'react'
const MyButton = (props) => {
  return (
    <button style={{cursor:"pointer"}}  {...props}>
        <span>{props.children}</span>
    </button>
  )
}

export default MyButton