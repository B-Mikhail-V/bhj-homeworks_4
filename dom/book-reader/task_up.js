const selectors = Array.from(document.querySelectorAll('.font-size'))
const content = Array.from(document.getElementsByTagName('p'))
const content2 = document.getElementsByTagName('p')
// const colorText = document.querySelector('.book__control_color').children
content.forEach(el => {
    if(/^book_color/.test(el.classList)) {
     console.log(el);   
    }
});
    



const el1 = Array.from(document.getElementsByTagName('a'))
// console.log(el1);

el1.forEach(element => {
    if(element.closest('.book__control_color')) {
        // console.log(element.dataset.textColor);
        
    }   
});

el1.forEach(element => {
    if(element.closest('.book__control_background')) {
        // console.log(element.dataset.bgColor);
    }   
});

//обработка события
el1.forEach(element => {
    element.addEventListener('click', function (event) {
    event.preventDefault()
    // resetText()
    selectorDeact(getActiveSelector())
    if(!event.target.classList.contains('font-size_active')) {
        // selectorDeact(getActiveSelector())
        event.target.classList.add('font-size_active')
        const fontSize = event.target.dataset.size
        setText(fontSize)
    }

    if(!event.target.classList.contains('color_active') && event.target.dataset.textColor) {
        selectorTextColorDeact(getActiveTextColor())
        event.target.classList.add('color_active')
        const textColor = event.target.dataset.textColor
        setTextColor(textColor)
    }


}) 
});
    

// находим индекс активного селектора
function getActiveSelector() {
    return el1.findIndex(tab => tab.classList.contains('font-size_active'));
  }

  // находим индекс активного селектора цвета текста
  function getActiveTextColor() {
    return el1.findIndex(tab => tab.classList.contains('color_active'));
  }

//деактивация селектора по индексу
function selectorDeact(idx) {
    el1[idx].classList.remove('font-size_active');
}

// деактивация селектора цвета текста по индексу
function selectorTextColorDeact(idx) {
    el1[idx].classList.remove('color_active');
}

// сброс класса контента
// function resetText() {
//     content.forEach(element => {
//         element.className = '';
//     });
// }

//изменение размера текста
function setText(param) {
    content.forEach(element => {
        element.classList.forEach(cl => {
            if(/^font-size/.test(cl)) {
                element.classList.remove(cl)   
            }
        });
    if(param) {
    element.classList.add('font-size_'+ param);    
    } else {
    element.classList.remove();
    }
    
    });
}

//изменение цвета текста
function setTextColor(param) {
    content.forEach(element => {
        element.classList.forEach(cl => {
            if(/^book_color/.test(cl)) {
                element.classList.remove(cl)   
            }
        });
    if(param) {
    element.classList.add('book_color-'+ param);    
    }
    
    });
}