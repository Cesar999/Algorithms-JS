class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b)=>a.priority-b.priority);
    }

}

const pq = new PriorityQueue();
pq.enqueue("A",9);
pq.enqueue("B",1);
pq.enqueue("C",5);
pq.enqueue("W",0);
pq.enqueue("X",15);
pq.enqueue("Y",30);
pq.enqueue("Z",25);
pq.dequeue();

console.log(pq.values);