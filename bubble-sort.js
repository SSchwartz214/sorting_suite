function bubbleSort(arr) {
    do {
        var swapped = false;
        arr.forEach((num, i) => {
            if(num > arr[i + 1]) {
                var temp = num;
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        });
    } while(swapped === true);
    return arr;
}

module.exports = bubbleSort;
