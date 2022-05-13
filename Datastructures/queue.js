class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){
        const newNode = new Node(val);
        if(this.first === null){
            this.first = newNode;
            this.last = newNode;
        } else {
            newNode.next = this.last;
            this.last = newNode;
        }
        this.size++;
    }

    dequeue(){
        let current = this.last;
        let next = current.next;
        while(next.next){
            current = current.next;
            next = current.next;
        }  
        current.next = null;
        this.first = current;
        this.size--;
    }

    traverse(){
        let current = this.last;
        while(current){
            console.log(current.val);
            current = current.next;
        }  
    }

    getSize(){
        return this.size;
    }

    getFirst(){
        return this.first.val;
    }

    getLast(){
        return this.last.val;
    }

}

const queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');
queue.enqueue('D');
queue.enqueue('E');
queue.traverse();
console.log('---');
queue.dequeue();
queue.traverse();
console.log('---');
console.log(queue.getFirst());
console.log(queue.getLast());
console.log(queue.getSize());