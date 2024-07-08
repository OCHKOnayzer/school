import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const BORDER = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            Свойство <code className={classes.codeConteiner}>border</code> в CSS используется для создания границ вокруг HTML-элементов. Границы могут значительно улучшить визуальную структуру и четкость страницы. Свойство <code className={classes.codeConteiner}>border</code> имеет несколько под-свойств, которые позволяют настраивать ширину, стиль и цвет границы:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>ширина границы</code>,<code className={classes.codeConteiner}>стиль границы</code>,<code className={classes.codeConteiner}>цвет границы</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для задания ширины границы используется свойство <code className={classes.codeConteiner}>border-width</code>. Например, чтобы установить ширину границы в 2 пикселя:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border-width: 2px; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для задания стиля границы используется свойство <code className={classes.codeConteiner}>border-style</code>. Существуют различные стили границ, такие как <code className={classes.codeConteiner}>solid</code>, <code className={classes.codeConteiner}>dashed</code>, <code className={classes.codeConteiner}>dotted</code> и другие. Например, чтобы установить сплошную границу:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border-style: solid; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для задания цвета границы используется свойство <code className={classes.codeConteiner}>border-color</code>. Вы можете использовать различные цветовые модели, такие как HEX, RGB, HSL или цветовые слова. Например, чтобы установить красный цвет границы:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border-color: red; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Все эти свойства можно объединить в одно короткое свойство <code className={classes.codeConteiner}>border</code>, которое задаёт ширину, стиль и цвет границы одновременно. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border: 2px solid red; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Существуют также специфичные свойства для задания границ отдельно для каждой стороны элемента: <code className={classes.codeConteiner}>border-top</code>, <code className={classes.codeConteiner}>border-right</code>, <code className={classes.codeConteiner}>border-bottom</code>, <code className={classes.codeConteiner}>border-left</code>. Например, чтобы задать границу только сверху:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border-top: 2px solid blue; }`}</span></code></span>
        </div>
        </div>
    </div>
  )
}

export default BORDER





