class Sort {
    constructor() {}

    insertionSort(length, array) {
        var key;
        var a;
        for (var i = (length-1); i >= 0; i--) {  
            a = i + 1;
            key = array[i]
    
            while(array[a] <= key) {
                array[a - 1] = array[a];
                a = a + 1;
            }
            
            array[a - 1] = key;
        }  
    }
}

module.exports = Sort;
