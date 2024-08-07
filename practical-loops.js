// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// Part 2: Prime Time
let n = 3;

let gotPrimeNumber = false;

let i = n + 1;

while (!gotPrimeNumber) {
  let isPrimeNumber = true;
  if (i <= 1) {
    isPrimeNumber = false;
  } else {
    for (let k = 2; k < i; k++) {
      if (i % k === 0) {
        isPrimeNumber = false;
        break;
      }
    }
  }

  if (isPrimeNumber) {
    console.log(isPrimeNumber + " this is correct");
    console.log(i + " is a prime number");
    gotPrimeNumber = true;
  } else {
    console.log(isPrimeNumber + " this should be false correct");
    i++;
  }
}

// Part 3: Feeling Loopy
function parseCSV(csvFile) {
  let element = "";
  let rowElement = [];
  let rows = [];

  for (let i = 0; i < csvFile.length; i++) {
    if (csvFile[i] === ",") {
      rowElement.push(element);
      element = "";
    } else if (csvFile[i] === "\n") {
      rowElement.push(element);
      rows.push(rowElement);
      element = "";
      rowElement = [];
    } else {
      element += csvFile[i];
    }
  }
  if (element != "") {
    rowElement.push(element);
  }

  if (rowElement.length > 0) {
    rows.push(rowElement);
  }

  rows.forEach((row) => {
    console.log(row.join(","));
  });
}

let csvFile1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let csvFile2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

parseCSV(csvFile1);
parseCSV(csvFile2);



// These where some previous excercise we tried during class hours. 

for (let i = 1; i <= 3; i++) {
  let str = "";

  for (let j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
console.log("done");

function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

let ifEven = areBothEven(4, 5);

console.log(ifEven);

function computeArea(width, height) {
  let area = width * height;
  console.log(
    `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`
  );
}

computeArea(2, 6);

const planetHasWater = function (planet) {
  return planet === "Earth" || planet === "Mars";
};

console.log(planetHasWater("Earth"));
console.log(planetHasWater("Mars"));
console.log(planetHasWater("Venus"));

function getDevObject(name, ...skills) {
  return {
    devName: name,
    jobSkills: skills,
  };
}

let maria = getDevObject("Maria", "HTML", "CSS", "JavaScript", "jQuery");

console.log(maria);




