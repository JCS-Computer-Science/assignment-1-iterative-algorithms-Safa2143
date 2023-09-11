function linearSearch(arr, key) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */

	 for (let i = 0; i < arr.length; i++) {
		 if(arr[i] === key){
			 return i
		 }
		 
	 }
	
	return null;
}

module.exports = linearSearch;
