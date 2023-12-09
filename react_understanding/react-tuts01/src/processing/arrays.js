let arrays = [1, 2, 3, 4, 5];

arrays.map(function (element, index, array) {
  //element ----> individual element
  //index ---- index starting with 0
  //array --- the array reference itself
  // console.log(element, index);
});

let nArr = arrays.map(function (element) {
  return element * element;
});

//console.log(nArr);

//map() method returns new array and it does not change (mutate) the original array

let arrowArr = arrays.map((element) => element * 3);

console.log(arrowArr);

let fruits = ["apple", "chikoo", "figs"];
let lengths = fruits.map((elements) => elements.length);

console.log(lengths);

let products = [
  { pcode: 1001, pname: "Cashew" },
  { pcode: 1002, pname: "Banana" },
  { pcode: 1003, pname: "Oil depot" },
];

let names = products.map((element) => element.pname);
console.log(names);
