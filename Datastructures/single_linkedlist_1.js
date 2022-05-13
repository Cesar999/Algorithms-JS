class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(val){
        const newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    traverse(){
        let currentNode = this.head;
        while(currentNode){
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }

    reverse(){
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = null;
        let current = temp;

        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

    }

    get(index){
        let current = this.head;
        let count = 0;
        while(current){
            if(index === count){
                return current.val;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    set(index, val){
        let current = this.head;
        let count = 0;
        while(current){
            if(index === count){
                current.val = val;
                return current.val;
            }
            current = current.next;
            count++;
        }
        return null;
    }

    remove(index){
        let current = this.head;
        let count = 0;
        let prev = null;
        while(current){
            if(index === count){
                prev.next = current.next;
            }
            prev = current;
            current = current.next;
            count++;
        }
    }

}

const list = new LinkedList();
list.add('A');
list.add('B');
list.add('C');
list.add('D');
list.traverse();
console.log('---');
console.log(list.get(2));
console.log('---');
list.set(2, 'W');
list.traverse();
console.log('---');
list.reverse();
list.traverse();
console.log('---');
list.reverse();
list.remove(2);
list.traverse();