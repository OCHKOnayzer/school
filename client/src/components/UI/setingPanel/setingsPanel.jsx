import React,{useContext} from 'react'
import classes from './style.module.css';
import { Link } from 'react-router-dom';
import { Context } from '../../../index.js';

const SetingsPanel = ({isActive}) => {

  const {store} = useContext(Context)

  const quit = async()=> { 
   try{ 
    store.logout();
    window.location.href='/'
   }catch(e){ 
    console.log(e)
   }
}
  return (
    <div className={classes.setingsBar}>
      <div className={classes.setingsWrapp}>
          <div className={`${classes.setingsItem} ${classes.activeItem}`}>
              <Link className={isActive === 0?classes.activeItem:classes.notActive} to={'/pages/profile.jsx'} id={'profile'}>Главаная страница</Link>
          </div>
          <div className={classes.setingsItem}>
              <Link className={isActive === 1?classes.activeItem:classes.notActive} to={'/pages/setings.jsx'} id="setings">Настройки</Link>
          </div>
          <div className={classes.setingsItem}>
              <span onClick={quit} className={isActive === 2?classes.activeItem:classes.notActive} href="../core/unsign.php">Выйти</span>
          </div>
      </div>
  </div>
  )
}

export default SetingsPanel