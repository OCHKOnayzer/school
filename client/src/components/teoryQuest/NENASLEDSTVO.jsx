import React from 'react';
import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const NENASLEDSTVO = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
    <div className={classes.teory_info}>
        <div>
        <span>
        В CSS есть свойства, которые по умолчанию не наследуются дочерними элементами. Это означает, что их значения не передаются от родительских элементов к дочерним автоматически. Эти свойства часто относятся к макету, расположению и отображению элементов. Рассмотрим некоторые из них:
        <span style={{display:"flex"}}><code className={classes.codeConteiner}>margin</code>,<code className={classes.codeConteiner}>padding</code>,<code className={classes.codeConteiner}>width</code>,<code className={classes.codeConteiner}>height</code>,<code className={classes.codeConteiner}>border</code></span>
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>margin</code> задает внешние отступы элемента. Оно не наследуется, что позволяет каждому элементу иметь свои собственные отступы независимо от родительских элементов. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ margin: 20px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>p {`{ margin: 10px; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>padding</code> задает внутренние отступы элемента. Оно также не наследуется, что позволяет каждому элементу иметь свои собственные внутренние отступы независимо от родительских элементов. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ padding: 15px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ padding: 5px; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойства <code className={classes.codeConteiner}>width</code> и <code className={classes.codeConteiner}>height</code> задают ширину и высоту элемента соответственно. Они не наследуются, так как размеры каждого элемента обычно определяются отдельно. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ width: 100px; height: 100px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ width: 50px; height: 50px; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>border</code> задает границу элемента. Оно также не наследуется, что позволяет каждому элементу иметь свои собственные границы независимо от родительских элементов. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ border: 2px solid black; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ border: 1px dashed gray; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Свойство <code className={classes.codeConteiner}>display</code> задает способ отображения элемента. Оно не наследуется, чтобы каждый элемент мог иметь свой собственный режим отображения. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ display: flex; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ display: inline-block; }`}</span></code></span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Если нужно, чтобы дочерний элемент унаследовал значение ненаследуемого свойства от родительского элемента, можно использовать ключевое слово <code className={classes.codeConteiner}>inherit</code>. Например:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span><code className={classes.code_demo}><span>div {`{ margin: 20px; }`}</span></code></span>
        <span><code className={classes.code_demo}><span>span {`{ margin: inherit; }`}</span></code></span>
    </div>
    </div>
</div>
  )
}

export default NENASLEDSTVO