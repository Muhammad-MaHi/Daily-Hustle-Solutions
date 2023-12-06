const array = [1, 2, 3];

/**
 * Object.entries(array) @returns index and value paris in @Array
 */

console.log(Object.entries(array)); // --> [ [0,1], [1,2], [2,3] ]

/**
 * Next distracture the array
 * Now we have index and val
 */

for (const [index, val] of Object.entries(array)) {
  console.log(index, val);
}



