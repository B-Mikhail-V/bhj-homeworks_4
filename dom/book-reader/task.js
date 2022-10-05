const selectors = Array.from(document.querySelectorAll('.font-size'))
const content = Array.from(document.getElementsByTagName('p'))
console.log(content);

selectors.forEach(element => {
    element.addEventListener('click', function (event) {
    event.preventDefault()
    selectorDeact(getActiveSelector())
    if(!event.target.classList.contains('font-size_active')) {
        event.target.classList.add('font-size_active')
    }




}) 
});
    


// находим индекс активного селектора
function getActiveSelector() {
    return selectors.findIndex(tab => tab.classList.contains('font-size_active'));
  }
// console.log(getActiveSelector());

//деактивация селектора по индексу
function selectorDeact(idx) {
    selectors[idx].classList.remove('font-size_active');
}

//активация селектора
function selectorAct(idx) {
    selectors[idx].classList.add('font-size_active');
}

//изменение аттрибута контента
function setText(param) {
    content.forEach(element => {
        element.classList.add(param)
        console.log(element);
    });
}
setText('font-size_small')