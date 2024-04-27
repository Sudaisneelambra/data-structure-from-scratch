class Hashtable{
    constructor(size){
        this.table = new Array(size)
        this.size=size
    }

    hash(key) {
        let total=0
        for (let i=0; i<key.length;i++) {
            total = total +key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value) {
        let index = this.hash(key)
        this.table[index]=value
    }

    get(key) {
        let index= this.hash(key)
        return this.table[index]
    }

    remove(key) {
        let index= this.hash(key)
        this.table[index]=undefined
    }

    print(){
        for (let i=0;i<this.table.length;i++) {
           if(this.table[i]){
            console.log(i, this.table[i]);
           }
        }
    }
}

const table = new Hashtable(50)

table.set('name','sudais')
table.set('age',21)
// table.set('mane','software')
table.print()
console.log(table.get('name'));