const profile = {
  name: 'mahi ',
  age: 18,
};

/**
 * Object.entries(profile) @return key value pairs in @Array
 */
console.log(Object.entries(profile)); // --> [ [name, "mahi" ], ["age" , 18 ] ]

/**
 * Next we  destructure the array
 * now we have key and val
 */

for (const [key, val] of Object.entries(profile)) {
  console.log(key, val);
}

const array = [1, 2, 3];

/**
 * Object.entries(array) @returns index and value paris in @Array
 */

console.log(Object.entries(array)); // --> [ [0,1], [1,2], [2,3] ]

/**
 * Next we distracture the array
 * Now we have index and val
 */

for (const [index, val] of Object.entries(array)) {
  console.log(index, val);
}
