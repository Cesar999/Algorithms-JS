class Stack {
    constructor(){
        this.data = [];
    }

    add(val){
        return this.data.push(val);
    }

    remove(val){
        return this.data.pop(val);
    }

    top(){
        return this.data[this.data.length - 1];
    }

    bottom(){
        return this.data[0];
    }

    traverseFromTop(){
        for(let i=this.data.length-1; i>=0; i--){
            console.log(this.data[i]);
        }
    }

    traverseFromBottom(){
        for(let item of this.data){
            console.log(item);
        }
    }

    isEmpty(){
        return !this.data.length > 0;
    }

    size(){
        return this.data.length;
    }
}

const stack = new Stack();
stack.add('A');
stack.add('B');
stack.add('C');
stack.add('D');
stack.add('E');
stack.remove();
console.log(stack.top());
console.log(stack.bottom());
console.log('---');
stack.traverseFromTop();
console.log('---');
stack.traverseFromBottom();
console.log(stack.isEmpty());
console.log(stack.size());