// Factory for link lists
const linkedList = () => {
  let head = null;
  let size = 0;

  // Function to add new node to end of list
  const append = (value) => {
    // Create new node
    const newNode = node(value);
    // If list doesnt have head, make node head
    if (head === null) {
      head = newNode;
    } else {
      // Store head
      let current = head;
      // Loop until current last node
      while (current.next) {
        current = current.next;
      }
      // Append node to last place
      current.next = newNode;
    }
    // Increase list size by 1
    size += 1;
  };

  // Function to add new node to start of list
  const prepend = (value) => {
    // Create new node
    const newNode = node(value);
    // Replace head with new node
    newNode.next = head;
    head = newNode;
    // Increase list size by 1
    size += 1;
  };

  // Return size of list
  const getSize = () => {
    return size;
  };

  // Return head of list
  const getHead = () => {
    return head;
  };

  // Return tail of list
  const getTail = () => {
    // Variables for tail and current node
    let tail;
    let current = head;
    // Loop over list
    while (current.next) {
      // Replace tail with next node in list
      tail = current.next;
      current = current.next;
    }
    return tail;
  };

  // Return node at given index
  const atIndex = (index) => {
    let current = head;
    if (index < 0 || index > size - 1) {
      console.log('Invalid Index');
      return;
    }
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  };

  // Remove last element from list
  const pop = () => {
    let current = head;
    // Loop until at second to last item
    while (current.next.next) {
      current = current.next;
    }
    // Erase last item in list
    current.next = null;
    // Reduce size by 1
    size -= 1;
  };

  // Return true if list has value passed otherwise false
  const contains = (value) => {
    let current = head;
    // Loop over list
    for (let i = 0; i < size; i++) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  };

  // Return index of node containing value, null if not found
  const find = (value) => {
    let current = head;
    // Loop over list
    for (let i = 0; i < size; i++) {
      if (current.value === value) {
        return i;
      } else {
        current = current.next;
      }
    }
    return null;
  };

  // Represent linkedList object as a string
  const toString = () => {
    let current = head;
    let string = '';
    // Loop over list
    for (let i = 0; i < size; i++) {
      string += `( ${current.value} ) -> `;
      current = current.next;
    }
    string += 'null';
    return string;
  };

  // Insert new node at given index
  const insertAt = (value, index) => {
    // Create new node
    const newNode = node(value);
    let current = head;
    // Error if invalid index
    if (index < 0 || index > size - 1) {
      console.log('Invalid Index');
      return;
    }
    // If index === 0 replace head with new node
    if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      // Loop over list until at index
      let previous;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      // Previous.next becomes newNode, newNode.next becomes current at index
      previous.next = newNode;
      newNode.next = current;
    }

    // Increase list size by 1
    size += 1;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    atIndex,
    pop,
    contains,
    find,
    toString,
    insertAt,
  };
};

// Factory for node
const node = (value = null, next = null) => {
  return {
    value,
    next,
  };
};
