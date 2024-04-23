// creating node for linkedlist
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

// create the linkedlist
class LinkedList {
    constructor(value){
        this.head=null
        this.size=0
    }

    // checking if it is empty of not
    isEmpty(){
        return this.size==0
    }

    // checking the size of linkedlist
    Size(){
        return this.size
    }
}


const linkedlist = new LinkedList()

console.log(`checking the list is empty ? ${linkedlist.isEmpty()}` );
console.log(`checking size of list? ${linkedlist.Size()}` );

