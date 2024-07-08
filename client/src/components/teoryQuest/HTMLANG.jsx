import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const HTMLANG = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Здорово, что вы хотите познакомиться с вёрсткой сайтов! Раз вы заинтеросовались веб разработкой давайте начнем с языка без которого вы бы не увидили сейчас данный сайт перед собой
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Каждый HTML-документ начинается с декларации типа документа, или «доктайпа».</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тип документа необходим, чтобы браузер мог определить версию HTML и правильно отобразить страницу.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Для старой версии HTML доктайп выглядел так:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                "http://www.w3.org/TR/html4/strict.dtd"&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>А для современной версии HTML уже намного проще:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;!DOCTYPE html&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся задавать документу правильный доктайп.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTMLANG