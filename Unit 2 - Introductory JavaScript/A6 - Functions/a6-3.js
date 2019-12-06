function rowOfOne() {
    console.log("   *");
}

function rowOfThree() {
    console.log("  ***");
}

function rowOfFive() {
    console.log(" *****");
}

function rowOfSeven() {
    console.log(" *******");
}

function diamond() {
    rowOfOne();
    rowOfThree();
    rowOfFive();
    rowOfThree();
    rowOfOne();
}

function bigDiamond() {
    rowOfOne();
    rowOfThree();
    rowOfFive();
    rowOfThree();
    rowOfOne();
    rowOfSeven();
}

function triangle() {
    rowOfOne();
    rowOfThree();
    rowOfFive();
    rowOfThree();
    rowOfOne();
    rowOfOne();
    rowOfThree();
    rowOfFive();
    rowOfThree();
    rowOfOne();
    rowOfSeven();
}

function shapes() {
    diamond();
    bigDiamond();
    triangle();
}

diamond();
bigDiamond();
triangle();
shapes();