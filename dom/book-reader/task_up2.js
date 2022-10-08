// объект с данными для каждого селетора
const datas = {
    0: ['font-size_active', 'font-size_', 'size'],
    1: ['color_active', 'book_color-', 'textColor'],
    2: ['color_active', 'book_bg-', 'bgColor'],
}


// находим все группы селекторов
const controls = Array.from(document.querySelectorAll(".book__control"));


// находим все элементы, всех селеторов
const el1 = Array.from(document.getElementsByTagName('a'));


// объект селекторов с разделением элементов на группы
let contrElements = {};
for(i = 0; i < controls.length; i++) {
    let arrElements = [];
    for(j = 0; j < el1.length; j++) {
        if(el1[j].parentElement == controls[i]) {
            arrElements.push(el1[j])
        }
    }
    contrElements[i] = arrElements;

}


//обработка события
el1.forEach(element => {
    element.addEventListener('click', function(event) {
        event.preventDefault()
        for(i = 0; i < controls.length; i++) {
            if(event.target.parentElement == controls[i]) {
                console.log(event.target);
                selectDeact(i);
                event.target.classList.add(datas[i][0])
                removeStyles(i);
                changeContent(i, event)
            }
        }
        
    })
});


// деактивация всех селекторов в группе
function selectDeact(idxControls) {
    contrElements[idxControls].forEach(element => {
        element.classList.remove(datas[idxControls][0])
    })
}


// массив контента
const content = Array.from(document.getElementsByTagName('p'));


// удаление стилей контента
function removeStyles(idxControls) {
    content.forEach(element => {
        element.classList.forEach(clList => {
            if((eval('/^' + datas[idxControls][1] + '/')).test(clList)) {
                element.classList.remove(clList); 
            }
        })
    })
};


// изменение атрибута текста или фона
function changeContent(idxControls, evnt) {
    const data = evnt.target.dataset[datas[idxControls][2]]
    content.forEach (element => {
        if(data) {
            element.classList.add(datas[idxControls][1] + data)
        } else {
            element.classList.remove();
        }
        
    })
}

