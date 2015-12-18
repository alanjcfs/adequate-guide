var _ = require('ramda');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = _.curry(_.split(' '));

console.log(words('the rain in spain'));

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = function(array_of_strings) {
    return _.map(words, array_of_strings);
}

var array_of_strings = [
    'the rain in spain',
    'falls mainly in the plain'
];

console.log(sentences(array_of_strings));

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = _.curry(_.filter(function(x){ return _.match(/q/i, x);  }));

console.log(filterQs('the quick'));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(xs) {
  return _.reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = undefined;


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried
// // Result for "Something" with n=4 should be "Some"
var take = undefined;
