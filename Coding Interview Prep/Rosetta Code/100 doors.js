
/**
 * There are 100 doors in a row that are all initially closed.
 * You make 100 passes by the doors.
 * The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
 * The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
 * The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
 * 
 * https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/100-doors
 * 
 * Complexity O(n²)
 * @todo should be improved.
 * 
 * @param {*} numDoors number of doors.
 * @returns the final result in an array, with only the door number included in the array if it is open.
 */
function getFinalOpenedDoors(numDoors) {

    let result = [];
    for (let doorNumber = 1; doorNumber <= numDoors; doorNumber++) {
        let timesToggled = 0;
        for (let i = 1; i <= doorNumber; i++) {
            if (doorNumber % i == 0) {
                timesToggled++
            }
        }
        if (timesToggled % 2 != 0) {
            result.push(doorNumber);
        }
    }
  
    return result;
  }

/**
 * Compare a to b
 * @param {*} a 
 * @param {*} b 
 * @returns true if every a[x] === b[x]
 */
const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

if (equals(getFinalOpenedDoors(100), [1,  4,  9, 16,  25, 36, 49, 64, 81, 100])) {
     console.log("OK");
 } else {
     console.log("NOT OK!");
 }


