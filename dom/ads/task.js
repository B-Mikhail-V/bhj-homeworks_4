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
function advOn1(i) {
    // for(i = 0; i < rotators.length; i++) {
        indexActivate = eval('myCount'+ i+'()')
        intervalNew = rotators[i].children[indexActivate].dataset.speed
        console.log(intervalNew);
        timerAds = setTimeout(advOn1(i), intervalNew)
        for(j = 0; j < rotators[i].children.length; j++) {
            rotators[i].children[j].classList.remove('rotator__case_active')
        }

    colorNew = rotators[i].children[indexActivate].dataset.color

    rotators[i].children[indexActivate].style.color = colorNew
    rotators[i].children[indexActivate].classList.add('rotator__case_active')
    // }
    return intervalNew

}



    for(i = 0; i < rotators.length-1; i++) {
        console.log(rotators[i]);
        let interval = setTimeout(function actOn() {
            indexActivate = eval('myCount'+ i+'()')
            colorNew = rotators[i].children[indexActivate].dataset.color
            rotators[i].children[indexActivate].style.color = colorNew
            rotators[i].children[indexActivate].classList.add('rotator__case_active')
            interval = setTimeout(actOn, 300)
        }, 1000)
}
