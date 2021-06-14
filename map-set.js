//Array is a collection of ordered data
//Object is a collection of key-value data

//Map is a collection of keyed data, where keys can be of any type. Not similar to object , where keys are always string
let map = new Map();
map.set("name", "Avinash");
map.set(1, "Programming");
map.set(true, "Active");

console.log(map.get(true));
console.log(map.get(1));

let mapItr = map.entries();
for (let itr of mapItr) {
  console.log(itr);
}

//Set is a collection of values, without keys/ And the values should always be an unique value
let names = new Array("Avinash", "Kumar", "Avinash");
let uniqueNames = [...new Set(names)];
console.log(uniqueNames);

let sample = new Set(["Avinash", "Kumar", "Avinash"]);
console.log(sample);
sample.forEach((data) => {
  console.log(data);
});
