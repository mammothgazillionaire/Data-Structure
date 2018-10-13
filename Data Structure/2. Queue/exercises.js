// 1. Implement Queue Data Structure using String
// Operations you need to add are
// isEmpty() - returns true if the storage is empty
// enqueue(value) - add a new value and returns the size of the storage
// dequeue() - remove one element and returns the deleted element
// peek() - displays the latest element in the storage
// size() - the size of the storage

//class Queue {
//  constructor() {
//  }
//  isEmpty() {
//  }
//  enqueue(value) {
//  }
//  dequeue() {
//  }
//  peek() {
//  }
//  size() {
//  }
//}


class Queue {
	constructor(string) {
		this.string = string;
    }
		isEmpty() {
			if(this.string.length === 0){
				return true;
			}else {
				return false;
			}
		}
	}

// let queue = new Queue('');

// queue.isEmpty();


Queue.prototype.enqueue = function(value){
	let addVal = `${value}0`;
	let newString = `${addVal}${this.string}`;
	this.string = newString;
	return this.string ;
}

// queue.enqueue("world");
// queue.enqueue("new");


Queue.prototype.dequeue = function(){
	let i = this.string.lastIndexOf('0');
	let delVal = this.string.substr(i);
	this.string = this.string.substr(0, i); 
	return delVal ;
}

// queue.dequeue();

Queue.prototype.peek = function(){
	return this.string.substr(0,this.string.lastIndexOf('0'));
}


// queue.peek();


Queue.prototype.size = function(){
	let zeroCount = 0 ;
	for(var i = 0 ; i < this.string.length ; i++){
	if(String(this.string[i]).includes('0')){
			zeroCount++;
		}
	}
	return zeroCount;
}

// queue.size();


// Implement all above methods using Object data type

class ObjectQueue {
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

// var queue = new ObjectQueue('');

// queue.isEmpty();

// Additionals:
// Modify your queue to take max capacity as a parameter and once you exceed the size it should print message
// "Max capacity already reached"

ObjectQueue.prototype.enqueue = function(value){
	if(Object.keys(this).length - 1 > this.size ){
		return "stack is full";
	}
	this[this.len] = value;
	let returnValue = this[this.len];
	this.len++ ;
	return returnValue;
}




ObjectQueue.prototype.dequeue = function () {
	
}


ObjectQueue.prototype.peek = function () {
	return this[this.len - 1];
}

// queue.peek();

ObjectQueue.prototype.size = function () {
	return this.len - 1;;
}

// queue.size();

// Make a method named 'contains' which will return true if any of the value matches the value of object.
// queue.contains('hello') - true or false

// Write a method named sort() which sorts by value

