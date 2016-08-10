// function add(a, b) {
//   return a + b;
// };
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Amy', 'Abby'];
// var groupB = ['Shannon'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Ross', 24];
var personTwo = ['Amy', 23];

function greet(name, age) {
  return 'Hi ' + name + ', you are ' + age;
}

console.log(greet(...person));
console.log(greet(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Ross', ...names];

final.forEach(function(name) {
  console.log(name);
});
