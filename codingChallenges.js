'use strict';

///////////////////////////////////////
// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated
(so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team.
Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as
parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console,
together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

const checkWinner = (dol, koa) => {
    if (dol >= 2 * koa) {
        console.log(`Dolphins are victorious! (${dol} vs ${koa})`);
    }
    else if (koa >= 2 * dol) {
        console.log(`The Koalas took the prize! (${koa} vs ${dol})`);
    }
    else {
        console.log("A regrettable down for both sides...")
    }
}

const calcAverage = (scoreDolphin, scoreKoala) => {
    let avgDolphin = scoreDolphin / 3;
    let avgKoala = scoreKoala / 3;
    checkWinner(avgDolphin, avgKoala);
}

let dolphinScore = 44 + 23 + 71;
let koalaScore = 65 + 54 + 49;
calcAverage(dolphinScore, koalaScore);
dolphinScore = 85 + 54 + 41;
koalaScore = 23 + 34 + 27;
calcAverage(dolphinScore, koalaScore);


///////////////////////////////////////
// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before:
Tip 15% of the bill if the bill value is between 50 and 300,
and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44
*/

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15
    } else {
        return bill * 0.20
    }
}

const totalBill = (bill, tip) => {
    for (let i = 0; i < bill.length; i++){
        total[i] = bill[i] + tip[i];
    }
}

let bills = [125, 555, 44];
let tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];
console.log(`Tips calculated: ${tips}`);
const total = [];
totalBill(bills, tips);
console.log(`Total values: ${total}`);


///////////////////////////////////////
// Coding Challenge #3

let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2);
        return this.bmi;
    }
}

let john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.bmi = (this.mass / this.height ** 2);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if (john.calcBMI() > mark.calcBMI) {
    console.log(`${john.fullName} BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`);
} else {
    console.log(`${mark.fullName} BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
}


///////////////////////////////////////
// Coding Challenge #4

bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
let totals = [];

let calcAverage2 = (arr) => {
    let size = 0;
    let absoluteVal = 0;
    for (let i = 0; i < arr.length; i++) {
        size++;
        absoluteVal = absoluteVal + arr[i];
    }
    return (absoluteVal/size);
}

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = bills[i] + tips[i];

}
console.log(`Total values: ${totals}`);
console.log(`Average calculated: ${calcAverage2(totals)}`);