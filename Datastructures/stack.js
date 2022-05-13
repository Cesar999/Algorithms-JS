class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.size = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(this.bottom === null){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.size++;
    }

    pop(){
        this.top = this.top.next;
        this.size--;
    }

    traverse(){
        let current = this.top;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    
    getTop(){
        return this.top.val;
    }

    getBottom(){
        return this.bottom.val;
    }

    getSize(){
        return this.size;
    }

}

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('D');
stack.push('E');
stack.traverse();
console.log('---');
stack.pop();
stack.traverse();
console.log('---');
console.log(stack.getTop());
console.log(stack.getBottom());
console.log(stack.getSize());
