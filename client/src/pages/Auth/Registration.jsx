import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import MyInput from '../../components/UI/input/MyInput.jsx'
import MyButton from '../../components/UI/button/MyButton.jsx'
import { Context } from '../../index.js'
import classes from './styles/style.module.css'
import AuthInfo from '../../components/authInfo/AuthInfo.jsx'
import SvgErr from './SvgErr.jsx'
import MyLabel from '../../components/UI/MyLabel.jsx'
const Registration = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {store} = useContext(Context)
  const inputArray = [username,password,email]
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
    inputArray.forEach((item, index) => {
      const inputRef = inputRefs.current[index];
      if (inputRef && inputRef.value.length < 2) {
        inputRef.style.border = '1px solid red';
      }
    });
    if(!username||!email||!password){
      setError(`Поле ввода не может быть пустым`)
    }else{ 
      store.registration(username,email,password,handleError)
      console.log('try')
      setError(null)
    }
  }
  const inputChange =(e)=>{
    const {name, value} = e.target;
    if(name === 'username'){ 
      setUsername(value)
    }else if(name === 'email'){
      setEmail(value)
    }else if(name === 'password'){
      setPassword(value)
    }
  }
  return (
    <div className={classes.main}>
        <div className={classes.background}></div>
        <div className={classes.formlog}>
          <h2>Страница регистрации</h2>
          <div style={{display:'flex', marginBottom:'20px'}}>
          <span style={{color:'white'}}>Уже есть аккаунт?</span>
          <Link style={{color:'inherit'}} to='/Auth/Authorization.jsx'>Авторизируйтесь</Link>
          </div>
          
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
              <div className={classes.placeholderContainer}>
                <MyInput className={classes.int} type="email" onChange={inputChange} name="email" value={email}/>
                <MyLabel>Почта</MyLabel>
              </div>
              <MyButton className={classes.btnAuth} onClick = {submitForm} type="submit">Зарегистрироваться</MyButton>
              <Link style={{textDecoration:"none"}} to={'/'}><p style={{fontSize: "20px", color:'#7e89cc'}}>Вернутся на главную</p></Link>
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

export default Registration




{/* <MyInput className={classes.int} type="text" onChange={inputChange} name="username" value={username}/>
<MyLabel>Логин</MyLabel> */}