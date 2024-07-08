import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const SPACE = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о разделителях и пробелах в HTML. Эти элементы помогают структурировать текст и добавлять визуальные разделения на странице.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тег &lt;hr&gt; используется для создания горизонтальной линии, которая служит разделителем контента.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;hr&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Чтобы добавить множественные пробелы, можно использовать HTML сущности &amp;nbsp; (неразрывный пробел).</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            Текст&nbsp;&nbsp;&nbsp;с&nbsp;&nbsp;&nbsp;множественными&nbsp;&nbsp;&nbsp;пробелами.
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся использовать разделители и добавлять пробелы в текст.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SPACE;