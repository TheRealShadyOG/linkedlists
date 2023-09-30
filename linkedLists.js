// Factory for link lists
const linkedList = () => {
  let head = null;
  // Function to add new node containing value to end of list
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

  return {
    append,
    show,
  };
};

// Factory for node
const node = (value = null, next = null) => {
  return {
    value,
    next,
  };
};
