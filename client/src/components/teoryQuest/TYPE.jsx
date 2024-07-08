import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const TYPE = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
    <div className={classes.teory_info}>
        <div>
        <span>
        В CSS свойства могут принимать различные типы значений. Понимание этих типов важно для эффективного использования CSS и стилизации элементов. Рассмотрим основные типы значений, которые часто используются:
        <span style={{display:"flex"}}><code className={classes.codeConteiner}>цветовые значения</code>,<code className={classes.codeConteiner}>размерные значения</code>,<code className={classes.codeConteiner}>процентные значения</code></span>
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Цветовые значения могут быть заданы с использованием различных форматов. Наиболее распространенные из них включают:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>color: red; /* Цветовое слово */</span></code><br/>
            <code className={classes.code_demo}><span>color: #ff0000; /* HEX-значение */</span></code><br/>
            <code className={classes.code_demo}><span>color: rgb(255, 0, 0); /* RGB-значение */</span></code><br/>
            <code className={classes.code_demo}><span>color: hsl(0, 100%, 50%); /* HSL-значение */</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Размерные значения используются для задания размеров элементов и могут быть выражены в различных единицах. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>width: 100px; /* Пиксели */</span></code><br/>
            <code className={classes.code_demo}><span>width: 2em; /* Эм */</span></code><br/>
            <code className={classes.code_demo}><span>width: 50%; /* Процент */</span></code><br/>
            <code className={classes.code_demo}><span>width: 5rem; /* Рем */</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Процентные значения определяются относительно родительского элемента. Они часто используются для задания размеров, отступов и полей. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ width: 50%; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Значения ключевых слов включают предопределенные значения, такие как <code className={classes.codeConteiner}>auto</code>, <code className={classes.codeConteiner}>inherit</code>, <code className={classes.codeConteiner}>initial</code> и <code className={classes.codeConteiner}>none</code>. Они могут использоваться для задания стандартных или унаследованных значений. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>width: auto; /* Автоматическая ширина */</span></code><br/>
            <code className={classes.code_demo}><span>color: inherit; /* Унаследованный цвет */</span></code><br/>
            <code className={classes.code_demo}><span>display: none; /* Элемент не отображается */</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Значения функций включают в себя вызовы CSS-функций, таких как <code className={classes.codeConteiner}>calc()</code> для вычисления, <code className={classes.codeConteiner}>url()</code> для задания URL-адресов, <code className={classes.codeConteiner}>var()</code> для использования CSS-переменных. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>width: calc(100% - 50px); /* Вычисляемое значение */</span></code><br/>
            <code className={classes.code_demo}><span>background-image: url('image.jpg'); /* URL-адрес */</span></code><br/>
            <code className={classes.code_demo}><span>color: var(--main-color); /* Переменная */</span></code>
        </span>
    </div>
    </div>
</div>
  )
}

export default TYPE