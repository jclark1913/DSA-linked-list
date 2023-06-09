/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // Check if empty
    // New node w/ next as null
    // update head + tail
    // If not empty
    // New node w/ next as null
    // Update tail
    // Run thru list to update previous node's next attr

    // increment length

    let newNode = new Node(val);
    if (this.length < 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.length < 1) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    // find and remove tail
    // set tail to previous node
    // decrement length

    if (this.length < 1) {
      return undefined;
    }
    
    const poppedVal = this.tail.val;
    let current = this.head;

    while (current !== null) {
      if (current.next === this.tail) {
        this.tail = current;
        current.next = null;
        this.length--;
      }
      current = current.next;
    }
    return poppedVal;
  }

  /** shift(): return & remove first item. */

  shift() {

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
