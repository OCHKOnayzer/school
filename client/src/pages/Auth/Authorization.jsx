import React, { useContext, useEffect, useRef, useState } from 'react'
import MyInput from '../../components/UI/input/MyInput.jsx'
import MyButton from '../../components/UI/button/MyButton.jsx'
import classes from './styles/style.module.css'
import { Link } from 'react-router-dom'
import { Context } from '../../index.js'
import SvgErr from './SvgErr.jsx'
import MyLabel from '../../components/UI/MyLabel.jsx'
import { observer } from "mobx-react-lite";


const Authorization = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('')
const {store} = useContext(Context)
const inputArray = [username,password]
const inputRefs = useRef([])


const handleError = (e)=>{
    if(e.response && e.response.data && e.response.data.message){
      setError(e.response.data.message)
    }else{ 
      setError('Произошла ошибка при отправке запроса');
    }
  }
  const submitForm = async(e)=>{
    e.preventDefault();
    if(!username||!password){
      setError(`Поле ввода не может быть пустым`)
    }else{ 
      const result = store.login(username,password,handleError)
      console.log('try')
      setError(null)
      setInterval(()=>{ 
        window.location.href='/'
      },500)
    }
    
  }
  const inputChange =(e)=>{
    const {name, value} = e.target;
    if(name === 'username'){ 
      setUsername(value)
    }else if(name === 'password'){
      setPassword(value)
    }
  }
  return (
    <div className={classes.main}>
        <div className={classes.background}></div>
        <div className={classes.formlog}>
          <h2>Страница Авторизации</h2>
          <div style={{display:'flex', marginBottom:'20px'}}><span style={{color:'white'}}>Нет аккаунта?</span><Link style={{color:'inherit',marginLeft:5}} to='/Auth/Registration.jsx'>Зарегистрироваться</Link></div>
          <form>
            <div className={classes.placeholderForm}>
              <div className={classes.placeholderContainer}>
                <MyInput className={classes.int} type="text" onChange={inputChange} name="username" value={username}/>
                <MyLabel>Логин</MyLabel>
              </div>
              <div className={classes.placeholderContainer}>
                <MyInput className={classes.int} type="password" onChange={inputChange} name="password" value={password}/>
                <MyLabel>Пароль</MyLabel>
              </div>
              <MyButton className={classes.btnAuth} onClick = {submitForm} type="submit">Авторизация</MyButton>
              <Link style={{textDecoration:"none", color:'#7e89cc'}} to={'/'}><p style={{fontSize: "20px"}}>Вернутся на главную</p></Link>
              <div className={classes.err}>
              {error ? (
                    <div className={classes.errWrapper}><SvgErr/><div style={{margin:3}}>{error}</div></div>
                  ) : (
                    <div>
                    </div>
                  )}
              </div>
            </div>
          </form>
        </div>
        
    </div>
  )
}

export default observer (Authorization)