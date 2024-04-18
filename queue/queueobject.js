class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }

    // adding element to queue
    enqueue(element){
        this.items[this.rear]=element
        this.rear++
    }

    // removing element from queue
    dequeue(){
        const deleted= this.items[this.front]
        delete this.items[this.front]
        this.front++
        return deleted
    }

    isEmpty(){
      return this.rear-this.front===0
    }

    size(){
        return this.rear-this.front
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items)
    }
}

// creating new instance of queue
const newqueue = new Queue()

// checking if the queue is empty or not
console.log(`Checking the queue is empty or not is "${newqueue.isEmpty()}"`);

// adding elements in to queue
newqueue.enqueue(10)
newqueue.enqueue(20)
newqueue.enqueue(30)

// printing the queue values
newqueue.print()

// deleting the queue values
console.log(`deteting element is "${newqueue.dequeue()}"`);

// printing the queue values
newqueue.print()

// checking if the queue is empty or not
console.log(`Checking the queue is empty or not is "${newqueue.isEmpty()}"`);

// couting the queue size
console.log(`The size of the queue is ${newqueue.size()}`)

// finding the peek
console.log(newqueue.peek());