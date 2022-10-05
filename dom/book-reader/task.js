const selectors = Array.from(document.querySelectorAll('.font-size'))
// selectors[0].classList.add('font-size_active')
// selectors[1].classList.remove('font-size_active')
// console.log(selectors[0].classList);

// находим индекс активного селектора
const indexActiveSelector = function getActiveSelector() {
    return selectors.findIndex(tab => tab.classList.contains('font-size_active'));
  }


//деактивация селектора по индексу
function selectorDeact(array, idx) {
    array[idx].classList.remove('font-size_active');
}


// selectorDeact(selectors, indexActiveSelector())

selectors.forEach(element => {
    console.log(element);
    element.classList.toggle('font-size_active')
    // selectorDeact(selectors, indexActiveSelector())
    

})

// for(i = 0; i < selectors.length; i++) {
//     selectors[i].addEventListener('click', function() {
//         selectorDeact(indexActiveSelector());
//         // selectors[i].classList.add('font-size_active')
//         console.log(selectors[i].dataset.size);
       
//     })
// }
