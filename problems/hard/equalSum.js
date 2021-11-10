
// Given an array of numbers, find all pair of numbers whose sum is equal to a given number
// eg. 1,2,3,4,5,6 and 6 -> [[2, 4], [1, 5]]
export const equalSum = (xs, n) => {
	// Your code here...

	// sort the numbers -> asc
	// check if the last element of the array is equal or higher than the number to compare(CN), if so go back 1 step untill we find a lower number
	// Now we compare the first number(LN) in the array with our new "last number of array"(HN)
	// if CN > LN + HN check for how much. 
	// If the diff is higher than HN go back one step from HN and do the comparison again
	// If the diff is lower than HN go forward one step from the LN and do the comparison again
	// repeat until (index of HN - index of LN) = 1

	return []
}

const tests = [
	[equalSum, [[1, 2, 3, 4, 5, 6], 6], [[1, 5], [2, 4]]],
	[equalSum, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 14], [[4, 10], [5, 9], [6, 8]]],
	[equalSum, [[1, 2, 3, 4, 5, 6], 8], [[2, 6], [3, 5]]],
]

export default tests
