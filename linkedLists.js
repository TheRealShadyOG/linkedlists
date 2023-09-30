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

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
  };
};

// Factory for node
const node = (value = null, next = null) => {
  return {
    value,
    next,
  };
};
