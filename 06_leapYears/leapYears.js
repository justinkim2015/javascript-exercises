const leapYears = function(year) {
if ((year % 4 == 0) && (year % 400 == 0)) {
    return true
} else if (year % 4 == 0){
    return true
} else {
    return false
}
};

//npm test leapYears.spec.js

// Do not edit below this line
module.exports = leapYears;
