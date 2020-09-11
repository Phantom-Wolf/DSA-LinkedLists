const linkedListHelpers = {
    display: function (list) { // O(n) linear
      if (!list.head) {return console.log('The list is empty')}
  
      let currentNode = list.head;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    },
    size: function(list) { // O(n) linear time
      let counter = 0;
      let currentNode = list.head;
      while (currentNode) {
        counter++;
        currentNode = currentNode.next;
      }
      return counter;
    },
    isEmpty: function(list) { // O(1) constant time
      if (!list.head) {return true}
      return false;
    },
    findPrevious: function(list, value) { // O(n) linear
      if (!list.head) {return null} // If the list is empty
  
      let currentNode = list.head;
      let previousNode = list.head
      while(currentNode.value !== value) {
        if (!currentNode.next) {return null} // If we reach the end of the list without finding the value
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
  
      return previousNode;
    },
    findLast: function(list) { // O(n) linear
      if (!list.head) {return null} // If the list is empty
  
      let currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      return currentNode;
    },
    findByIndex: function(list, index) {
      if (!list.head) {return null}
      let counter = 0;
      let currentNode = list.head;
      while (counter < index) {
        if (!currentNode.next) {return null} // If the index does not exist in our list
        currentNode = currentNode.next;
        counter++;
      }
  
      return currentNode;
    }
  }

  module.exports = linkedListHelpers