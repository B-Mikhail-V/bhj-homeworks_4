// function getArr(num) {
//     arr = [];
// for(i = 0; i < 10; i++) {
//     arr.push(i)
    
// }
// return arr
// }

ar1 = [1,2,3,4,5,6];

arr3 = [[10,20], [1,2,3,4], [1,2,3], [1,2,3,4,5,6,7]]

function getIndex(array, start = 0) {
    let counter = start;
    return function() {
        indexActivate = counter++ % array.length;
        return indexActivate;
    }
    
}

cc1 = getIndex(ar1);
// console.log(cc1());
// console.log(cc1());
// console.log(cc1());
// console.log(cc1());


function getCount(array) {
    arr2 = [];
    for(i = 0; i < array.length; i++) {
        const сс = getIndex(array[i])
        arr2.push(сс)
    }
    return arr2;
}

// console.log(arr3.length);

console.log(getCount(arr3).length);

function getCountEnd(array) {
    arr4 = [];
    for(i = 0; i < array.length; i++) {
        const cc_22 = array[i];
        // arr4.push(cc_22)
        return cc_22;
    }
    
}



// console.log(getCountEnd(getCount(arr3))());
// console.log(getCountEnd(getCount(arr3))());
// console.log(getCountEnd(getCount(arr3))());
// console.log(getCount(arr3)[0]());

// ccc_0 = getCount(arr3)[0];
// ccc_1 = getCount(arr3)[1];

let cccArr = ['ccc_0', 'ccc_1']
for(i = 0; i < cccArr.length; i++) {
cccArr[i] = getCount(arr3)[i]
    
}


// const ccc_0 = getCount(arr3)[0], ccc_1 = getCount(arr3)[1];
// console.log(ccc_0());
// console.log(ccc_0());
// console.log(ccc_1());
// console.log(ccc_0());
// console.log(ccc_1());
// console.log(ccc_0());
// console.log(ccc_1());
// console.log(ccc_0());

var my_array = new Array(10);

for (let count=0; count<my_array.length; count++)
{
    eval("var my_array" + count + " = getCount(arr3)["+count+"]");

}
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
console.log(my_array2());
