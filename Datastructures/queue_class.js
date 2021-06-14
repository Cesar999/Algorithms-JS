class Queue {

    constructor(){
        this.data = [];
    }

    enqueue(item){
        this.data.push(item);
    }

    dequeue(){
        return this.data.shift();
    }

    peek(){
        return this.data[0];
    }

    isEmpty(){
        return this.data.length < 1;
    }

}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('X');
queue.enqueue('Y');
queue.enqueue('Z');
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());