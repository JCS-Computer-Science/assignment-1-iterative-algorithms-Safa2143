function insertionSort(arr) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	
	 for (let i = 0; i < arr.length; i++) {
		let current = arr[i];
		let j = i-1;
		while ((j>-1) && (current < arr[j])) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = current 

	 }

	return arr;
}

module.exports = insertionSort;
