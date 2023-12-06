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
