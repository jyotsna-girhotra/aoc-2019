const fs = require('fs');

let input = fs.readFileSync("input.txt", "utf-8");
mass = input.split("\n");
console.log('after calling readFile');

let total = 0;

for(var i=0; i<mass.length; i++) {
    fuelTotal += Math.floor(mass[i]/3) - 2;
}
console.log ("mass length =" , mass.length);
console.log("Total Fuel = ", fuelTotal);
