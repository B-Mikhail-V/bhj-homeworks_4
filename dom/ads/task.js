const advArr = document.querySelectorAll(".rotator__case")
const rotators = Array.from(document.querySelectorAll(".rotator"))

// rotators.forEach(element => {
//     console.log(element.children);
// });


// const advArr2 = [1, 2, 3, 4]
// console.log(advArr.length);

// function setInt() {
//     const bb = advArr.length;
// for(let i = 0; i < bb; i++) {
//     console.log(advArr[i % advArr.length]);
// }
    
// }

function getIndex(array, start = 0) {
    let counter = start;
    return function() {
        indexActivate = counter++ % array.length;
        return indexActivate;
    }
    
}

// let indexArray = [];
function getCountArray(array) {
    for(i = 0 ; i < array.length; i++) {
       const eval("indexArray" +i+ ") = getIndex(array[i])
       return indexArray;
    }
    
}

// console.log(getCountArray(rotators)[0]);
let c1 = getCountArray(rotators)[1];
console.log(c1);

// setInterval(() => console.log(getCountArray(rotators)()[1]), 1000)

// setInterval(() => setInt(), 1000)

// let index1 = getIndex(advArr)

// setInterval(() => console.log(index1()), 1000)
