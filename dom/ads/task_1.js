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

// определяем массив значений для активации: индекс элемента, цвет и интервал
function getDatas(array) {
    let datasArray = new Array(array.length)   
    for(i = 0; i < array.length; i++) {
        let indexActive = eval('myCount'+ i +'()');
        let newColor = array[i].children[indexActive].dataset.color;
        let newInterval = array[i].children[indexActive].dataset.speed;
        // console.log(indexActive, newColor, newInterval); 
        datasArray[i] = [indexActive, newColor, newInterval]

    }
    return datasArray;
}
// console.log(getDatas(rotators))
// console.log(getDatas(rotators))


// интервальная функция
// function getInterval(array) {
//     // let interval = array[2];
//     return function(foo) {
//         let interval = array[2];
//         console.log(interval);
//         return setInterval(() => foo(interval), interval);
//     }
    
// }

// function pr(arg) {
//     console.log(arg);
    
// }
// console.log(getInterva l(getDatas(rotators)[0]));

// interval0 = getInterval(getDatas(rotators)[0]);
// interval1 = getInterval(getDatas(rotators)[1]);
// // // interval1 = getInterval(getDatas(rotators)[1]);
// console.log(interval0(pr));
// console.log(interval1(pr));
// console.log(interval1(pr));
// console.log(interval1(pr));

// включение элемента массива
// function advOn(array, i) {
//     // for(i = 0; i < array.length; i++) {
//         // console.log(array[i]);
//     let indexActive = eval('myCount'+ i +'()');
//     interval = array[i].children[indexActive].dataset.speed;
//         for(j = 0; j < array[i].children.length; j++) {
//             // console.log(array[i].children[j]);
//             array[i].children[j].classList.remove('rotator__case_active')
//             // console.log(eval('myCount'+ i+'()'));
//             // array[i].children[eval('myCount'+ i+'()')].classList.add('rotator__case_active')
//         }
    
//     let dataColor = array[i].children[indexActive].dataset.color
//     array[i].children[indexActive].style.color = dataColor
//     // interval = array[i].children[indexActive].dataset.speed
//     console.log(interval);
//     array[i].children[indexActive].classList.add('rotator__case_active')   
//     }
// // }

// setInterval(() => advOn(rotators, 0), 900)
// setInterval(() => advOn(rotators, 1), 700)



// function advOn2(array) {
//     for(i = 0; i < array.length; i++) {
        // let indexActive = eval('myCount'+ i +'()');
        // interval = array[i].children[indexActive].dataset.speed;
//         console.log('массив---', i, '---', interval)
//         clearInterval(timerAct)
//         eval("let setTimer" + i + " = setInterval(() => console.log('массив_', " + i + ", '---', interval), interval)")
//     }
// }

// let timerAct = setInterval(() => advOn2(rotators), 1000)

function advOn2(array) {
    // while(true) {
        
        for(i = 0; i < array.length; i++) {
        let indexActive = eval('myCount'+ i +'()');
        // indexActive = getDatas(array)[i]
        interval = array[i].children[indexActive].dataset.speed;
        console.log(interval);
        advOn3(array, i, indexActive)
        return interval
        // console.log(indexActive);
        // setTimeout(() => advOn3(array, i, indexActive), interval)
    
        }
        
    // }

}

// включение элемента массива
function advOn3(array, i, index) {
    console.log(array[i].children[1]);
    // for(i = 0; i < array.length; i++) {
        // console.log(array[i]);
    // let indexActive = eval('myCount'+ i +'()');
    // interval = array[i].children[index].dataset.speed;
        for(j = 0; j < array[i].children.length; j++) {
            // console.log(array[i].children[j]);
            array[i].children[j].classList.remove('rotator__case_active')
            // console.log(eval('myCount'+ i+'()'));
            // array[i].children[eval('myCount'+ i+'()')].classList.add('rotator__case_active')
        }
    
    let dataColor = array[i].children[index].dataset.color
    array[i].children[index].style.color = dataColor
    // interval = array[i].children[indexActive].dataset.speed
    // console.log(interval);
    array[i].children[index].classList.add('rotator__case_active')   
    }
// }

setInterval(() => advOn2(rotators), advOn2(rotators))
// advOn2(rotators);