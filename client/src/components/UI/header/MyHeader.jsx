import React, { useContext, useEffect, useRef } from 'react'
import classes from './style.module.css'
import { Setings,Exit,Subscribe} from '../SvgConteiner.jsx';
import { Context } from "../../../index.js";
import { Link } from 'react-router-dom'

const MyHeader = (props) => {
  const {store} = useContext(Context);
  const quit = async()=> { 
    try{ 
     store.logout();
     window.location.href='/'
    }catch(e){ 
     console.log(e)
    }
 }
  if(store.isAuth){
    return (
    <header {...props} className={classes.header}>
      <div className={classes.headerContext}>
        <div className={classes.conteiner}>
          <div className={classes.logo}>
            <Link style={{height:"100%", display:"inline-block"}} to={'/pages/SelectQuets.jsx'}>
              <img className={classes.imageLogo} src="http://localhost:8080/image/fg/as5/ccLogo.png" alt="123" srcset="" />
            </Link>
          </div>
          <div className={classes.headerContetnt}>{props.children}</div>
          <div className={classes.userConteiner}>
            <div className={classes.useContent}>
              <div className={classes.imageContent}>
                <img src={store.user.image} alt=""/>
              </div>
              <div className={classes.usernameContent}>
                  <a href={"/pages/profile.jsx"}>{store.user.username}</a>
              </div>
              <div className={`${classes.modalWindow}`}>
                <div className={`${classes.Modalcotrollers}`}><Setings className={classes.e}/><Link to={'/pages/setings.jsx'}>Настройки</Link></div>
                <div className={`${classes.Modalcotrollers}`} onClick={quit}><Exit/><span>Выйти</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    )
  }
  return (
    <header {...props} className={classes.header}><div>3333</div>{props.children}</header>
  )
}

export default MyHeader