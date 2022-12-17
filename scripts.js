class Node {
    constructor(value = null) {
        this.value = value;
        this.ref = null
    }
}

class LinkedList {
    constructor(head = new Node()) {
        this.head = new Node(head);
        this.tail = this.head;
        this.length = 1;
    }

    // Memasukan element di akhir (tail)
    append(value) {
        const newNode = new Node(value);
        this.tail.ref = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Memasukan element di awal (head)
    prepend(value) {
        const newNode = new Node(value);
        newNode.ref = this.head;
        this.head = newNode;
        this.length++
    }

    // melihat element pada index
    lookup(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.ref
            counter++;
        }
        return currentNode;
    }

    // memasukan data ke linkedlist
    insert(index, value) {
        let firstNode = this.lookup(index - 1);
        let secondNode = this.lookup(index);

        const newNode = new Node(value);
        firstNode.ref = newNode;
        newNode.ref = secondNode;
        this.length++;
    }

    // remove (menghapus data pada linkedlist)
    remove(index, value) {

        if (index === 0) {
            this.head = this.head.ref
        } else {
            let firstNode = this.lookup(index - 1);
            let unwantedNode = this.lookup(index);
    
            firstNode.ref = unwantedNode.ref;
        }

        this.length--;
    }

    reverse() {
        if (!this.head.ref) {
            return this.head;
        }

        let firstNode = this.head;
        this.tail = this.head;
        let secondNode = this.head.ref;

        while(secondNode) {
            const temp = secondNode.ref;
            secondNode.ref = firstNode;
            firstNode = secondNode;
            secondNode = temp;
        }
        this.head.ref = null;
        this.head = firstNode;
    }
}

class Stack {
    constructor(linkedListInstance) {
        this.linkedList = linkedListInstance;
    }

    peek() {
        return this.linkedList.head;
    }

    push(value) {
        this.linkedList.prepend(value);
        return this
    }

    pop() {
        this.linkedList.remove(0)
        return this;
    }
}


class ArrayStack {
    constructor() {
        this.array = []
    }

    peek() {
        return this.array.at(-1)
    }

    push(value) {
        return this.array.push(value)
    }

    pop() {
        return this.array.pop()
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = this.head;
        this.length = 0
    }

    add(value) {
        let newNode = new Node(value);

        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.ref = newNode;
            this.last = newNode;
        }
        this.length++
    }

    remove() {
        this.linkedList.remove()
    }

    peek() {

    }

}


let stack1 = new Stack(new LinkedList(0));
stack1.push(1)
stack1.push(2)
stack1.push(3)
stack1.pop()
console.log(stack1.peek())

let stack2 = new ArrayStack();
stack2.push(1)
stack2.push(2)
stack2.push(3)
stack2.pop()
console.log(stack2.peek())


let queue1 = new Queue()
queue1.add(0);
queue1.add(1);
queue1.add(2)
console.log(queue1)
