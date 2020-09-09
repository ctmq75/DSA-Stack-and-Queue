class _Node {
    constructor(data, next) {
      this.data = data;
      this.next = next;
    }
  }

  class Stack {
    constructor() {
      this.top = null;
    }

    push(data) {
      if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
      }

      const node = new _Node(data, this.top);
      this.top = node;
    }
    pop() {
      const node = this.top;
      this.top = node.next;
      return node.data;
    }
  }

  function peek(stack) {
    return stack.top;
  }
  function isEmpty(stack) {
    return stack.top === null ? true : false
  }
  function display(stack) {
    if (stack.top === null) {
      return
    }
    let _node = stack.top
    while (_node !== null) {
      console.log(_node)
      _node = _node.next
    }
  }


  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(starTrek);

  console.log(peek(starTrek));

  console.log(isEmpty(starTrek));

  console.log(display(starTrek));

  starTrek.pop();
  starTrek.pop();
  console.log(starTrek)


  function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack();
    for (let i = 0; i < s.length; i++) {
      stack.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== stack.top.data) {
        return false
      }
      stack.pop()
    }
    return true
  }

  console.log(is_palindrome('hannah'))

  function checkParentheses(exp) {
    let stack = new Stack();
    if (exp[0] === ')' || exp[exp.length - 1] === '(') {
      return false
    }
    for (let i = 0; i < exp.length; i++) {
      if (exp[i] === '(') {
        stack.push(exp[i])
      }
      else if (exp[i] === ')') {
        stack.pop()
      }
    }
    if (stack.top !== null) {
      // then there's a remainder
      return false
    }
    else {
      return true
    }
  }

  console.log(checkParentheses('(((())))'))
  console.log(checkParentheses('(((()))'))

  function sortStack(stack) {
    let sortedStack = new Stack();
    while (isEmpty(stack) === false) {
      let temp = stack.top;
      stack.pop()
      while (isEmpty(sortedStack) === false && sortedStack.top.data < temp.data) {
        stack.push(sortedStack.top.data)
        sortedStack.pop()
      }
      sortedStack.push(temp.data)
    }
    return sortedStack



  const numStack = new Stack()
  numStack.push(8)
  numStack.push(2)
  numStack.push(7)
  numStack.push(3)
  numStack.push(0)
  numStack.push(-1)
  numStack.push(10)
  console.log(display(sortStack(numStack)))
