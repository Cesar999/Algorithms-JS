class Node {
    constructor(val){
        this.value = val;
        this.prev = null;
    }
}

class Stack {
    constructor(){
        this.bottomNode = null;
        this.topNode = null;
        this.length = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.bottomNode){
            this.bottomNode = newNode;
            this.topNode = newNode;
        } else {
            newNode.prev = this.topNode;
            this.topNode = newNode;
        }
        this.length++;
        return newNode.value;
    }

    pop(){
        if(!this.bottomNode){
            return null;
        }
        const prevTopNode = this.topNode;
        if(this.bottomNode === this.topNode) {
            this.bottomNode = null;
        }
        this.topNode = this.topNode.prev;
        this.length--;
        return prevTopNode.value;
    }

    
    top(){
        return this.topNode.value;
    }

    bottom(){
        return this.bottomNode.value;
    }

    size(){
        return this.length;
    }

}

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('X');
stack.push('Y');
stack.push('Z');
console.log(stack.top());
console.log(stack.bottom());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.top());
console.log(stack.bottom());
console.log(stack.size());