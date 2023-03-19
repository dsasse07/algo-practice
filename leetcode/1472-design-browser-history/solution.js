/*
1472. Design Browser History
You have a browser of one tab where you start on the homepage and you can visit another url, 
get back in the history number of steps or move forward in the history number of steps.

Implement the BrowserHistory class:
  - BrowserHistory(string homepage) Initializes the object with the homepage of the browser.
  - void visit(string url) Visits url from the current page. It clears up all the forward history.
  - string back(int steps) Move steps back in history. If you can only return x steps in the history and steps > x, you will return only x steps. Return the current url after moving back in history at most steps.
  - string forward(int steps) Move steps forward in history. If you can only forward x steps in the history and steps > x, you will forward only x steps. Return the current url after forwarding in history at most steps.

*/

// Stacks solution
class BrowserHistory {
  constructor(homepage) {
    this.backHistory = [homepage];
    this.forwardHistory = [];
  }
  
  visit(url) {
    this.backHistory.push(url)
    this.forwardHistory = []
  };

  back(steps) {
    let currentPos = this.backHistory.length - 1;
    let curStep = 0;
    let currentUrl = null;
    while (currentPos > 0 && curStep < steps)
    {
        curStep++
        currentUrl = this.backHistory.pop();
        currentPos--;
        this.forwardHistory.push(currentUrl)
    }
  
    return this.backHistory[currentPos]
  };

  forward(steps) {
    let currentPos = this.forwardHistory.length - 1;
    let curStep = 0;
    let currentUrl = null;
    while (currentPos >= 0 && curStep < steps)
    {
        curStep++
        currentUrl = this.forwardHistory.pop();
        currentPos--;
        this.backHistory.push(currentUrl)
    }
  
    return this.backHistory[this.backHistory.length - 1]
  };
};

// Double Linked List Method
class BrowserHistory2 {
  constructor(homepage) {
    const pageNode = new DoublyLinkedNode(homepage);
    this.history = new LinkedList(pageNode)
    this.currentNode = this.history.tail;
  }
  
  visit(url) {
    this.history.tail = this.currentNode;
    this.history.pushValue(url);
    this.currentNode = this.history.tail;
  };

  back(steps) {
      let stepCount = 0
      while (stepCount < steps && this.currentNode.prev)
      {

          this.currentNode = this.currentNode.prev;
          stepCount++
      }

      return this.currentNode.value;
  };

  forward(steps) {
      let stepCount = 0
      while (stepCount < steps && this.currentNode.next)
      {
          this.currentNode = this.currentNode.next;
          stepCount++
      }

      return this.currentNode.value;
  };
};

class LinkedList {
    constructor(head) {
        this.head = head;
        this.tail = head;
    }
    
    pushValue(value) {
        const newNode = new DoublyLinkedNode(value)
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

class DoublyLinkedNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


const a1 = ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
const v1 = [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
const test = (actionsArray, valuesArray) => {
  let browserHistory = null;
  let result = [];
  for (let i = 0; i < actionsArray.length; i++)
  {
    let value = valuesArray[i][0];
    let action = actionsArray[i];
    let output = null;
    switch (action)
    {
      case "BrowserHistory":
        browserHistory = new BrowserHistory2(value);
        break;
      case "visit":
        browserHistory.visit(value);
        break;
      case "back":
        output = browserHistory.back(value);
        break;
      case "forward":
        output = browserHistory.forward(value);
        break;
    }
    result.push(output);
  }
  console.log(result);
}

test(a1,v1)
