function parityAnalysis(n){
	//check if number is negative and flip it if it is 
	if(n < 0){
		n = n*-1;
	}

	//convert n to a string and make a list of nums
	//for each digit
	let strnum = n + '';
	nums = [...strnum].map(x => Number(x))

	//sum the list and returns if the parity is the same
	sumNums = nums.reduce((counter, curr) => counter + curr)
	console.log(sumNums, n)
	return sumNums % 2 == n % 2;
}

module.exports = {parityAnalysis}