import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const BACKGROUND = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            Изменение цвета страницы с помощью CSS — это простой и эффективный способ улучшить визуальную привлекательность вашего сайта. Стилизация фона страницы, текста и элементов позволяет создавать уникальные и привлекательные дизайны. Основные способы изменения цвета включают:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>цвет фона</code>,<code className={classes.codeConteiner}>цвет текста</code>,<code className={classes.codeConteiner}>цвет границ</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для изменения цвета фона страницы используется свойство <code className={classes.codeConteiner}>background-color</code>. Это свойство можно применять к элементу <code className={classes.codeConteiner}>body</code>, чтобы изменить фон всей страницы:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>body {`{ background-color: lightblue; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для изменения цвета текста используется свойство <code className={classes.codeConteiner}>color</code>. Это свойство можно применять к любым текстовым элементам, таким как заголовки, параграфы или ссылки. Например, чтобы изменить цвет текста всех параграфов:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>p {`{ color: darkgreen; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для изменения цвета границ элементов используется свойство <code className={classes.codeConteiner}>border-color</code>. Например, чтобы изменить цвет границ всех блоков div:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div {`{ border-color: red; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                CSS также позволяет использовать различные цветовые модели, такие как RGB, HEX, HSL и цветовые слова. Например, вы можете задать цвет с помощью значений RGB:
                </span>
            </div>
        </div>
            <div className={classes.teory_demo}>
                <span><code className={classes.code_demo}><span>h1 {`{ color: rgb(255, 0, 0); }`}</span></code></span>
            </div>
            <div className={classes.teory_demo}>
                <span><code className={classes.code_demo}><span>h2 {`{ color: #00ff00; }`}</span></code></span>
            </div>
            <div className={classes.teory_demo}>
                <span><code className={classes.code_demo}><span>h3 {`{ color: hsl(240, 100%, 50%); }`}</span></code></span>
            </div>
        </div>
    </div>
  )
}

export default BACKGROUND





