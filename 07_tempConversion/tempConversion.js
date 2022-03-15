const ftoc = function(deg) {
  return Math.round(((deg - 32) * (5 / 9))*10) / 10;
};

const ctof = function(deg) {
  return Math.round((deg * (9/ 5) + 32) * 10) / 10;
};
//npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
