const selectors = Array.from(document.querySelectorAll('.font-size'))
const content = Array.from(document.getElementsByTagName('p'))
// const colorText = document.querySelector('.book__control_color').children
// console.log(colorText);

const el1 = Array.from(document.getElementsByTagName('a'))
// console.log(el1);

el1.forEach(element => {
    if(element.closest('.book__control_color')) {
        console.log(element.dataset.textColor);
        
    }   
});

el1.forEach(element => {
    if(element.closest('.book__control_background')) {
        console.log(element.dataset.bgColor);
    }   
});

//обработка события
el1.forEach(element => {
    element.addEventListener('click', function (event) {
    event.preventDefault()
    // selectorDeact(getActiveSelector())
    if(!event.target.classList.contains('font-size_active')) {
        selectorDeact(getActiveSelector())
        event.target.classList.add('font-size_active')
        const fontSize = event.target.dataset.size
        setText(fontSize)
    }
    if(!event.target.classList.contains('color_active') & event.target.dataset.textColor) {
        selectorTextColorDeact(getActiveTextColor())
        event.target.classList.add('color_active')
        const fontColor = event.target.dataset.textColor
        // setText(fontSize)
    }


}) 
});
    

// находим индекс активного селектора
function getActiveSelector() {
    return selectors.findIndex(tab => tab.classList.contains('font-size_active'));
  }

  // находим индекс активного селектора цвета текста
  function getActiveTextColor() {
    return selectors.findIndex(tab => tab.classList.contains('color_active'));
  }

//деактивация селектора по индексу
function selectorDeact(idx) {
    selectors[idx].classList.remove('font-size_active');
}

// деактивация селектора цвета текста по индексу
function selectorTextColorDeact(idx) {
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
