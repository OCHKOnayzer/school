import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';

const IMAGE = ({quest_id, title}) => {
  return (
    <div className={classes.teoryWrapper}>
      <TitleQuest title={title} quest_id={quest_id} />
      <div className={classes.teory__content}>
        <div className={classes.teory_info}>
          <div>
            <span>
              Привет! Сегодня мы узнаем о том, как добавлять изображения на веб-страницы с помощью HTML. Изображения делают сайты визуально привлекательными и помогают передать информацию.
            </span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Изображение добавляется с помощью тега &lt;img&gt;.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Основная структура тега &lt;img&gt; выглядит так:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;img src="URL" alt="Описание изображения" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Атрибут src (source) указывает путь к изображению, а атрибут alt (alternative) задает текстовое описание изображения на случай, если оно не загрузится.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример добавления изображения с внешнего URL:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;img src="https://www.example.com/image.jpg" alt="Пример изображения" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Пример добавления изображения из локальной директории:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;img src="/images/photo.jpg" alt="Фото" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Вы также можете задавать размеры изображения с помощью атрибутов width и height:</span>
          </div>
        </div>
        <div className={classes.teory_demo}>
          <span>
            &lt;img src="https://www.example.com/image.jpg" alt="Пример изображения" width="300" height="200" /&gt;
          </span>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Не забывайте использовать атрибут alt для доступности и SEO.</span>
          </div>
        </div>
        <div className={classes.teory_info}>
          <div>
            <span>Давайте потренируемся добавлять изображения разного типа и размера.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IMAGE;