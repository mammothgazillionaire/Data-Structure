// 1. Implement Stack Data Structure using string data type
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// push(value) - add a new value and returns the size of the storage
// pop() - remove one element and returns the deleted element
// peek() - displays the last pushed element in the storage
// size() - the size of the storage

class Stack {
  constructor(string) {
    this.string = string;
  }

push(value){
	this.string += `0${value}`;
	return this.string;
	}
}

var stack = new Stack("abcdef");

stack.push("qwerty");
stack.push("adsaas");


Stack.prototype.pop = function() {
	let i = this.string.lastIndexOf('0');
	let delValue = this.string.slice(i);
	this.string = this.string.substr(0, i);
	return delValue;
}
stack.pop()


Stack.prototype.peek = function() {
	let i = this.string.lastIndexOf('0');
	return this.string.substr(i);
}

stack.push("aaaaa");
stack.push("gggg");


stack.peek()

Stack.prototype.size = function() {
	let zeroCount = 0;
	for(let i = 0; i <= this.string.length ; i++){
		if(String(this.storage[i]).includes('0')){
			zeroCount++;
		}
	}
	return zeroCount;
}

stack.size()

// 2. Implement every method given above using the 'object' data type.
// Additionals:
// Modify your stack to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"


// Make a method named 'contains' which will return true if any of the value matches the value of object.
// stack.contains('hello') - true or false

// Write a method named sort() which sorts by value


// Use This For Testing

class ObjectStack {
  constructor(size) {
    this.size = size;  
    this.len = Object.keys(this).length;
  }  

  isEmpty() {
    if(this.len - 1 === 0) {
      return true;
    } else {
      return false;
    }
  }
 }

// var myStack = new Stack(3);
// console.log(myStack.isEmpty()) // true

ObjectStack.prototype.push = function (value) {
	if(Object.keys(this).length - 1 > this.size ){
		return "stack is full";
	}
	this[this.len] = value;
	let returnValue = this[this.len];
	this.len++ ;
	return returnValue;
}

// console.log(myStack.push('a'), 'should be 1');
// console.log(myStack.push('b'), 'should be 2');
// console.log(myStack.push('c'), 'should be 3');
// console.log(myStack.push('d'), 'Max capacity already reached');

ObjectStack.prototype.pop = function () {
	let value = this[this.len - 1];	
	delete this[this.len - 1];
	this.len++
	return value;
}
// console.log(myStack.pop(), 'should be c');


// console.log(myStack.size(), 'should be 2');

ObjectStack.prototype.peek = function () {
	return this[this.len - 1];
}



// console.log(myStack.peek(), 'should be b');


3
ObjectStack.prototype.size = function () {
	return this.len - 1;;
}

// console.log(myStack.size(), 'should be 2');


