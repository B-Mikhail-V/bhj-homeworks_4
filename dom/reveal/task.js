const advert = Array.from(document.querySelectorAll('.reveal'))
console.log(advert);

// перебор элементов массива, определение положения, задание интервала для функции видимости
// и включение видимости.
document.addEventListener('scroll', () => {
    advert.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect()
        console.log(top, bottom);
        if(isVisible(top, bottom)) {
            element.classList.add('reveal_active')
        } else {
            element.classList.remove('reveal_active')
        }
})
})


// функция определяет, когда элемент должен быть видимым
function isVisible(elTop, elBottom) {
    if(elBottom < 0) {
        return false;
    }
    if(elTop > window.innerHeight) {
        return false;
    }
    return true;
}






