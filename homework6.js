/*1. Given an array of integers, find the pair of adjacent
elements that has the largest product and return that product.*/

	function max_product(arr, res = null) {
		if (arr.length === 2 && res === null) {
			return arr[0] * arr[1];
		}
		if (arr.length === 1 && res === null) {
			return arr[0];
		}
		if (arr.length === 1) {
			return res;
		}
		let tmp = arr.shift();
		if (tmp * arr[0] > res) {
			res = tmp * arr[0];
		}
    return max_product(arr, res)
	}

   console.log(max_product([0, 12, 2, 0, 8]))
/*
2.Given an array of integers. All numbers are unique. 
Find the count of missing numbers between minimum and maximum
elements to make integers sequence.*/

	function count_of_missing_num(arr) {
    if (arr.every((a) => Number.isInteger(a))) {
        let count = 0;
        let temp = arr.sort((a, b) => a - b);
        for (let i = temp[0]; i < temp[temp.length - 1]; i++) {
            if (!temp.includes(i)) {
                count++;
            }
        }
        return count;
    }
    return 'Invalid data';

	}

console.log(count_of_missing_num([12,2,0,8]))
console.log(count_of_missing_num([1,4]))

/*3. Convert a long phrase to its acronym.*/

	function convert_to_acronym(str) {
    let tmp = str.split(' ');
    let res = '';
    for (let i = 0; i < tmp.length; i++) {
        res += tmp[i].charAt(0).toUpperCase();
    }
    return res;
	}

console.log(convert_to_acronym('Prisoner of War'));
console.log(convert_to_acronym('Have a good night'));

/*4.Given a string of digits, output all the contiguous
substrings of length n in that string*/

	function sub_string(str, num) {
    let res = '', tmp = '';
    if (num > str.length) {
        return 'The number must be smaller than given string.';
    }
    for (let i = 0; i < str.length; i++) {
        let k = 1;
        if (str.length - i >= num) {
            tmp = str[i];
            while (k < num) {
                tmp += str[k + i];
                k++;
            }
        }
        else {
            break;
        }
        res += tmp + ','
    }
    return res.substring(0, res.length - 1);
	}

console.log(sub_string('495215', 3));
console.log(sub_string('abcdfghz', 7));

/*5.Create a function that builds a tree like object
 given an array with object which contains parent and id properties.*/
 
function build_obj(arr, parent = null, tree = {}) {
    for (let el of arr) {
        if (el.parent === parent) {
            tree[el.id] = {... build_obj(arr, el.id)}
        }
    }
    return tree;
}

let treenode = [
    {parent: null, id: '0'},
    {parent: '0', id: '1'},
    {parent: '0', id: '2'},
    {parent: '1', id: '3'},
    {parent: '1', id: '4'},
    {parent: '2', id: '5'},
    {parent: '4', id: '6'},
	
];

console.log(build_obj(treenode, parent = null, obj = {}))





