    import React,{useContext,useEffect,useRef,useState} from 'react';
    import MyHeader from '../components/UI/header/MyHeader';
    import SetingsPanel from '../components/UI/setingPanel/setingsPanel';
    import MyInput from '../components/UI/input/MyInput';
    import classes from './style.module.css';
    import { Context } from '../index.js';
    import MyButton from '../components/UI/button/MyButton';
    import SvgErr from './Auth/SvgErr.jsx';

    const Setings = () => {
        const {store} = useContext(Context);
        const [DataError, setError] = useState('');
        const [imageError, setImageError] = useState('')
        const [username,setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [email,setEmail] = useState('');
        const [image, setImage] = useState('');

        const isActive = 1;

        const ErrorMessage = ({ errorFunction }) => {
            return (
                <div style={errTitle}>
                    {errorFunction ? (
                        <div style={errWrapper}><SvgErr/><div style={{margin: 3}}>{errorFunction}</div></div>
                    ) : (
                        <div></div>
                    )}
                </div>
            );
        }

        const errTitle ={ 
            color: "red",
            height: "20px",
            width: "430px",
            fontSize: "20px",
        }
        const errWrapper={ 
            fontSize: "18px",
            margin: "0 auto",
            display:"flex",
        }

        const inputChange =(e)=>{
            const {name, value} = e.target;
            if(name === 'username'){ 
            setUsername(value)
            }else if(name === 'password'){
            setPassword(value)
            }else if(name === 'email'){ 
            setEmail(value)}
        }
        const handleImageUpload = (e)=>{ 
            const file = e.target.files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setImage(reader.result);
              };

              if (file) {
                reader.readAsDataURL(file);
              }
        }
        const handleError = (e)=>{
            if(e.response && e.response.data && e.response.data.error){
              setError(e.response.data.error)
            }else{ 
              setError('Произошла ошибка при отправке запроса');
            }
          }
        const imageUploadError = (e)=>{ 
            if(e.response && e.response.data && e.response.data.error){ 
                setImageError(e.response.data.error)
            }else{ 
                setImageError('Произошла ошибка при отправке запроса');
            }
        }
        const useriD = store.user.id
        const submitForm = async(e)=>{ 
            e.preventDefault();
            if(username||password||email){ 
                try{
                    store.editUser(useriD,username,password,email,handleError)
                }catch(e){ 
                    console.log(e)
                    throw e 
                }
            }else{ 
                setError('Заполните хотя-бы одно поле')
            }
        }
        const updateImage = (e)=>{ 
            e.preventDefault();
            if(image){ 
                try{ 

                    store.updateImage(useriD,image,imageUploadError)
                }catch(e){ 
                    console.log(e)
                    throw e;
                }
            }else{ 
                setImageError('Загрузите изображение')
            }
        }
        if(store.isAuth){ 
            return (
                <main>
                    <MyHeader/>
                    <SetingsPanel isActive={isActive}/>
                    <div className={classes.blockConetnt}>
                            <div className={classes.profileBlock}>
                                <div className={classes.profileInner}>
                                    <div className={classes.setingsWrapper}>
                                        <span className={classes.setingTitle}>Данный аккаунта</span>
                                        <div className={classes.seningsAll}>
                                            <form action="" method="POST">
                                                <p className={classes.userData}>Логин</p>
                                                <div className={classes.input_layout}><MyInput name="username" value={username} className={classes.setingInp} type="text" placeholder={store.user.username} onChange={inputChange}/></div>
                                                <p className={classes.userData}>Пароль</p>
                                                <div className={classes.input_layout}><MyInput name = "password" value={password} className={classes.setingInp} type="password" placeholder="Пароль" onChange={inputChange}/></div>
                                                <p className={classes.userData}>Почта</p>
                                                <div className={classes.input_layout}><MyInput name = "email" value={email} className={classes.setingInp} type="text"  placeholder="Электронная почта " onChange={inputChange}/></div>
                                                <MyButton onClick = {submitForm} name="userUpdate" className={classes.buttnSetings}>Сохранить</MyButton>
                                               <ErrorMessage errorFunction={DataError}/>
                                            </form>
                                            <div className={classes.switchAvatar}>
                                            <span style={{fontSize:"22px"}} className={classes.setingTtl}>Изображение профиля</span>
                                                <div className={classes.imageWrapperSetings}>
                                                    <img src={store.user.image} alt=""/>
                                                    <div>
                                                        <form action="">
                                                            <label for="fileInput" className={classes.setingLabel} style={{color:"white"}}>Выбрать файл</label>
                                                            <MyInput onChange={handleImageUpload} type="file" name="avatar" id="fileInput" style={{display: "none"}}/>
                                                            <MyButton onClick={updateImage} name="image" style={{width:'15vw'}} className={`${classes.buttnSetings}`}>Сохранить</MyButton>
                                                            <ErrorMessage errorFunction={imageError}/>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </main>
            )
        }
    
    }

    export default Setings