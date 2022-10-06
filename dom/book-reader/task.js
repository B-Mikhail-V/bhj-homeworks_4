const selectors = Array.from(document.querySelectorAll('.font-size'))
const content = Array.from(document.getElementsByTagName('p'))
<<<<<<< HEAD

//обработка события
=======
console.log(content);

>>>>>>> 01589918eec02e9dbb72b06f01d6523d8b77de21
selectors.forEach(element => {
    element.addEventListener('click', function (event) {
    event.preventDefault()
    selectorDeact(getActiveSelector())
    if(!event.target.classList.contains('font-size_active')) {
        event.target.classList.add('font-size_active')
<<<<<<< HEAD
        const fontSize = event.target.dataset.size
        setText(fontSize)
    }

}) 
});
    
=======
    }




}) 
});
    

>>>>>>> 01589918eec02e9dbb72b06f01d6523d8b77de21

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
<<<<<<< HEAD
        if(param) {
        element.classList = ('book font-size_'+ param)
        // console.log(element);    
        }
         else {
        element.className = 'book'   
        }

    });
}
=======
        element.classList.add(param)
        console.log(element);
    });
}
setText('font-size_small')
>>>>>>> 01589918eec02e9dbb72b06f01d6523d8b77de21
