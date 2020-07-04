class SingleNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.lenght = 1;
  }
  append(value) {
    const node = new SingleNode(value);
    (this.tail.next = node), (this.tail = node), this.lenght++;
  }
  prepend(value) {
    const node = new SingleNode(value);
    (node.next = this.head), (this.head = node), this.lenght++;
  }
  showMyList() {
    let print = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      print.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(print);
  }
  findMeByIndex(index) {
    let element = this.head;
    let counter = 0;
    while (counter < index) {
      element = element.next;
      counter++;
    }
    return element;
  }
  insert(index, value) {
    let previousElement = this.findMeByIndex(index - 1);
    let currentElementPointer = previousElement.next;

    let newNode = new SingleNode(value);

    previousElement.next = newNode;
    newNode.next = currentElementPointer;
    this.lenght++;
  }
  removeHead() {
    this.head = this.head.next;
    this.lenght--;
  }
  remove(position) {
    let lastNode = this.lenght - 1;

    if (position < 1) return this.removeHead();
    if (position >= lastNode) position = lastNode;

    let prevElem = this.findMeByIndex(position - 1);
    prevElem.next = prevElem.next.next;

    this.lenght--;
  }
}

const myList = new LinkedList(10);

myList.append(400);
myList.append(16);
// myList.append(30);
// myList.prepend(1);
myList.prepend(50);
// myList.findMeByIndex(3);
myList.insert(1, 1000);
// myList.insert(4, 5400);
myList.remove(0);
// myList.remove(10);
// myList.remove(10);

myList.showMyList();
console.log(myList);
