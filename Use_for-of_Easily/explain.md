# Efficient Use of For Loop on Arrays and Objects

## Working with Arrays

First, let's define an array:

```javascript
const array = [1, 2, 3];
```

Next, we transform the array into index-value pairs using `Object.entries()`:

```javascript
Object.entries(array); // Returns: [ [0,1], [1,2], [2,3] ]
```

We can destructure the entries into `index` and `value`:

```javascript
const [index, value] = Object.entries(array);
```

Finally, we apply this to a for loop on the array:

```javascript
for (const [index, value] of Object.entries(array)) {
  console.log(index, value);
}
```

## Working with Objects

Now, let's create an object:

```javascript
const profile = {
  name: 'mahi',
  age: 18,
};
```

We transform the object into key-value pairs in an array using `Object.entries()`:

```javascript
Object.entries(profile); // Returns: [['name', 'mahi'], ['age', 18]]
```

We can destructure the entries from the array into `key` and `value`:

```javascript
const [key, value] = Object.entries(profile);
```

Finally, we apply this to a for loop on the object:

```javascript
for (const [key, value] of Object.entries(profile)) {
  console.log(key, value);
}
```