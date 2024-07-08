import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const SPISKI = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о списках в HTML. Списки используются для отображения элементов в упорядоченном или неупорядоченном виде.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Существует два основных типа списков в HTML: упорядоченные списки и неупорядоченные списки.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Упорядоченный список создается с помощью тега &lt;ol&gt;, а элементы списка - с помощью тега &lt;li&gt;.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;ol&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Первый элемент&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Второй элемент&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Третий элемент&lt;/li&gt;
            <br />
            &lt;/ol&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Неупорядоченный список создается с помощью тега &lt;ul&gt;, а элементы списка - с помощью тега &lt;li&gt;.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;ul&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Первый элемент&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Второй элемент&lt;/li&gt;
            <br />
            &nbsp;&nbsp;&lt;li&gt;Третий элемент&lt;/li&gt;
            <br />
            &lt;/ul&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся создавать как упорядоченные, так и неупорядоченные списки.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SPISKI;