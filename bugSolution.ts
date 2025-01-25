function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20); // Correct: Both arguments are numbers.

let numString: string = "20";
let numFromString: number = parseInt(numString); 
let result2 = add(10, numFromString); // Correct: Parse the string into a number.