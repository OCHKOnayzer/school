

import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const SELECTORSTAGS = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
    <TitleQuest title={title} quest_id={quest_id}/>
    <div className={classes.teory__content}>
    <div className={classes.teory_info}>
        <div>
        <span>
        Селекторы дочерних элементов (child selectors) в CSS позволяют выбирать элементы, которые являются прямыми потомками других элементов. Они указывают на конкретные отношения между элементами в дереве разметки HTML. Рассмотрим, как они работают и как их использовать.
        </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селектор дочерних элементов выглядит как комбинация двух селекторов, разделенных символом "greater than" (&gt;). Этот символ указывает, что следующий элемент является непосредственным потомком предыдущего элемента. Например, чтобы выбрать все элементы <code className={classes.codeConteiner}>span</code>, являющиеся прямыми потомками элементов <code className={classes.codeConteiner}>div</code>, можно использовать следующий селектор:
            </span>
        </div>
    </div>
    <div className={classes.teory_demo}>
        <span>
            <code className={classes.code_demo}><span>div &gt; span {`{ color: blue; }`}</span></code>
        </span>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
                Этот код применит синий цвет к тексту всех элементов <code className={classes.codeConteiner}>span</code>, которые являются прямыми потомками элементов <code className={classes.codeConteiner}>div</code>.
            </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Селекторы дочерних элементов полезны, когда нужно применить стили только к элементам, которые находятся на определенном уровне вложенности. Они позволяют избежать конфликтов стилей, когда одинаковые теги используются в разных частях разметки страницы.
            </span>
        </div>
    </div>
    <div className={classes.teory_info}>
        <div>
            <span>
            Однако следует помнить, что селекторы дочерних элементов выбирают только непосредственных потомков, то есть элементы, которые находятся непосредственно внутри указанного родительского элемента. Они не выбирают всех потомков данного элемента на любом уровне вложенности.
            </span>
        </div>
    </div>
    </div>
</div>
  )
}

export default SELECTORSTAGS


