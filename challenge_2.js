/**
 * ALGORITHMS
 *
 * Implement an algorithm that can pass the unit tests.
 * Avoid using built-in functions as much as possible
 *
 * Difficulty: Medium
 */

function sort(arr) {
  let newArray = [];
  // ONLY CHANGE CODE BELOW
  //bubble sort
  let swapped;
  let holder;
  let copyArray = arr;
  while (true) {
    swapped = false;
    for (let counter = 0; counter < arr.length - 1; counter++) {
      if (arr[counter] > arr[counter + 1]) {
        holder = copyArray[counter];
        copyArray[counter] = copyArray[counter + 1];
        copyArray[counter + 1] = holder;
        swapped = true;
      }
    }

    if (!swapped) break;
  }
  newArray = copyArray;
  // ONLY CHANGE CODE ABOVE
  return newArray;
}

let array = [1, 2, 3, 4];
let array2 = array;
console.log(array == array2);

function require(condition) {
  if (!condition) console.warn("CONDITION WAS NOT MET");
}

require(sort([]) == []);
require(sort([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5]);
require(sort([1, 3, 4, 2, 5]) == [1, 2, 3, 4, 5]);
