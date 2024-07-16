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

    levelOrder(){
        const queue=[]
        queue.push(this.root)  //[10],
 
        while(queue.length){
            let curr = queue.shift()  //10 [], 5 [47], 47 [1,7], 1 [7,27,49], 7 [27,49], 27 [49] , 49 []
            console.log(curr.value);  //10, 5, 47, 1,7,27,49
            if(curr.left){
                queue.push(curr.left) //[5], [47,1] ,[1,7,27],
            }
            if(curr.right){
                queue.push(curr.right) //[5,47], [47,1,7] ,[1,7,27,49]
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }
    

    max(root){
        if(!root.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }
}

                    //   10
                //  5        47
            //    1    7   27   49

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
console.log('-----------');
bst.levelOrder()
console.log('------------------');
console.log(bst.min(bst.root));
console.log('------------------');
console.log(bst.max(bst.root));


