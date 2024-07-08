import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const SOVIETPOWER = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            CSS (Cascading Style Sheets) — это язык стилей, который используется для описания внешнего вида HTML-документов. В CSS используются свойства и значения для настройки различных аспектов элементов на странице. Свойства задают, какие именно аспекты элемента изменяются, а значения определяют, как они изменяются. Рассмотрим основные свойства и их значения:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>цвет</code>,<code className={classes.codeConteiner}>размер</code>,<code className={classes.codeConteiner}>отступы</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Одним из самых часто используемых свойств является <code className={classes.codeConteiner}>color</code>, которое задает цвет текста. Это свойство может принимать различные значения, такие как цветовые слова, HEX-коды, RGB или HSL. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>p {`{ color: blue; }`}</span></code></span>
            <span><code className={classes.code_demo}><span>h1 {`{ color: #ff0000; }`}</span></code></span>
            <span><code className={classes.code_demo}><span>h2 {`{ color: rgb(0, 255, 0); }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>font-size</code> задает размер текста. Значения могут быть в пикселях (px), пунктах (pt), процентах (%) или относительных единицах (em, rem). Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>p {`{ font-size: 16px; }`}</span></code></span>
            <span><code className={classes.code_demo}><span>h1 {`{ font-size: 2em; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойства <code className={classes.codeConteiner}>margin</code> и <code className={classes.codeConteiner}>padding</code> используются для задания внешних и внутренних отступов соответственно. Значения могут быть в пикселях, процентах или других единицах измерения. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ margin: 20px; padding: 10px; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>background-color</code> задает цвет фона элемента. Оно также может принимать значения цветовых слов, HEX-кодов, RGB или HSL. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ background-color: lightgray; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Свойство <code className={classes.codeConteiner}>border</code> используется для задания границы элемента. Оно объединяет три под-свойства: <code className={classes.codeConteiner}>border-width</code>, <code className={classes.codeConteiner}>border-style</code>, <code className={classes.codeConteiner}>border-color</code>. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border: 2px solid black; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                CSS включает в себя множество других свойств, таких как <code className={classes.codeConteiner}>width</code> (ширина), <code className={classes.codeConteiner}>height</code> (высота), <code className={classes.codeConteiner}>display</code> (отображение) и многие другие. Каждое свойство позволяет гибко настраивать внешний вид и поведение элементов на странице.
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default SOVIETPOWER





