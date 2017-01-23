/*
Eloquent JavaScript excercise answers.
URL: http://eloquentjavascript.net/
*/

//p.40 Looping a triangle
var triangle = "";

for (var i = 1; i <= 7; i++) {
	for (var j = 0; j < i; j++) {
  	triangle += "#";
  }
  triangle += "\n";
}
console.log(triangle);

//p.41 FizzBuzz
for (var i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log('' + i);
    }
}

//p.41 Chess board
var odd = ' # # # #', even = '# # # # ';

for (var i = 1; i <= 8; i++) {
    if (i % 2 === 0) {
        console.log(even);
    } else {
        console.log(odd);
    }
}

//p.59 Minimum
function min(a, b) {
    if (a === undefined && b === undefined) {
        return 'Invalid parameters';
    } else if (a === undefined) {
        return b;
    } else if (b === undefined) {
        return a;
    } else {
        return a <= b ? a : b;
    }
}
console.log(min(1, 2));
console.log(min(2, 1));
console.log(min(2, 2));
console.log(min());

//p.59 Recursion
function isEven(n) {
    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        if (n < 0) {
            return isEven(n + 2);
        } else {
            return isEven(n - 2);
        }
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-50));
console.log(isEven(-75));

//p.60 Bean counting
function countBs(str) {
    var count = 0;
    str = String(str);
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === 'B') {
            count++;
        }
    }
    return count;
}
console.log(countBs('BBbBeansB'));

function countChars(str, char) {
    var count = 0;
    str = String(str);
    char = String(char);
    if (char.length > 1) {
        char = char.charAt(0);
    }
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count++;
        }
    }
    return count;
}
console.log(countChars('BBBBBbeans', 'b'));
console.log(countChars('BBBBBbeans'));

//p.83 Sum of a range
function range(start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(range(1, 10));

function sum(arr) {
    var sum = 0;
    for (var index in arr) {
        //Number(str) or parseInt(str) can also work.
        sum += arr[index] * 1; 
    }
    return sum;
}
console.log(sum(range(1, 10)));

function range(start, end, step) {
    if (step === undefined) {
        return range(start, end, 1);
    } else {
        var arr = [];
        if (start > end && step < 0) {
            for (var i = start; i >= end; i += step) {
                arr.push(i);
            }
        } else {
            for (var i = start; i <= end; i += step) {
                arr.push(i);
            }
        }
        return arr;
    }
}
console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

//p.84 Revising an array
function reverseArray(arr) {
    var rtn = [];
    if (typeof(arr) !== 'object') {
        return rtn;
    } else {
        for (var i = 0; i < arr.length; i++) {
            rtn.push(arr[arr.length - i - 1]);
        }
        return rtn;
    }
}
console.log(reverseArray(range(0, 5)));

//This one is rather efficient than the function above.
function reverseArrayInPlace(arr) {
    if (typeof(arr) !== 'object') {
        return undefined;
    } else {
        var temp;
        for (var i = 0; i < arr.length / 2; i++) {
            temp = arr[i];
            arr[i] = arr[arr.length - i - 1];
            arr[arr.length - i - 1] = temp;
        }
        return arr;
    }
}
console.log(reverseArrayInPlace(range(0, 5)));

//p.84 A list
var arr = [1, 2, 3];
function arrayToList(arr) {
    var list = {};
    //var list = {value : null, rest : null};
    for (var i = arr.length - 1; i >= 0; i--) {
        /*
            This doesn't work:
            list.value = arr[i];
            list.rest = list;
        */
        list = {value : arr[i], rest : list};
    }
    return list;
}
console.log(arrayToList(arr));

function listToArray(list) {
    var arr = [];
    while (list.value !== undefined) {
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}
console.log(listToArray(arrayToList(arr)));

function prepend(element, list) {
    if (typeof(list) !== 'object') {
        console.log("Invalid operation. Can't add " + element + " to " + list + ".");
    } else {
        return {value : element, rest : list};
    }
}
var list = {};
list = prepend(1, list);
list = prepend('a', list);
list = prepend(true, list);
console.log(list);

var list = {value : 1, rest : {value : 2, rest : {value : 3, rest : {}}}};
function nth(list, n) {
    function traverseNodes(list, start, goal) {
        //console.log(list);
        if (start === goal && list.value !== undefined) {
            return list.value;
        } else if (start > goal || list.value === undefined) {
            return undefined;
        } else {
            return traverseNodes(list.rest, start + 1, goal);
        }
    }
    return traverseNodes(list, 0, n);
}
console.log(nth(list, 2));

//p.85 Deep comparison
function deepEqual(val1, val2) {

}
