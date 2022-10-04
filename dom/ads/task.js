const advArr = document.querySelectorAll(".rotator__case")
const rotators = Array.from(document.querySelectorAll(".rotator"))
console.log(rotators.length);


function getIndex(array, start = 0) {
    let counter = start;
    return function() {
        indexActivate = counter++ % array.length;
        return indexActivate;
    }
    
}

// function creatCounts(array) {
//     let myCount = new Array(array.length)
//     for (i = 0; i < array.length; i++) {
//         return eval("let myCount" + i + " = getIndex(array[" + i + "].children)");
//     }
// }

let myCount = new Array(rotators.length)
for (i = 0; i < rotators.length; i++) {
    eval("var myCount" + i + " = getIndex(rotators[" + i + "].children)");
}

// console.log(creatCounts(rotators)[0]);

// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount1());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());
// console.log(myCount0());




// console.log(getCountArray(rotators)[0]());
// console.log(getCountArray(rotators)[0]());
// console.log(getCountArray(rotators)[0]());

// setInterval(() => console.log(getCountArray(rotators)[0]()), 1000)
// setInterval(() => myCount1(), 1000)

// let index1 = getIndex(advArr)

// setInterval(() => console.log('второй - ', myCount1()), 800)
// setInterval(() => console.log('первый ->>>>> ',myCount0()), 500)
setInterval(() => console.log(myCount0()), 800)