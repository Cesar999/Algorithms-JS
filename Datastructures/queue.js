class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.firstNode = null;
        this.lastNode = null;
        this.length = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(!this.firstNode){
            this.firstNode = newNode;
            this.lastNode = newNode;
        } else {
            this.lastNode.next = newNode;
            this.lastNode = newNode;
        }
        this.length++;
        return newNode.val;
    }

    dequeue(){
        if(!this.firstNode){
            return null;
        }
        const prevFirstNode = this.firstNode;
        if(this.firstNode === this.lastNode){
            this.lastNode = null;
        }
        this.firstNode = this.firstNode.next;
        this.length--;
        return prevFirstNode.value;
    }

    first(){
        return this.firstNode.value;
    }

    last(){
        return this.lastNode.value;
    }

    size(){
        return this.length;
    }

}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('X');
queue.enqueue('Y');
queue.enqueue('Z');
console.log(queue.first());
console.log(queue.last());
console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.first());
console.log(queue.last());
console.log(queue.size());