function binarySearch(arr, i) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	 let start = 0;
	 let end = arr.length -1;
	 while(start <= end){
		 let mid = Math.floor((start +end)/2)
		 if (arr[mid] === i){
			 return mid;
		 }
		 if( i < arr[mid]){
			 end = mid -1;
		 }else{
			 start = mid + 1;
		 }
	 }
	 return null;

}

module.exports = binarySearch;
