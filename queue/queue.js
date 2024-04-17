class Queue{
   constructor(){
    this.item=[]
   } 

   // adding the element
   enqueue(element){
    this.item.push(element)
   }

   //removing from the queue
   dequeue(){
    return this.item.shift()
   }
   
   //check it is empty or not
   isEmpty(){
    return this.item.length==0
   }

    //get the size of the queue
   size(){
    return this.item.length
   }
   
   //get the first element
   peek(){
       if(!this.isEmpty()){
           return this.item[0]
        }
        else{
            return null
        }
    }
    
    // printing the all elements
    print(){
        console.log(this.item.toString())
    }
}

const queue=new Queue()



queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.isEmpty());
console.log(queue.size());
queue.print()
console.log(queue.peek());
console.log(queue.dequeue());
queue.print()
console.log(queue.peek());