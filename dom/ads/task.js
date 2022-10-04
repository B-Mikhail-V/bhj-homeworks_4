const advArr = document.querySelectorAll(".rotator__case")
const rotators = Array.from(document.querySelectorAll(".rotator"))

//функция для счетчика индексов для массива
function getIndex(array, start = 0) {
    let counter = start;
    return function() {
        indexActivate = counter++ % array.length;
        return indexActivate;
    }
    
}

// объявляем переменные для счетчиков для массивов
let myCount = new Array(rotators.length)
for (i = 0; i < rotators.length; i++) {
    eval("var myCount" + i + " = getIndex(rotators[" + i + "].children)");
}


// включение элемента массива
function advOn1(array) {
    for(i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for(j = 0; j < array[i].children.length; j++) {
            console.log(array[i].children[j]);
            array[i].children[j].classList.remove('rotator__case_active')
            // console.log(eval('myCount'+ i+'()'));
            array[i].children[eval('myCount'+ i+'()')].classList.add('rotator__case_active')
        } 
    array[i].children[eval('myCount'+ i+'()')].classList.add('rotator__case_active')    
    }
}
setInterval(() => getInterval(rotators), getInterval(rotators))

function getInterval(array) {
    for(i = 0; i < array.length; i++) {
        // console.log(array[i]);
        for(j = 0; j < array[i].children.length; j++) {
            console.log('массив ',i, array[i].children[eval('myCount'+ i+'()')].dataset.speed);
            return array[i].children[eval('myCount'+ i+'()')].dataset.speed
            // console.log('массив, цвет ',i, array[i].children[j].dataset.color);
        } 
    // array[i].children[eval('myCount'+ i+'()')].classList.add('rotator__case_active')    
    }
}


