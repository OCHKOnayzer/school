
 // При нажатии на "Показать еще", появляются все card
const btn = document.querySelector('.btn');
const cards = Array.from(document.querySelectorAll('.card'));


window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 989) response1();
    if (event.target.window.innerWidth <= 989 && event.target.window.innerWidth > 659) response2();
    if (event.target.window.innerWidth <= 659) response3();
})

function openCatalog() {
    btn.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        btn.classList.add('hidden');
    })
}

function response1() {
    if (window.innerWidth > 989) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 8) {
                item.classList.remove('hidden')
            } else if (index > 8) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response1()


function response2() {
    if (window.innerWidth <= 989 && window.innerWidth > 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response2()


function response3() {
    if (window.innerWidth <= 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 2) {
                item.classList.remove('hidden')
            } else if (index > 2) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response3()