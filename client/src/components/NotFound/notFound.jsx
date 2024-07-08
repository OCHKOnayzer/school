import React from 'react'
import classes from './style.module.css'

const notFoundPage = () => {
  return (
    <div className={classes.ntf_wrapper}>
        <h1>Ошибка 404</h1>
        <span>Страница не найдена</span>
    </div>
  )
}

export default notFoundPage