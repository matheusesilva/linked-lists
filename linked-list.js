class LinkedList {
  constructor() {
    this.firstNode = null;
  }
  append(value) {
    if (this.firstNode === null) {
      this.firstNode = new Node(value);
      console.log(`${value} added`);
    } else {
      let currentNode = this.firstNode;
      while (currentNode.following !== null) {
        currentNode = currentNode.following;
      }
      currentNode.following = new Node(value);
      console.log(`${value} added`);
    }
  }
  prepend(value) {
    const oldfirstNode = this.firstNode;
    this.firstNode = new Node(value);
    this.firstNode.following = oldfirstNode;
    console.log(`${value} added`);
  }
  size() {
    if (this.firstNode === null) {
      return null;
    }
    let counter = 1;
    let currentNode = this.firstNode;
    while (currentNode.following !== null) {
      counter++;
      currentNode = currentNode.following;
    }
    return counter;
  }
  head() {
    return this.firstNode.data;
  }
  tail() {
    let currentNode = this.firstNode;
    while (currentNode.following !== null) {
      currentNode = currentNode.following;
    }
    return currentNode.data;
  }
  atIndex(index) {
    if (index > this.size() - 1) {
      return undefined;
    }
    let currentNode = this.firstNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.following;
    }
    return currentNode.data;
  }
  pop() {
    if (this.size() === 1) {
      this.firstNode = null;
      return;
    }
    let currentNode = this.firstNode;
    while (currentNode.following.following !== null) {
      currentNode = currentNode.following;
    }
    currentNode.following = null;
  }
  contains(value) {
    let currentNode = this.firstNode;
    while (currentNode.data !== value && currentNode.following !== null) {
      currentNode = currentNode.following;
    }
    if (currentNode.data === value) {
      return true;
    }
    return false;
  }
  find(value) {
    let currentNode = this.firstNode;
    let index = 0;
    while (currentNode.data !== value && currentNode.following !== null) {
      currentNode = currentNode.following;
      index++;
    }
    if (currentNode.data === value) {
      return index;
    }
    return null;
  }
  toString() {
    if (this.firstNode === null) {
      return null;
    }
    let string = `(${this.firstNode.data}) -> `;
    let currentNode = this.firstNode;
    while (currentNode.following !== null) {
      currentNode = currentNode.following;
      string += `(${currentNode.data}) -> `;
    }
    string += "null";
    return string;
  }
  insertAt(value, index) {
    let currentNode = this.firstNode;
    let pointer = 0;
    while (pointer !== index - 1) {
      currentNode = currentNode.following;
      pointer++;
    }
    const newNodeFollowing = currentNode.following;
    currentNode.following = new Node(value);
    currentNode.following.following = newNodeFollowing;
    console.log(`${value} added at index ${index}`);
  }
  removeAt(index) {
    let currentNode = this.firstNode;
    let pointer = 0;
    while (pointer !== index - 1) {
      currentNode = currentNode.following;
      pointer++;
    }
    console.log(`${currentNode.following.data} removed from index ${index}`);
    currentNode.following = currentNode.following.following;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  set following(node) {
    this.next = node;
  }
  get following() {
    return this.next;
  }
}

// const list = new LinkedList();
// list.append("house");
// list.append("ship");
// list.append("car");
// list.prepend("bike");
// console.log(list.toString());
// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.atIndex(3));
// list.pop();
// console.log(list.toString());
// console.log(list.contains("bicycle"));
// console.log(list.find("bob"));
// list.insertAt("airplane", 2);
// console.log(list.toString());
// list.removeAt(2);
// console.log(list.toString());
