import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const CASCAD = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
                <span>
                Вот мы и подобрались к одному из самых важных механизмов CSS — каскадности. Именно он скрывается за первой С в аббревиатуре CSS (Cascading Style Sheets).
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Когда браузер отрисовывает страницу, он должен определить итоговый вид каждого HTML-элемента. Для этого он собирает все CSS-правила, которые относятся к каждому элементу, ведь на элемент могут влиять сразу несколько CSS-правил. Например:
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Примеры каскадирования:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>p {`{ color: blue; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ color: red; }`}</span></code>
            </span>
           
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере оба правила применяют цвет текста к элементам <code className={classes.codeConteiner}>p</code>. Поскольку второе правило определено позже, оно заменяет первое и цвет текста будет красным.
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>p.intro {`{ color: blue; }`}</span></code><br/>
                <code className={classes.code_demo}><span>p {`{ color: red; }`}</span></code>
            </span>
            
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    В этом примере элементам с классом <code className={classes.codeConteiner}>intro</code>, которые являются элементами <code className={classes.codeConteiner}>p</code>, будет присвоен синий цвет текста, в то время как остальные элементы <code className={classes.codeConteiner}>p</code> будут иметь красный цвет текста.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Понимание каскадирования в CSS позволяет разработчикам создавать более гибкие и эффективные стили для своих веб-страниц. Это помогает избежать конфликтов стилей и создавать согласованный и красивый внешний вид веб-сайтов.
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default CASCAD