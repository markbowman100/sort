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

    partition(arr, low, high) { 
        var pivot = arr[high];  
        var i = low;
        for (var j = low; j < high; j++) { 
            if (arr[j] < pivot) { 
                var temp = arr[i]; 
                arr[i] = arr[j]; 
                arr[j] = temp; 
                i++;
            } 
            else {
                //Do nothing
            }
        } 
  
        var temp = arr[i]; 
        arr[i] = arr[high]; 
        arr[high] = temp; 
  
        return i; 
    } 

    quickSort(arr, low, high) { 
        if (low < high) { 
            /* pi is partitioning index, arr[pi] is  
              now at right place */
            var pivot = this.partition(arr, low, high); 
  
            // Recursively sort elements before 
            // partition and after partition 
            this.quickSort(arr, low, (pivot - 1)); 
            this.quickSort(arr, (pivot + 1), high); 
        } 
        else {
            //Do nothing
        }
    } 
}

module.exports = Sort;
