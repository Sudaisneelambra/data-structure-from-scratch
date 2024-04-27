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
        const bucket = this.table[index]
        if (!bucket){
            this.table[index]=[[key,value]]
        } else {
            const sameKeyItem=bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            } else {
                bucket.push([key,value])
            }
        }
    }

    get(key) {
        let index= this.hash(key)
        const bucket = this.table[index]
        if (bucket){
            const wanted= bucket.find(item=>item[0]===key)
            if(wanted){
                return wanted[1]
            }
        }
        return undefined
    }

    remove(key) {
        let index= this.hash(key)
        const bucket = this.table[index]
        if (bucket){
            const samekey = bucket.find(item => item[0] === key);
            if(samekey){
                bucket.splice(bucket.indexOf(samekey),1)
            }
        }
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
table.set('mane','anuz')
table.set('age',21)
table.set('job','developer')
table.print()
console.log(table.get('name'));
table.remove('name')
table.print()
