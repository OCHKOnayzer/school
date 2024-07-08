import React from 'react'
import classes from './style.module.css'
import { Link } from 'react-router-dom'
const SelectCategory = ({ isActive }) => {
  return (
    <div className={classes.select__conteiner}>
        <div className={`${classes.link} ${isActive === 1?classes.selectBock:''}`}>
            <Link className={isActive === 1?classes.active:classes.nonActive} to={'/pages/SelectQuets.jsx'}>Обучение</Link>
        </div>
        <div className={`${classes.link} ${isActive === 2?classes.selectBock:''}`}>
            <Link className={isActive === 2?classes.active:classes.nonActive} to={'/pages/SelectTrainer.jsx'}>Тренажеры</Link>
        </div>
    </div>
  )
}

export default SelectCategory