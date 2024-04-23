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

    // adding
    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    // printing
    print(){
        if(this.isEmpty()){
            console.log("list is empty")
        } else{
            let curr=this.head
            let value=' '
            while(curr){
                value = value + curr.value + ' '
                curr=curr.next
            }
            console.log(value);
        }
    }

    // append the value
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else{
            let prev= this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
}


const linkedlist = new LinkedList()

console.log(`checking the list is empty ? ${linkedlist.isEmpty()}` );
console.log(`checking size of list? ${linkedlist.Size()}` );
linkedlist.print()
linkedlist.prepend(10)
linkedlist.prepend(20)

linkedlist.print()

linkedlist.prepend(30)
linkedlist.prepend(40)
linkedlist.prepend(50)

linkedlist.print()

linkedlist.append(313)

linkedlist.print()



