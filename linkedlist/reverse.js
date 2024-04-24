// creating node for linkedlist
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // create the linkedlist
  class LinkedList {
    constructor(value) {
      this.head = null;
      this.size = 0;
    }
  
    // checking if it is empty of not
    isEmpty() {
      return this.size == 0;
    }
  
    // checking the size of linkedlist
    Size() {
      return this.size;
    }
  
    // adding
    prepend(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    insert(value, index) {
      if (index > this.size || index < 0) {
        console.log("invalid index");
        return;
      } else if (index === 0) {
        this.prepend(value);
      } else {
        const node = new Node(value);
        let prev = this.head;
  
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
      }
    }
  
    // removing
    removing(index) {
      if (index < 0 || index >= this.size) {
        return null;
      }
      let removedNode;
      if (index == 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removedNode = prev.next;
        prev.next = removedNode.next;
      }
      this.size--;
      return removedNode;
    }
  
    removingValue(value) {
      if (this.isEmpty()){
          console.log('the list is empty ,so u cant remove');
          return null
      } 
      if (this.head.value===value) {
          this.head=this.head.next
          this.size--
          return value
      } else {
          let prev = this.head
          while (prev.next && prev.next.value !==value) {
              prev= prev.next
          }
          if (prev.next) {
              let removed = prev.next
              prev.next= removed.next
              this.size--
              return value
          }
          console.log('you entered value is not include in the list');
          return null
      }
    }

    // searching the value from list
    search (value) {
        if (this.isEmpty()) {
            console.log('list is empty');
            return -1
        }
        let i=0
        let curr= this.head
        while (curr) {
            if (curr.value===value) {
                return i
            }
            curr = curr.next
            i++
        }
        console.log('enterd value not include in the list');
        return -1
    }
  
    // reverse th list
    // 10,20,30,40,null
    reverse(){
        let prev =null
        let curr = this.head  //10
        while (curr) {
            let next = curr.next  //20,30,40,null
            curr.next= prev //null,10,20,30
            prev =curr //10,20,30,40
            curr =next //20,30,40,null
        }
        this.head=prev
    }

    // printing
    print() {
      if (this.isEmpty()) {
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
  
    // append the value
    append(value) {
      const node = new Node(value);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let prev = this.head;
        while (prev.next) {
          prev = prev.next;
        }
        prev.next = node;
      }
      this.size++;
    }
  }
  
  const linkedlist = new LinkedList();
  
//   console.log(linkedlist.search(40));
//   linkedlist.print();
  linkedlist.prepend(30);
  linkedlist.prepend(20);
  linkedlist.append(40)
  linkedlist.print()
  linkedlist.reverse()
  linkedlist.print()

  