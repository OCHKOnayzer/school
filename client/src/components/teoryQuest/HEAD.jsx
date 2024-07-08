import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const HeadTagTheory = ({ quest_id, title }) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Тег <code className={classes.codeConteiner}>head</code> в HTML предназначен для содержания метаинформации о документе, такой как заголовок страницы, ссылки на внешние ресурсы, мета-теги и другая информация, не отображаемая на самой веб-странице.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code><span>&lt;head&gt;</span></code><br/>
                <code><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;</span></code><br/>
                <code><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Заголовок страницы</span></code><br/>
                <code><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/title&gt;</span></code><br/>
                <code><span>&lt;/head&gt;</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере тег <code className={classes.codeConteiner}>head</code> содержит только один элемент - тег <code className={classes.codeConteiner}>title</code>, который устанавливает заголовок документа в браузере.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code><span>&lt;head&gt;</span></code><br/>
                <code><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"&gt;</span></code><br/>
                <code><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;link rel="stylesheet" href="styles.css"&gt;</span></code><br/>
                <code><span>&lt;/head&gt;</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере тег <code className={classes.codeConteiner}>head</code> содержит два элемента: тег <code className={classes.codeConteiner}>meta</code> для указания кодировки документа и тег <code className={classes.codeConteiner}>link</code> для подключения внешнего файла стилей.
                </span>
            </div>
        </div>
    </div>
</div>
  );
}

export default HeadTagTheory;