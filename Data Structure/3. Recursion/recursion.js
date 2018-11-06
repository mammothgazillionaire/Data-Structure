//1. Write a function that loops through the numbers n down to 0.

function rec(n) 
{ 
console.log(n)
  if (n <= 0) return 
  	rec(--n);        
}

rec(10)

//2. Write a function countTo that takes one argument limit and prints number from 0 to limit

// function countTo(limit){
// 	console.log(limit);
// 	if(limit >= 0) return
// 		countTo(limit--);
// }

function countTo(from,to) 
{
  if (to - from === 2) 
  {
    return [from];
  } 
  else 
  {
    var limit = range(from, to - 1);
    limit.push(to - 1);
    return limit;
  }
};

console.log(countTo(2,9));



//3. Write a function 'exponent' that takes two arguments base, and expo,
//uses a while loop to return the exponenet value of the base.


function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

console.log( pow(2, 3) );



//4. Write a function factorial that take 1 argument 'number' and gives the factorial of the number.

function factorial(x) {
  if (x < 0) return;
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
factorial(3);


//5. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.




//6. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num'
// and multiplies each arr value into by num and returns an array of the values.


function recurisveMultiplier(arr,num){
	if(arr.length === 0){
		return arr;
	}
	var last = arr.pop();
	recursiveMultiplier(arr,num);
	arr.push(last*num);
	return arr;
}


// 7. Write a function 'recursiveReverse' that takes an array and uses recursion
// to return its contents in reverse

function reverseArray (toBeReversed){
  var reversed = [];

  function reverser (toBeReversed){
    if (toBeReversed.length !== 0){
      reversed.push( toBeReversed.pop() );
      reverser( toBeReversed );
    }
  }

  reverser(toBeReversed);
  return reversed;
}
undefined
reverseArray([2,3,4,5,6])