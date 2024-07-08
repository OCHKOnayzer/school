import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const COMMENT = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о комментариях в HTML. Комментарии используются для добавления заметок и пояснений в код, которые не отображаются на странице.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Комментарии в HTML заключаются в &lt;!-- и --&gt;.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;!-- Это комментарий. --&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Комментарии полезны для документирования кода и отключения частей кода при отладке.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;!-- &lt;p&gt;Этот текст не будет отображаться.&lt;/p&gt; --&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся добавлять комментарии в HTML-код.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default COMMENT;