class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(val){
        this.root = new Node(val);
    }

    insert(val){
        const newNode = new Node(val);
        let current = this.root;
        let parent = null;

        while(current){
            parent = current;
            if(newNode.val <= current.val){
                current = current.left;
            } else if (newNode.val > current.val){
                current = current.right;
            }
        }

        if(newNode.val < parent.val){
            parent.left = newNode;
        } else if (newNode.val > parent.val){
            parent.right = newNode;
        }

    }

    traverse(opt='in-order'){
        const data = [];
        _dfs(this.root);
        console.log(data, opt);
        return data;

        function _dfs(node){
            if(opt === 'pre-order'){
                data.push(node.val);
                if(node.left) _dfs(node.left);
                if(node.right) _dfs(node.right);
            } else if(opt === 'post-order'){
                if(node.left) _dfs(node.left);
                if(node.right) _dfs(node.right);
                data.push(node.val);
            } else {
                if(node.left) _dfs(node.left);
                data.push(node.val);
                if(node.right) _dfs(node.right);
            }
        }
    }

    find(val){
        let current = this.root;
        while(current){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

}

const tree = new BinarySearchTree(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);
tree.insert(8);
tree.insert(0);
tree.traverse();
console.log(tree.find(0));
console.log(tree.find(11));
//tree.traverse('pre-order');
//tree.traverse('post-order');
//        4
//    2       6  
//  1   3   5   7
   