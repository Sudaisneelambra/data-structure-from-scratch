class CircularQueue{
    constructor(capacity){
        this.items= new Array(capacity);
        this.capacity=capacity;
        this.currentlength=0
        this.rear=-1
        this.front=-1
    }

    // checking if queue is full or not
    isFull(){
        return this.currentlength===this.capacity
    }

    // checking if queue is empty or not
    isEmpty(){
        return this.currentlength===0
    }

    // adding element in to queue
    enqueue(element){
        if(!this.isFull()){
            this.rear=(this.rear+1)%this.capacity
            this.items[this.rear] = element
            this.currentlength=this.currentlength+1
            if(this.front===-1){
                this.front=this.rear
            }
        }
    }

    // removing element from queue
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const removed= this.items[this.front]
        this.items[this.front]=null
        this.front=(this.front+1)%this.capacity
        this.currentlength=this.currentlength-1
        if(this.isEmpty()){
            this.rear=-1
            this.front=-1
        }
        return removed
    }

    // print the elements of que
    print(){
        if(this.isEmpty()){
            return `queue is empty`;
        } else{
            let i
            let str =''
            for (i=this.front;i!==this.rear;i=(i+1)%this.capacity){
                str= str+this.items[i] + ' '
            }
            str= str+this.items[i]
            console.log(str);
        }
    }

    // getting first element
    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }
        return null
    }

    // getting size of queue
    size(){
        if(!this.isEmpty()){
            return this.currentlength
        }
        return null
    }
}

const curcularqueue= new CircularQueue(5)

curcularqueue.enqueue(3)
curcularqueue.enqueue(7)
curcularqueue.enqueue(10)


console.log(curcularqueue.isFull());
console.log(curcularqueue.isEmpty());
curcularqueue.print()

console.log(curcularqueue.dequeue());
curcularqueue.enqueue(5)

console.log(curcularqueue.size());

curcularqueue.print()
