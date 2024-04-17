// in this object have an function , function calls 'this.name'. there the this is pointing to the 'obj' object.

const obj={
    name:"suadis",
    age:25,
    'key-three':true,
    saymyname:function(){
        console.log(`my name is ${this.name}`);
    }

}

// adding the new value to the object
obj.hobby="football"

// deleteing the keyvalue pair from the object
delete obj.hobby

console.log(obj);
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);

// calling the function in the object .
obj.saymyname()

// object.keys() .values() .entries()
