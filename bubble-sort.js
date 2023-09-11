function bubbleSort(arr) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j< (arr.length - i - 1); j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }

	return arr;
}

module.exports = bubbleSort;
