const selectors = Array.from(document.querySelectorAll('.font-size'))
const content = Array.from(document.getElementsByTagName('p'))

//обработка события
selectors.forEach(element => {
    element.addEventListener('click', function (event) {
    event.preventDefault()
    selectorDeact(getActiveSelector())
    if(!event.target.classList.contains('font-size_active')) {
        event.target.classList.add('font-size_active')
        const fontSize = event.target.dataset.size
        setText(fontSize)
    }

}) 
});
    

// находим индекс активного селектора
function getActiveSelector() {
    return selectors.findIndex(tab => tab.classList.contains('font-size_active'));
  }


//деактивация селектора по индексу
function selectorDeact(idx) {
    selectors[idx].classList.remove('font-size_active');
}


//изменение аттрибута контента
function setText(param) {
    content.forEach(element => {
        if(param) {
        element.classList = ('book font-size_'+ param)
        // console.log(element);    
        }
         else {
        element.className = 'book'   
        }

    });
}
