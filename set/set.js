const set = new Set([1,2,3])

// add the element
set.add(4)

// trying to add duplicate element
set.add(3) // it is not posssible because set not accept duplicate values

// delete in set 
set.delete(4)  //it deleting that element

// deleteting not included element
set.delete(7) // no affect the set

// checking has on set value
console.log(set.has(4)); // if 4 is include in the set it returns true , but even the 4 is not include in the set the console returns false

// ceck the size of set 
console.log(`the size of set is ${set.size}`);  //it returns the size of the set

// clear the all set
set.clear() //it clear the set's values

for (const item of set){
    console.log(item);
}