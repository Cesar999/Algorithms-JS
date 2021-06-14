class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = this.head;
        let prev = null;
        let next = null;
        while(!this.head.next){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }

    set(index, val){
        if(index < 0 || index >= this.length){
            return null;
        }

        let count = 0;
        let current = this.head;

        while(count!==index){
            current = current.next;
            count++;
        }

        current.val = val;
        return current;
    }

    get(index){
        if(index < 0 || index > this.length){
            return null;
        }

        let count = 0;
        let current = this.head;

        while(count!==index){
            current = current.next;
            count++;
        }

        return current.val;
    }

}

const list = new SingleLinkedList();
list.push('A');
list.push('B');
list.push('C');
list.push('D');
//console.log(list.get(2));
//list.set(2, 'W');
list.traverse();
console.log('---');
// list.reverse();
// list.traverse();
