//1
const sumOfFourAndSix = () => {
    let sum = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            sum += i;
        }
    }
    return sum
}
//console.log(sumOfFourAndSix())
//2
const oddAndEvenInFifteen = () => {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`)
        }
        else {
            console.log(`${i} is odd`)
        }
    }
}
//oddAndEvenInFifteen();

//3
const assignGrade = (score) => {
    if (score > 90 && score <= 100) {
        return "A";
    }
    else if (score > 80 && score <= 90) {
        return "B";
    }
    else if (score > 70 && score <= 80) {
        return "C";
    }
    else if (score > 64 && score <= 70) {
        return "D";
    }
    else if (score < 64) {
        return "F";
    }
    else {
        return null;
    }
}
console.log(assignGrade(40))