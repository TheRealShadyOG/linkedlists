// Factory for link lists
const linkedList = () => {};

// Factory for node
const node = (value = null, nextNode = null) => {
  return {
    value,
    nextNode,
  };
};
