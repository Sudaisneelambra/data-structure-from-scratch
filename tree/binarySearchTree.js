class Node {
    constructor (value) {
        this.value= value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }

    isEmpty(){
        return this.root=== null
    }

    insert(value){
        const newNode= new Node(value)
        if(this.isEmpty()){
            this.root= newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(newNode.value<root.value) {
            if(root.left===null){
                root.left= newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right===null){
                root.right= newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if(!root) {
            return false
        }else {
            if(root.value===value) {
                return true
            } else if (value<root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}

const bst= new BinarySearchTree()

console.log('the three is Empty ? .',bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(47)
bst.insert(27)
bst.insert(49)
bst.insert(7)
bst.insert(1)

console.log(bst.search(bst.root,2));
console.log(bst.search(bst.root,21));
console.log(bst.search(bst.root,20));
console.log(bst.search(bst.root,10));
console.log(bst.search(bst.root,5));
console.log(bst.search(bst.root,17));
console.log(bst.search(bst.root,1));

bst.preOrder(bst.root)

