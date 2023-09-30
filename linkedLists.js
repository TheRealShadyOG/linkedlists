// Factory for link lists
const linkedList = () => {
  let head = null;

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
  };

  // Function to add new node to start of list
  const prepend = (value) => {
    // Create new node
    const newNode = node(value);
    // Replace head with new node
    newNode.next = head;
    head = newNode;
  };

  return {
    append,
    prepend,
  };
};

// Factory for node
const node = (value = null, next = null) => {
  return {
    value,
    next,
  };
};
