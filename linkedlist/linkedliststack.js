class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linkedlists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  IsEmpty() {
    return this.size === 0;
  }

  Size() {
    return this.size;
  }

  // printing
  print() {
    if (this.IsEmpty()) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let value = " ";
      while (curr) {
        value = value + curr.value + " ";
        curr = curr.next;
      }
      console.log(value);
    }
  }

  prepend(value) {
    const node = new Node(value);
    if (this.IsEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.IsEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront(){
    if (this.IsEmpty()) {
        return null
    } else {
        const removed = this.head.value
        this.head= this.head.next
        this.size--
        return removed
    }
  }

  removeFromtheEnd() {
    if (this.IsEmpty()) {
      return null;
    } else {
      const removed = this.tail.value;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        let prev = this.head;
        while (prev.next !== this.tail) {
          prev = prev.next;
        }
        this.tail = prev;
        this.tail.next = null;
      }
      this.size--;
      return removed;
    }
  }
}


class LinkedlistStack {
  constructor() {
    this.list = new Linkedlists();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromtheEnd();
  }

  peek() {
    return this.list.head.value;
  }

  Isempty() {
    return this.list.IsEmpty();
  }

  Size() {
   return this.list.Size();
  }

  Print() {
    this.list.print();
  }
}

const stack = new LinkedlistStack();

console.log(stack.Size());
console.log(stack.Isempty());
stack.Print()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.Size());
stack.Print()
console.log(stack.peek());
console.log(stack.pop());


