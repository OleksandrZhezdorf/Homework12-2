/* forEach method */

const items = ['item1', 'item2', 'item3'];
const copyItems = [];

function forEachCallbackFunction(arr) {
    for (const i of arr) {
        copyItems.push(i)
    }
    return copyItems;
};
function forEachExample(arr, cb) {
    return cb(arr);
};

console.log(copyItems)


/* map method */


function mapExample(arr, callback) {
    let results = [];
    for (i = 0; i < arr.length; i++) {
        results.push(callback(arr[i]));
    }
    return results;
};

var mapSum = function (x) {
    x = x * 2;
    return x;
}

var mapResult = mapExample([10, 20, 30], mapSum);
console.log(mapResult);


/* filter method */


var filterExample = function (arr, callback) {
    let results = [];
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            results.push(arr[i]);
        }
    }
    return results;
};

var filterSum = function (x) {
    if (x > 5)
        return x;
}

var filterResult = filterExample([4, 5, 6, 7, 8, 9], filterSum);
console.log(filterResult);


/* some method */


var someExample = function (arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return true;
        }
    }
    return false;
};

var someSum = function (x) {
    return x == 9;
};

var someResult = someExample([4, 5, 6, 7, 8, 9], someSum);
console.log(someResult);


/* every method */


var everyExample = function (arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (!callback(arr[i])) {
            return false;
        }
    }
    return true;
};

var everySum = function (x) {
    return x == 9;
};

var everyResult = everyExample([9, 9, 9, 9, 9, 9], everySum);
console.log(everyResult);


/* reduce method */


var reduceExample = function (arr, callback) {
    let result = 4;
    for (i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i]);
    }
    return result;
};

var reduceSum = function (result, num) {
    return result + num;
};

var reduceResult = reduceExample([1, 2, 3, 4, 5, 7], reduceSum);
console.log(reduceResult);


/* find method */


var findExample = function (arr, callback) {
    for (i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
};

var findSum = function (x) {
    return x > 6;
};

var findResult = findExample([4, 5, 6, 7, 8, 9], findSum);
console.log(findResult);