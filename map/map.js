const map = new Map([['a',1],['b',6]])

// ad the new value using set method
map.set('c',5)

// check the key exist
console.log(map.has('a'));

// delete key values
map.delete('b')

// find the size
console.log(`size of the map is ${map.size}`);

// delete all 
map.clear()

for (const [key,value] of map){
    console.log(`${key}: ${value}`);
}