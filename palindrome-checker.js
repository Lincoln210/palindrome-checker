function palindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let stack = [];
  let queue = [];

  // populate stack and queue
  for (let char of cleanedStr) {
    stack.push(char);
    queue.push(char);
  }

  // compare characters from the end and beginning
  while (stack.length > 0) {
    if (stack.pop() !== queue.shift()) {
      return false;
    }
  }

  return true;
}

console.log(palindrome("eye"))