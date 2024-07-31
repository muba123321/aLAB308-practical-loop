for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if ( i % 3 === 0  ) {
    console.log("Fizz")
  } else {
    console.log(i);
  }
}

let n = 4
//check if n is Prime
if(n === 2 || n === 3) {
  console.log(n + " is prime");
} else {
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if(n % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(n + " is prime")
  } else {
    console.log(n + " is not prime")
  }
}


// for (let i = 3;  i % 1 === 0 && i % i === 0;  i++) { 
//     if (i % 1 === 0 && i % i === 0 ) {
//         console.log(i);
      
//     }

// }



