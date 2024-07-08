import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const META = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о метаданных страницы и о том, как использовать тег &lt;meta&gt; в HTML. Метаданные помогают поисковым системам и браузерам понять содержимое и характеристики страницы.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Метаданные определяются внутри тега &lt;head&gt; документа.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тег &lt;meta&gt; используется для задания метаданных, таких как описание страницы, ключевые слова, автор и многое другое.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Основная структура тега &lt;meta&gt; выглядит так:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="ключ" content="значение" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример задания описания страницы:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="description" content="Это описание вашей страницы." /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример задания ключевых слов для страницы:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="keywords" content="ключевое слово 1, ключевое слово 2" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример задания автора страницы:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="author" content="Имя автора" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тег &lt;meta&gt; также может быть использован для задания кодировки страницы:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta charset="UTF-8" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Не забывайте использовать метаданные для улучшения SEO и повышения удобства для пользователей.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся добавлять метаданные для ваших веб-страниц.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default META;