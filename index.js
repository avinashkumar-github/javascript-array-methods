//Create an Array
//Option 1
let devices = ["laptop", "keyboard", "mouse", "hard disk"];
console.log(devices);

//Option2
let programming_languages = Array.of("NodeJS", "Java", ".Net", "PHP");
console.log(programming_languages);

//Option 3
let sample = new Array("one", "two", "three");
console.log(sample);

//Get the length of an array
console.log(devices.length);

//Access the element of an array using index position
console.log(devices[0]);

//Loop over an Array
devices.forEach((value, index) => {
  console.log(`Index is ${index}, Value id ${value}`);
});

//Add an item to the end of an Array
devices.push("Pen drive");
console.log(devices);

//Remove an item from the end of an Array
devices.pop();
console.log(devices);

//Remove an item from the beginning of an Array
devices.shift();
console.log(devices);

//Add an item to the beginning of an Array
devices.unshift("Power adaptor");
console.log(devices);

//Find the index of an item in the Array
let findItem = "keyboard";
console.log(`Index of ${findItem} is ${devices.indexOf(findItem)}`);

//Remove an item by index position
let indexPosition = devices.indexOf("mouse");
console.log(devices.splice(indexPosition, 1)); //From indexPosition to number of element to remove
console.log(devices);

console.log("---------------------");
//Create a copy of array, it is a shallow copy, it create a new of array in the memory, not a ref to another array
//Option1
let copy_array = Array.from(devices);
console.log(copy_array);

//Option2
let copy_array1 = copy_array.splice(0);
console.log(copy_array1);

//Option 3
let copy_array2 = [...devices];
console.log(copy_array2);

//Remove more than one item from an index position
console.log(`Removed this portion of array ${copy_array.splice(1, 2)}`);
console.log(`Remaining items in an array ${copy_array}`);

//Check if the object is an array
console.log(Array.isArray(devices));

//Array at, get the item using index position, similar as indexOf., it also takes negative index, to locate from right to left
// console.log(`${devices.at(2)}`);
//Will update this, need to check the issue.

//Array concat
let newarray = devices.concat(programming_languages);
console.log(newarray);

//Array copyWithin
//Copy a portion of the array to the same array at some index position, and it does not change the actual length of an array

console.log(`New array is : ${newarray}`);
console.log(newarray.copyWithin(0, 2, 3)); // copy 2nd index and ignore 3rd index item , and overwrite to index at 0
console.log(newarray.copyWithin(0, 2)); //copy at 0th index from 2nd index till the end of array

console.log("========================");
//Array entries : it is internally a generator function
//Get the iterative key value pair from an array, into Iterative object
const iterator = programming_languages.entries();
// console.log(iterator);
//Option 1 using generator next
console.log(iterator.next().value);
console.log(iterator.next().value);

//Option 2- Either iterate using for of
for (let itr of iterator) {
  console.log(itr);
}

console.log("========================");
//Array values
//Get the values from an array, and build a new iterative object of array values of those array
let holder = programming_languages.values();
console.log(holder);
for (let h of holder) {
  console.log(h);
}

//Array keys
//Get the keys out of an array, and make an iterative object of keys
let array_keys = programming_languages.keys();
console.log(array_keys);
for (let ak of array_keys) {
  console.log(ak);
}

console.log("======================");
//Array.every
//check if every item of an array satisfy the condition
console.log(programming_languages);
let response = programming_languages.every((item) => {
  return typeof item == "string";
});
console.log(response);

//Array.fill
//Fill some static value to index

let arr = Array.of(1, 2, 3, 4, 5);
console.log(arr);
console.log(arr.fill("Hello", 0, 2));
console.log(arr.fill("name", 2));
console.log(arr.fill("Avinash"));

//Array filter
//return the filtered array that matches the condition
let number = Array.of(1, 2, 3, 4, 5, 6, 7, 8);
console.log(number.filter((x) => x > 5));

//Array find
// find the first matched item of an array, and return
let age = Array.of(23, 25, 26, 21);
console.log(age.find((x) => x >= 25));

//Array findIndex
//Similar to find item from array, but it return only the first matched condition item's index position
let year = Array.of(1988, 1990, 2021, 2012);
console.log(year.findIndex((x) => x > 2020));

//Array includes : It is by default case sensitive
//This is used to check if the array items includes the value passed, return boolean
console.log(programming_languages.includes("NodeJS"));

//Array join
//Join all items of an array and produce a string
console.log(`Programming languages are : ${programming_languages.join(", ")}`);

//Array lastIndexOf
//return the last index of an item array.
//if no matched , it return -1
programming_languages.push("NodeJS");
console.log(programming_languages.lastIndexOf("NodeJS"));
//There are two element of NodeJS, but the last index return the last item found in the array

//Array map
//It is a iteratable , where it apply certain login on each element of an array, and return the array
console.log(programming_languages.map((x) => x.toUpperCase()));

//Array reduce
///It return a single value out of an array, by performing certain expression on each element of an arrya
console.log(`Number array is ${number}`);
console.log(number.reduce((x, y) => x + y));

//Array reduceRight
//Perform the expression on each element of an array form right side and reduce the result to a single value
console.log(number.reduceRight((x, y) => x + y));

//Array reverse
//Reverse the position of an array
console.log(number);
console.log(number.reverse());

//Array slice
///Extract a section of an array, and return a new array
console.log(number);
console.log(number.slice(0, 3));

//Array some
//If atleast one of the item satisfy the condition, it return true. Opposite to every , where all the items need to satisfy the condition
console.log(number);
console.log(number.some((x) => x > 5));

//Array sort
//Sort the element of an array , and return an array
console.log(`Original array ${number}`);
console.log(`Sort array ${number.sort()}`);

//Array unique, no default function, but can use of Set, as Set returns a unique set
let num = Array.of(1, 2, 1, 3, 4, 4);
console.log(num);
console.log([...new Set(num)]);
