const fs = require('fs');

let input = fs.readFileSync("input.txt", "utf-8");
mass = input.split("\n");
console.log('after calling readFile');

let fuelTotal = 0;

function fuelForModule(mod_mass) {
    let fuel = 0;
    let p = mod_mass, c = 0;
    while (p > 0){
        fuel += c;
        c = Math.floor(p/3) - 2;
        p = c;
    }

    return fuel;
}


for(var i=0; i<mass.length; i++) {
  fuelTotal += fuelForModule(mass[i]);
}

console.log("Total Fuel = ", fuelTotal);
