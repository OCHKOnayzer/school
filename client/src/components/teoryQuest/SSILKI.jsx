import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const SSILKI = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о ссылках в HTML. Ссылки позволяют нам переходить с одной страницы на другую, открывать внешние сайты и даже загружать файлы.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Ссылка создается с помощью тега &lt;a&gt; (anchor).</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Основная структура ссылки выглядит так:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;a href="URL"&gt;Текст ссылки&lt;/a&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Атрибут href (Hypertext REFerence) указывает на URL, куда должна вести ссылка.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример ссылки на внешнюю страницу:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;a href="https://www.example.com"&gt;Посетите Example.com&lt;/a&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример ссылки на внутреннюю страницу вашего сайта:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;a href="/about.html"&gt;О нас&lt;/a&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Вы также можете использовать ссылки для загрузки файлов:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;a href="/files/document.pdf"&gt;Скачать документ&lt;/a&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся создавать различные типы ссылок.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SSILKI;