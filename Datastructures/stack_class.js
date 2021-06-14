
class Stack {
    constructor(){
        this.data = [];
    }

    push(item){
        this.data.push(item);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }

    isEmpty(){
        return this.data.length < 1;
    }
}

const stack = new Stack();
stack.push('A');
stack.push('B');
stack.push('C');
stack.push('X');
stack.push('Y');
stack.push('Z');
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());