'use strict';

let readline = require('readline');

process.stdin.setEncoding('utf8');

let rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

let input = [];

rl.prompt();
rl.on('line', readLine);

function readLine(line) {

  if (line !== "\n") {
    input.push(line);
  }

  let inputs = input[0].toString().split(' ').map(number => parseInt(number, 10));
  console.log(gcdEuclideanRecursive(inputs[0], inputs[1]));
    
  process.exit();
      
}



//The first implementation, intentionally made slow
const gcdNaive = (a,b) => 
{
  
  let greater = Math.max(a,b);
  let best = 0;
  
  for(var i = 0 ; i <= greater; ++i )
  {
    if( a%i === 0 && b%i === 0 )
      best = i;
  }
  
  return best;

};

const gcdEuclideanRecursive = (a,b) =>
{
  if(b === 0)
    return a;
    
  return gcdEuclideanRecursive(b, a%b);
}

module.exports = {
    slow: gcdNaive,
    euclideanRecursive: gcdEuclideanRecursive

}
