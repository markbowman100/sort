var Sort = require('./sort.js')
var sort = new Sort();

var arrayOfInt = [
    9,8,7,6,5,4,3,2,1
];

sort.insertionSort(arrayOfInt.length, arrayOfInt)

var arrayOfInt2 = [
    9,8,7,6,5,4,3,2,1,9
];

sort.quickSort(arrayOfInt2, 0, 9)
console.log(arrayOfInt2)