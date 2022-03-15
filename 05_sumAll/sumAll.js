const sumAll = function(start, finish) {
    let answer = 0;
    if (typeof start !== 'number' || typeof finish !== 'number') {
        return 'ERROR'
    } else if (start <= finish) {
        for (let i = start; i <= finish; i++) {
          if (start < 0 || finish < 0) {
              return 'ERROR';
          } else {
             answer += i;
          }
        }
    return(answer)
    } else {
        for (let i = finish; i <= start; i++) {
            if (start < 0 || finish <0) {
                return 'ERROR';
            } else {
                answer += i;
            }
        }
    return(answer)    
    }










};


//npm test sumAll.spec.js


//code wont run for test 3 because i is bigger than finish.
//if i switch the two numbers then it wont work with
//bigger numbers second...
//


// Do not edit below this line
module.exports = sumAll;

