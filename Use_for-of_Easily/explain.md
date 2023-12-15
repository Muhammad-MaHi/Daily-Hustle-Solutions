### Use for loop on array effiienly 


#### Define the array first 
```javascript
    const array = [1, 2, 3]

```
#### then transform into intex and value pairs
```javascript
    Object.entries(array) // --> [ [0,1], [1,2], [2,3] ]
```

#### next distrucure the entries 
```javascript
    const [index, value] = object.entries(array)
```

#### let's apply this on for loop on array

```javascript
    for( const [index, value] of Object.entries(array)){
        console.log(index, value)
    } 
```