function binarySearch(sortedArr, val) {
	let start = 0;
	let end = sortedArr.length;
	while (start < end - 1) {
		let middle = Math.floor((start + end) / 2);
		if (sortedArr[middle] === val) {
			return middle;
		} else if (sortedArr[middle] < val) {
			start = middle;
		} else {
			end = middle;
		}
	}
	return -1;
}

function binarySearch2(arr, val) {
	let start = 0,
		end = arr.length;
	while (start < end) {
		const mid = Math.floor((start + end) / 2);
		if (arr[mid] === val) return mid;
		else if (arr[mid] < val) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return -1;
}

function binarySearch3(arr, elem) {
	let start = 0;
	let end = arr.length - 1;
	let middle = Math.floor((start + end) / 2);
	while (arr[middle] !== elem && start <= end) {
		if (elem < arr[middle]) end = middle - 1;
		else start = middle + 1;
		middle = Math.floor((start + end) / 2);
	}
	return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([ 2, 3, 4, 5, 6, 7, 8, 9 ], 4));
console.log(binarySearch([ 1, 2, 3, 4, 5 ], 3));
console.log(binarySearch([ 1, 2, 3, 4, 5 ], 5));
console.log(binarySearch([ 1, 2, 3, 4, 5 ], 6));
console.log(
	binarySearch(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		10
	)
);
console.log(
	binarySearch(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		95
	)
);
console.log(
	binarySearch(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		100
	)
);

console.log(binarySearch2([ 2, 3, 4, 5, 6, 7, 8, 9 ], 4));
console.log(binarySearch2([ 1, 2, 3, 4, 5 ], 3));
console.log(binarySearch2([ 1, 2, 3, 4, 5 ], 5));
console.log(binarySearch2([ 1, 2, 3, 4, 5 ], 6));
console.log(
	binarySearch2(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		10
	)
);
console.log(
	binarySearch2(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		95
	)
);
console.log(
	binarySearch2(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		100
	)
);
console.log(binarySearch3([ 2, 3, 4, 5, 6, 7, 8, 9 ], 4));
console.log(binarySearch3([ 1, 2, 3, 4, 5 ], 3));
console.log(binarySearch3([ 1, 2, 3, 4, 5 ], 5));
console.log(binarySearch3([ 1, 2, 3, 4, 5 ], 6));
console.log(
	binarySearch3(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		10
	)
);
console.log(
	binarySearch3(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		95
	)
);
console.log(
	binarySearch3(
		[
			5,
			6,
			10,
			13,
			14,
			18,
			30,
			34,
			35,
			37,
			40,
			44,
			64,
			79,
			84,
			86,
			95,
			96,
			98,
			99
		],
		100
	)
);
