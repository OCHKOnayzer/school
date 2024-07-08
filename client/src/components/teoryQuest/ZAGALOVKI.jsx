import React from 'react';
import classes from './style/style.module.css'
import TitleQuest from './titleQuest';
const ZAGALOVKI = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Один раз в одном королевстве был великий и мудрый король, его звали Заголовок первого уровня, или H1. Он всегда был на самом видном месте, венчая страницу своим важным и величественным присутствием.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Каждый, кто встречал его, сразу понимал, что перед ним стоит главная тема страницы, главная мысль, которую нужно запомнить.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>Чтож давайте поговорим о заголовках в HTML. В HTML заголовки используются для создания структуры и иерархии на веб-странице.</span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                        Существует шесть уровней заголовков, от <code className={classes.codeConteiner}>&lt;h1&gt;</code> до <code className={classes.codeConteiner}>&lt;h6&gt;</code>, которые организуют и подразделяют содержимое. 
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Тег <code className={classes.codeConteiner}>&lt;h1&gt;</code> обозначает самый важный заголовок (заголовок верхнего уровня), а тег <code className={classes.codeConteiner}>&lt;h6&gt;</code> обозначает подзаголовок самого нижнего уровня. Буква «h» в названии тега — это первая буква английского «heading».На практике в текстах редко встречаются подзаголовки ниже третьего уровня. Поэтому чаще всего используются теги <code className={classes.codeConteiner}>&lt;h1&gt;</code><code className={classes.codeConteiner}>&lt;h2&gt;</code><code className={classes.codeConteiner}>&lt;h3&gt;</code>
                    </span>
                </div>
            </div>
            <div className={classes.teory_demo}>
                <span>
                   <span style={{display:"block"}}><code>&lt;h1&gt;</code>Спецификация HTML<code>&lt;/h1&gt;</code></span>
                   <span style={{display:"block"}}><code>&lt;h2&gt;</code>Раздел 1 Введение<code>&lt;/h2&gt;</code></span>
                   <span style={{display:"block"}}><code>&lt;h3&gt;</code>Раздел 1.1 Происхождение языка<code>&lt;/h3&gt;</code></span>
                </span>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Поисковые системы придают особое значение заголовкам, также правильно расставленные заголовки важны для доступности документа. Поэтому нужно учиться грамотно использовать заголовки.
                    </span>
                </div>
            </div>
            <div className={classes.teory_info}>
                <div>
                    <span>
                    Заголовок <code className={classes.codeConteiner}>&lt;h1&gt;</code>— самый важный на странице. В него нужно включать текст, который в целом описывает содержание страницы. Очень важно, чтобы заголовок первого уровня на странице был только один.
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ZAGALOVKI