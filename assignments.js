'use strict';
// 1
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}
const country1 = describeCountry("Brazil", 250, "Brasília");
const country2 = describeCountry("Japan", 125, "Tokyo");
const country3 = describeCountry("Germany", 84, "Berlin");

// 2
// Declaration:
function percentageOfWorld1(population) {
    return (population / 7900 * 100);
}
const exemplo1 = percentageOfWorld1(1441);
console.log(`${exemplo1}%`)
// Expression:
const percentageOfWorld2 = function (population) {
    return (population / 7900 * 100);
}
const exemplo2 = percentageOfWorld2(255);
console.log(`${exemplo2}%`)

// 3
const percentageOfWorld3 = population => (population / 7900 * 100);
const exemplo3 = percentageOfWorld3(42);
console.log(`${exemplo3}%`);

// 4
const describePopulation = (country, population) => {
    console.log(`${country} has a ${population} which is ${percentageOfWorld1(population)}% of the world.`)
}
describePopulation("Brazil", 250);
describePopulation("China", 1441);
describePopulation("Japan", 125);

// 5
const populations = ["Brazil" , "Canada", "Argentina", "Japan"];
if (populations.length === 4) {
    console.log("True");
} else {
    console.log("False")
}

const percentages = [percentageOfWorld1(250), percentageOfWorld1(100), percentageOfWorld1(150), percentageOfWorld1(120)];
console.log(percentages);

// 6
const neighbours = ["Argentina", "Uruguai", "Paraguai", "Bolivia", "Peru", "Colombia", "Venezuela"];
neighbours.push("Utopia");
neighbours.pop();
if (neighbours.includes("Germany")) {
    console.log("European country!");
} else {
    console.log("Probably not a central European country!");
}
console.log(neighbours.indexOf("Peru")); // O log diz que é 4!
neighbours[4] = "PERUANO! 👒";
console.log(neighbours);

// 7
let myCountry = {
    country: "Japan",
    capital: "Tokyo",
    language: "japanese",
    population: 125,
    neighbours: ["South Korea", "North Korea", "Russia"],

    describe: function() {
        console.log(`${this.country} has a ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function() {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
}
console.log(myCountry);

// 8
console.log(`${myCountry.country} has a ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry["population"] = myCountry["population"] - 2;
console.log(myCountry["population"]);

// 9
myCountry.describe();

// 10
