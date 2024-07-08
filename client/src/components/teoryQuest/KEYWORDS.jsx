import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const HTMLKeywords = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id}/>
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Замечательно, что вы хотите узнать больше о языке HTML! Сегодня мы поговорим о теге &lt;meta name="keywords"&gt;, который раньше использовался для указания ключевых слов страницы.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Тег &lt;meta name="keywords"&gt; размещается внутри элемента &lt;head&gt; HTML-документа и содержит список ключевых слов, описывающих содержание страницы.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример использования тега &lt;meta name="keywords"&gt;:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="keywords" content="HTML, CSS, JavaScript, веб-разработка"&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Ранее поисковые системы использовали этот тег для индексирования страниц по указанным ключевым словам. Это помогало улучшить ранжирование страниц в результатах поиска.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Однако со временем тег &lt;meta name="keywords"&gt; потерял свою значимость из-за злоупотребления (например, избыточного использования нерелевантных ключевых слов).</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>На сегодняшний день большинство поисковых систем игнорируют этот тег при ранжировании страниц.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Современные методы SEO включают использование качественного контента, правильной структуры HTML-документа и других мета-тегов, таких как &lt;meta name="description"&gt;.</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;meta name="description" content="Подробное описание содержания страницы"&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Теперь, когда вы знаете о теге &lt;meta name="keywords"&gt;, давайте попробуем создать HTML-документ с использованием этого тега.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTMLKeywords;
