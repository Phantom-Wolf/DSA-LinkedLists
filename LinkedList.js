const LinkedListHelpers = require("./LinkedListHelpers");

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(value) {
    this.head = new _Node(value, this.head);
  }

  insertLast(value) {
    if (this.head === null) {
      this.insertFirst(value);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(value, null);
    }
  }

  insertBefore(value, item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === value) {
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== value) {
      if (!currentNode.next) {
        return null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = new _Node(item, currentNode);
  }

  insertAfter(value, item) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.value !== value) {
      if (!currentNode.next) {
        return null;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = new _Node(item, currentNode.next);
    // We initialize the new node with the current pointer, then set the current point to the new node
  }

  insertAt(index, item) {
    if (index === 0) {
      return this.insertFirst(item);
    }

    let counter = 1;
    let currentNode = this.head.next;
    let previousNode = this.head;

    while (counter < index) {
      if (!currentNode.next) {
        return null;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }

    previousNode.next = new _Node(item, currentNode);
  }

  find(value) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the value
    while (currNode.value !== value) {
      /* Return null if it's the end of the list 
               and the value is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(value) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== value) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("value not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

function main() {
  const SLL = new LinkedList(); // intialize our linked list object

  SLL.insertLast("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");

  SLL.insertBefore("Boomer", "Athena");
  SLL.insertAfter("Helo", "Hotdog");
  SLL.insertAt(2, "kat");

  LinkedListHelpers.display(SLL);
  console.log("List size: " + LinkedListHelpers.size(SLL));
  console.log("Is the list empty? " + LinkedListHelpers.isEmpty(SLL));
  console.log("The node before Boomer is: " + LinkedListHelpers.findPrevious(SLL, "Boomer").value);
  console.log("The last item in my list is: " + LinkedListHelpers.findLast(SLL).value);

  console.log("third from end:", thirdFromEnd(SLL));
  console.log("middle:", findMiddle(SLL));
}
main();

// ***** 3rd from the End *****
function thirdFromEnd(list) {
  let length = LinkedListHelpers.size(list);

  return LinkedListHelpers.findByIndex(list, length - 3);
}

// ***** Middle of the List *****

function findMiddle(list) {
  if (!list.head) {
    return null;
  }

  let listRunOne = list.head;
  let listRunTwo = null;

  while (listRunOne) {
    listRunOne = listRunOne.next ? listRunOne.next.next : null;
    listRunTwo = listRunTwo ? listRunTwo.next : list.head;
  }

  return listRunTwo;
}

// ***** Cycle in a List *****

function isCycle(list) {
  if (!list.head) {
    return null;
  }

  let firstNode = list.head;
  let currentNode = list.head;
  while (firstNode.next !== null) {
    while (currentNode.next) {
      if (currentNode.next === firstNode) {
        return true;
      }
      currentNode = currentNode.next;
    }
    currentNode = firstNode.next;
    firstNode = firstNode.next;
  }
  return false;
}

// ***** Sorting a List *****

// still to be completed
