class Queue {
    constructor(){
        this.data = [];
        this.length = 0;
    }
    isEmpty(){
        if(this.length===0) return true;
        return false;
    }
    enqueue(node){
        this.length++;
        this.data.push(node);
    }
    dequeue(){
        this.length--;
        return this.data.shift();
    }
}

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(value=0){
        this.root = new Node(value);
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return newNode;
        }

        let current = this.root;

        while(true){
            if(value <= current.value){
                if(!current.left){
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(value > current.value){
                if(!current.right){
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }

    }

    find(value){
        let current = this.root;
        while(current){
            if(value > current.value){
                current = current.right;
            } else if(value < current.value) {
                current = current.left;
            } else {
                return current.value;
            }
        }
        return -1;
    }

    dfs(opt='in-order'){
        const data = [];
        _dfs(this.root);
        console.log(data, 'dfs');
        return data;

        function _dfs(node){
            if(opt=='pre-order'){
                data.push(node.value);
                if(node.left) _dfs(node.left);
                if(node.right) _dfs(node.right);
            } else if(opt === 'post-order'){
                if(node.left) _dfs(node.left);
                if(node.right) _dfs(node.right);
                data.push(node.value);
            } else {
                if(node.left) _dfs(node.left);
                data.push(node.value);
                if(node.right) _dfs(node.right);
            }
        }
    }

    bfs(){
        let data = [];
        let queue = new Queue();
        let current = this.root;
        queue.enqueue(current);
        while(!queue.isEmpty()){
            current = queue.dequeue();
            if(current!=null){
                data.push(current.value);

                if(current.left){
                    queue.enqueue(current.left);
                } else{
                    queue.enqueue(null);
                }

                if(current.right){
                    queue.enqueue(current.right);
                } else {
                    queue.enqueue(null);
                }
            } else {
               //data.push(null);
            }
        }
        console.log(data, 'bfs');
        return data;
    }

}

const tree = new BinarySearchTree(18);
tree.insert(14);
tree.insert(12);
tree.insert(16);
tree.insert(22);
tree.insert(20);
tree.insert(24);
tree.insert(17);
tree.insert(17);
tree.insert(17);

tree.dfs();
console.log(tree.find(17));
tree.bfs();