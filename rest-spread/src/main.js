//Example of Rest
function sum(...numbers) {
  return numbers.reduce((prev, current) => {
    return prev + current;
  });
}

console.log(sum(1,2,3,4,5,6,7,8,9));

//Example of Spread
function sumtwo(x,y) {
  return x + y;
}

let nums = [9,10]

console.log(sumtwo(...nums));
