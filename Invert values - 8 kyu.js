
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


const traynee = [1, 2, 3, 4, 5]

function invert(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i] * (-1))
    }
    return newArray;
 }





 function invert(array) {
    const result = array.map(function(number) {
        return number * (-1);
      })
      return result
    }

//     console.log(invert(traynee));
    