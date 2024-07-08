import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import classes from './style.module.css'
import AnimationPoint from '../components/AnimationComponents/AnimationPoint/AnimetionPoint.jsx'
import MyButton from '../components/UI/button/MyButton.jsx'
import ScrollMagic from 'scrollmagic'
import Footer from '../components/UI/Footer/Footer.jsx'
const Main = () => {
  const scrollCurr = useRef();
  const logo = useRef();
  const [scrollDirection, setScrollDirection] = useState('down');
  const [zoomValue, setZoomValue] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    let requestId;
    let start;
    let progress;
    let endValue;

    const animateZoom = (timestamp) => {
      if (!start) start = timestamp;
      progress = timestamp - start;

      if (scrollDirection === 'up') {
        endValue = 0.8;
      } else {
        endValue = 1;
      }

      setZoomValue((endValue - 1) * Math.min(progress / 1000, 1) + 1);

      if (progress < 1000) {
        requestId = requestAnimationFrame(animateZoom);
      }
    };

    requestId = requestAnimationFrame(animateZoom);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [scrollDirection]);

  const Arrow = () => (
    <div className={classes.arrowWrapper}>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
      <span className={classes.arrow}></span>
    </div>
  );

  const toSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/Auth/Authorization.jsx'
  };

  const scroll = () => {
    if (scrollCurr.current) {
      scrollCurr.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
  return (
    <main> 
      <header>
        </header>
        <div className={classes.conteiner}>
        <AnimationPoint className={classes.canvasConteiner}></AnimationPoint>
          <div id='titleCont' ref={logo} className={classes.wrapperTitle}>
            <h1 className={classes.title}>CodeCraft</h1>
            <span>
              Academy
            </span>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
              <MyButton onClick={toSubmit} className={`${classes.Active} ${classes.BeginBtn}`} style={{position:'relative', zIndex:'3',fontWeight:600}}>Начать !</MyButton>
            </div>
          </div>
      </div>
        <div className={classes.ccInfo}>
          <div className={classes.scrollStop}></div>
          <div ref={scrollCurr} className={classes.ccInfo_wrapper}>
            <div className={classes.ccInfo__conteiner_1}>
              <h2>CODECRAFT  – школа с специализацией во фронтенде</h2>
              <span>В CODECRAFT мы обучаем искусству создания современных и интерактивных веб-интерфейсов. Наши курсы охватывают все аспекты фронтенд-разработки: от основ HTML5 и CSS3 до продвинутых техник JavaScript. Присоединяйтесь к нам и станьте профессионалом в мире веб-разработки!</span>
            </div>
          </div>
        </div>
      <Footer></Footer>
    </main>
    
  )
}

export default Main