import classes from './style/style.module.css';
import TitleQuest from './titleQuest';

const DEFOULTSTYLE = ({quest_id,title}) => {
  return (
    <div className={classes.teoryWrapper}>
        <TitleQuest title={title} quest_id={quest_id}/>
        <div className={classes.teory__content}>
        <div className={classes.teory_info}>
            <div>
            <span>
            Стили по умолчанию в CSS определяют, как будут отображаться элементы HTML, если для них не заданы явные стили. Эти стили предоставляются браузером и могут различаться в зависимости от его типа и версии. Понимание стилей по умолчанию важно для того, чтобы создавать согласованный и предсказуемый внешний вид веб-страниц. Рассмотрим основные аспекты стилей по умолчанию.
            </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Стили по умолчанию определяют шрифты, цвета, размеры и другие аспекты отображения для всех элементов HTML. Например, большинство браузеров задают для обычного текста базовый размер шрифта и цвет по умолчанию:
                </span>
            </div>
        </div>
        <div className={classes.teory_demo}>
            <span>
                <code className={classes.code_demo}><span>p {`{ font-size: 16px; color: #333; }`}</span></code>
            </span>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                    Это означает, что если для элемента <code className={classes.codeConteiner}>p</code> не заданы другие стили, его текст будет иметь размер шрифта 16 пикселей и цвет #333 (темно-серый).
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Стили по умолчанию могут быть переопределены с помощью явных стилей, определенных в таблице стилей CSS. Это позволяет разработчикам создавать уникальные дизайны и адаптировать внешний вид элементов под конкретные потребности проекта.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Важно помнить, что стили по умолчанию могут отличаться в различных браузерах и версиях браузеров. Это может приводить к небольшим различиям в отображении веб-страниц на разных устройствах и в разных окружениях.
                </span>
            </div>
        </div>
        <div className={classes.teory_info}>
            <div>
                <span>
                Для создания согласованного и предсказуемого внешнего вида веб-страниц рекомендуется явно задавать все необходимые стили в таблице стилей CSS, минимизируя использование стилей по умолчанию.
                </span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DEFOULTSTYLE