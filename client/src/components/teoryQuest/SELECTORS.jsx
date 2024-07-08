import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const SELECTORS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            Селекторы в CSS используются для выбора элементов на странице, к которым будут применяться стили. Селекторы позволяют точно определить, какие элементы будут оформляться. Основные типы селекторов включают в себя:
            <span style={{display:"flex"}}><code className={classes.codeConteiner}>элементные</code>,<code className={classes.codeConteiner}>классовые</code>,<code className={classes.codeConteiner}>идентификаторы</code></span>
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Элементные селекторы выбирают элементы по их имени тега. Например, селектор <code className={classes.codeConteiner}>p</code> будет применять стили ко всем параграфам на странице:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>p {`{ color: green; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Классовые селекторы выбирают элементы по атрибуту class. Для указания класса используется точка перед именем класса. Например, селектор <code className={classes.codeConteiner}>.button</code> будет применять стили ко всем элементам с классом "button":
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>.button {`{ background-color: blue; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Селекторы идентификаторов выбирают элементы по их атрибуту id. Для указания идентификатора используется решётка перед именем. Например, селектор <code className={classes.codeConteiner}>#header</code> будет применять стили к элементу с id "header":
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>#header {`{ font-size: 24px; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Комбинированные селекторы позволяют выбирать элементы, используя комбинации различных селекторов. Например, селектор <code className={classes.codeConteiner}>div .button</code> будет применять стили ко всем элементам с классом "button", которые находятся внутри элементов div:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span><code className={classes.code_demo}><span>div .button {`{ margin: 10px; }`}</span></code></span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Селекторы атрибутов позволяют выбирать элементы по наличию или значению атрибута. Например, селектор <code className={classes.codeConteiner}>input[type="text"]</code> будет применять стили ко всем элементам input с атрибутом type, равным "text":
                </span>
            </div>
        </div>
            <div className={classes.teory_demo}>
                <span><code className={classes.code_demo}><span>input[type="text"] {`{ border: 1px solid black; }`}</span></code></span>
            </div>
        </div>
    </div>
  )
}

export default SELECTORS





