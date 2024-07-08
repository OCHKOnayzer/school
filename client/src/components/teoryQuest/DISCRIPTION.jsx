import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const HTMLDescription = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id}/>
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Замечательно, что вы хотите узнать больше о языке HTML! Сегодня мы поговорим о теге &lt;meta name="description"&gt;, который используется для задания описания страницы.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тег &lt;meta name="description"&gt; размещается внутри элемента &lt;head&gt; HTML-документа и содержит краткое описание содержания страницы.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример использования тега &lt;meta name="description"&gt;:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="description" content="Эта страница посвящена основам HTML и его ключевым элементам"&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Этот тег помогает поисковым системам и социальным сетям понять, о чём ваша страница. Описание часто отображается в результатах поиска под заголовком страницы.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Хорошее описание должно быть кратким и информативным, обычно длиной до 160 символов.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример хорошо написанного описания:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="description" content="Узнайте основы HTML, включая ключевые теги и их использование для создания веб-страниц"&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Использование тега &lt;meta name="description"&gt; может улучшить кликабельность вашей страницы в результатах поиска, привлекая больше пользователей на ваш сайт.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Теперь, когда вы знаете о теге &lt;meta name="description"&gt;, давайте попробуем создать HTML-документ с использованием этого тега.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTMLDescription;
