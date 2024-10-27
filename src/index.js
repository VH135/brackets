module.exports = function check(str, bracketsConfig) {
  // define type of brackets
  const brOpen = ["(", "{", "["];

  // define brackets pairs
  const brPairs = {
    [")"]: "(",
    ["}"]: "{",
    ["]"]: "["
  };

  // define an empty stack
  let stack = []

  // define current symbol
  for (let i = 0; i < str.length; i++) {
    let currBr = str[i];

    // same bracket check

    if (currBr === '|') {
      // If the stack is not empty and the top is '|', pop it
      if (stack.includes('|')) {
        stack.pop(); // Found a matching pair
      } else {
        stack.push(currBr); // Push the opening '|'
      }
    }


    // check the current symbol, is it open backet or not
    // is bracket in opening brackets array
    if (brOpen.includes(currBr)) {
      // add to stack
      stack.push(currBr);
    } else {
      // if stack is empty => false
      if (stack.length === 0) {
        return false;
      }
      // define the last or top element in the stack
      let lastBr = stack[stack.length - 1];
      // the main check
      // check is current element is equal to last element in the stack
      if (brPairs[currBr] === lastBr) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}