/*1. Given an array. Write a recursive function that removes the first 
element and returns the given array. (without using arr.unshift(),
assign second element to first, third element to second...)*/


function rec(arr, res) {
    if (res !== undefined && arr.length - 1 === res.length || arr.length <= 1) {
        return arr.length <= 1 ? res = [] : res;
    }
    let i = res !== undefined ? res.length : 0;
    if (res === undefined) {
        res = [];
    }
    res.push(arr[i + 1]);
    return rec(arr, res);
}

console.log(rec([6, 78, 'n', 0, 1]));
console.log(rec([5]));
console.log(rec([]));

/*2. Given an array of nested arrays. Write a recursive function that 
flattens it. (Hint create function that concats arrays).*/

	function flattenAndConcat(arr, res = [], small_arr = []) {
		if (!arr.length) {
			small_arr = small_arr.join();
			small_arr = small_arr.split(',');
			small_arr = small_arr.map(Number);
			return !small_arr.legth ? res.concat(small_arr) : res
		}
		let result = res;
		let tmp = arr.shift();
		if (Array.isArray(tmp)) {
			if (arr.length) {
				small_arr.push(arr);
			}
			return flattenAndConcat(tmp, result, small_arr);
		}
		result = res.concat(tmp);
		if (!small_arr.legth) {
			return flattenAndConcat(arr, result, small_arr);
		}
		return flattenAndConcat(arr, result)
	}

	console.log(flattenAndConcat([1, [3, 4, [1, 2]], 10]));
	console.log(flattenAndConcat([14, [1, [[[3, []]], 1], 0]]));

/*3.	 Given a number. Write a function that calculates its sum of 
the digits and if that sum has more than 1 digit find the sum of 
digits of that number. Repeat that process if needed and return the result.*/

function calculate_sum(num, res) {
    if (res !== undefined && res.toString().length === 1) {
        return res;
    }
    let tmp = num.toString();
    let sum = 0;
    for (let i = 0; i < tmp.length; i++) {
        sum += +tmp[i];
    }
    if (sum >= 10) {
        return calculate_sum(sum);
    }
    return calculate_sum(num, sum);
}

console.log(calculate_sum(14));
console.log(calculate_sum(29));
console.log(calculate_sum(999999999999));


/*4. Given an array and a number N.  Write a recursive function that 
rotates an array N places to the left. (Hint: to add element to 
the beginning use arr.unshift())*/

function revers(arr, num) {
    if (num === 0) {
        return arr;
    }
    if (num > 0) {
        let tmp = arr.shift();
        arr.push(tmp);
        num--;
        
    }
    else {
        let tmp = arr.pop();
        arr.unshift(tmp);
        num++;
       
    }
 return revers(arr, num);

}

console.log(revers(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(revers(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));


/*5.	Given an object. Invert it (keys become values and values become keys).
 If there is more than key for that given value create an array.*/
 
 
 function invert(obj) {
    let obj1 = {};
    let tmp = [];

    for (let key in obj) {
        if (obj1.hasOwnProperty(obj[key])) {
            tmp = [...obj1[obj[key]], key];
            obj1[obj[key]] = tmp;
            tmp = []
        }
        else {
            obj1[obj[key]] = key
        }
    }
    return obj1
}

console.log(invert({ a: '1', b: '2' }))
console.log(invert({ a: '1', b: '2', c: '2' }))
console.log(invert({ a: '1', b: '2', c: '2', d: '2' }))

/*6. Given the list of the following readers:*/

//Tarberak 1
///////////////

function sort_bypercent(arr){
return arr.sort((a,b)=>b.percent-a.percent).filter((a)=>a.readStatus)
}

console.log(sort_bypercent([
	{ book: "Catcher in the Rye", readStatus: true, percent: 40},
	{ book: "Animal Farm", readStatus: true, percent: 20},
	{ book: "Solaris", readStatus: false, percent: 90 },
	{ book: "The Fall", readStatus: true, percent: 50 },
	{ book: "White Nights", readStatus: false, percent: 60 } ,
	{ book: "After Dark", readStatus: true, percent: 70 }
]))

//Tarberak 2
////////////////////

function sort_bypercent(arr) {
    let res = [];
    let percent;
    let check = true;
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        if (!obj.readStatus) {
            arr.splice(i, 1)
        }
    }

    while (check) {
        check = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i].percent < arr[i + 1].percent) {
                let tmp = arr[i].percent;
                arr[i].percent = arr[i + 1].percent;
                arr[i + 1].percent = tmp
                check = true
            }
        }

    }

    return arr

}

console.log(sort_bypercent([
    {book: "Catcher in the Rye", readStatus: true, percent: 40},
    {book: "Animal Farm", readStatus: true, percent: 20},
    {book: "Solaris", readStatus: false, percent: 90},
    {book: "The Fall", readStatus: true, percent: 50},
    {book: "White Nights", readStatus: false, percent: 60},
    {book: "After Dark", readStatus: true, percent: 70}
]))


