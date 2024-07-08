import React from 'react'
import classes from './style.module.css'
const MyInput = (props) => {
  return (
    <input  className={classes.myInput} placeholder=' ' {...props}/>
    
  )
}

export default MyInput