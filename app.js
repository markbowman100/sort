var Sort = require('./sort.js')
var sort = new Sort();

var arrayOfInt = [
    9,8,7,6,5,4,3,2,1
];

console.log(arrayOfInt);
sort.insertionSort(arrayOfInt.length, arrayOfInt)
console.log(arrayOfInt);
