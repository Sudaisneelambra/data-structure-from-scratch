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

    insert(value, index) {
        if(index>this.size || index< 0){
            console.log('invalid index');
            return
        } else if (index ===0){
            this.prepend(value)
        } else{
            const node = new Node(value)
            let prev = this.head

            for(let i =0; i<index-1;i++){
                prev= prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
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

    // removing
    removing(index){
        if(index<0 || index>=this.size) {
            return null
        } 
        let removedNode
        if (index==0){
            removedNode=this.head
            this.head=this.head.next
        } else{
            let prev = this.head
            for (let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode

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
linkedlist.prepend(30)
linkedlist.prepend(20)
linkedlist.prepend(10)
linkedlist.append(40)
linkedlist.append(50)
linkedlist.print()
linkedlist.insert(5,0)
linkedlist.print()
linkedlist.insert(45,5)
linkedlist.print()
console.log(linkedlist.Size());

console.log(linkedlist.removing(9));
linkedlist.removing(0)
linkedlist.print()
console.log(linkedlist.Size());
linkedlist.removing(3)
linkedlist.print()
console.log(linkedlist.Size());



